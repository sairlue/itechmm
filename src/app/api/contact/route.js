import { NextResponse } from "next/server";
import { query, isDatabaseConfigured } from "@/lib/db";

// In-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const userTimestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = userTimestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before sending another message." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message, service } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a subject line (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please write a message with at least 10 characters so we can understand your requirements." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      phone: phone ? phone.trim().slice(0, 50) : null,
      subject: subject.trim().slice(0, 200),
      message: message.trim().slice(0, 2000),
      serviceInterested: service ? service.trim().slice(0, 100) : null,
    };

    // If MySQL is configured, insert into contact_inquiries table
    if (isDatabaseConfigured()) {
      try {
        await query(
          `INSERT INTO contact_inquiries 
            (name, email, phone, subject, message, service_interested, ip_address, user_agent) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            sanitizedData.name,
            sanitizedData.email,
            sanitizedData.phone,
            sanitizedData.subject,
            sanitizedData.message,
            sanitizedData.serviceInterested,
            ip,
            userAgent.slice(0, 255),
          ]
        );
        console.log(`[Contact API] Saved inquiry from ${sanitizedData.email} into MySQL.`);
      } catch (dbError) {
        console.error("[Contact API] Error saving to database:", dbError);
        // We still acknowledge the user so they know their inquiry was registered
      }
    } else {
      console.log(
        `[Contact API] Database not yet configured. Simulated storage for: ${sanitizedData.name} (${sanitizedData.email})`
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! We have received your message and will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("[Contact API] Exception occurred:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or email us directly at contact@itechmm.com." },
      { status: 500 }
    );
  }
}
