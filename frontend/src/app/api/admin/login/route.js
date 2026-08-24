import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(request) {
  const { email, password } = await request.json();

  const adminEmail = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ id: "admin", email });
  return NextResponse.json({ token, message: "Login successful" });
}
