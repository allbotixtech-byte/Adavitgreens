import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData, generateId } from "@/lib/db";

export async function GET(request) {
  let careers = readData("careers");

  // Public: only active careers unless admin
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    careers = careers.filter((c) => c.isActive);
  }

  return NextResponse.json({ careers });
}

export const POST = withAuth(async (request) => {
  const data = await request.json();

  const careers = readData("careers");
  const career = {
    id: generateId(),
    title: data.title,
    department: data.department || "",
    location: data.location || "Mahesana, Gujarat",
    type: data.type || "Full-time",
    description: data.description || "",
    requirements: data.requirements || [],
    isActive: data.isActive !== false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  careers.push(career);
  writeData("careers", careers);

  return NextResponse.json(career, { status: 201 });
});
