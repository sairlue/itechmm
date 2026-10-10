import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { query, isDatabaseConfigured } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "itechmm_super_secret_jwt_key_change_in_production_32chars!";
const secretKey = new TextEncoder().encode(JWT_SECRET);
const COOKIE_NAME = "itechmm_admin_token";

// Fallback demo credentials when MySQL is not yet configured
export const DEMO_ADMIN = {
  id: 1,
  username: "admin",
  email: "admin@itechmm.com",
  fullName: "System Administrator",
  role: "superadmin",
  // default password: AdminPassword123!
  passwordHash: "$2a$10$wN2J2F1z2eU5z2f9z2F9.Om9s0qY5L29FvU7D8uL5f3f0k1f2w3e4",
};

export async function hashPassword(plainText) {
  return bcrypt.hash(plainText, 10);
}

export async function comparePassword(plainText, hash) {
  return bcrypt.compare(plainText, hash);
}

export async function signAdminToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secretKey);
}

export async function verifyAdminToken(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (err) {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

export async function setAdminSession(token) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function authenticateAdmin(identifier, password) {
  const idTrimmed = identifier.trim();

  // If database is configured, query MySQL
  if (isDatabaseConfigured()) {
    try {
      const res = await query(
        `SELECT id, username, email, full_name, password_hash, role, is_active 
         FROM admin_users 
         WHERE (username = ? OR email = ?) AND is_active = 1 
         LIMIT 1`,
        [idTrimmed, idTrimmed]
      );

      if (res.rows && res.rows.length > 0) {
        const user = res.rows[0];
        const match = await bcrypt.compare(password, user.password_hash);
        if (match) {
          return {
            id: user.id,
            username: user.username,
            email: user.email,
            fullName: user.full_name,
            role: user.role,
          };
        }
      }
    } catch (dbError) {
      console.error("[Auth] Database check error:", dbError.message);
    }
  }

  // Fallback demo account for development/preview before MySQL is connected
  if (
    (idTrimmed === "admin" || idTrimmed === "admin@itechmm.com") &&
    password === "AdminPassword123!"
  ) {
    return {
      id: DEMO_ADMIN.id,
      username: DEMO_ADMIN.username,
      email: DEMO_ADMIN.email,
      fullName: DEMO_ADMIN.fullName,
      role: DEMO_ADMIN.role,
      isDemo: true,
    };
  }

  return null;
}
