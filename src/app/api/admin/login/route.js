import { NextResponse } from "next/server";
import { authenticateAdmin, signAdminToken, setAdminSession } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { identifier, password } = body;

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Please enter your username/email and password." },
        { status: 400 }
      );
    }

    const admin = await authenticateAdmin(identifier, password);
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 }
      );
    }

    const token = await signAdminToken({
      sub: String(admin.id),
      username: admin.username,
      email: admin.email,
      role: admin.role,
      fullName: admin.fullName,
      isDemo: Boolean(admin.isDemo),
    });

    await setAdminSession(token);

    return NextResponse.json({
      success: true,
      message: "Authentication successful.",
      user: {
        username: admin.username,
        email: admin.email,
        fullName: admin.fullName,
        role: admin.role,
        isDemo: Boolean(admin.isDemo),
      },
    });
  } catch (err) {
    console.error("[Admin Login Error]", err);
    return NextResponse.json(
      { error: "An unexpected error occurred during authentication." },
      { status: 500 }
    );
  }
}
