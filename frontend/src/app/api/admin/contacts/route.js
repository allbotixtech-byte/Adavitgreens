import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData } from "@/lib/db";

export const GET = withAuth(async () => {
  const contacts = readData("contacts");
  contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return NextResponse.json({ contacts });
});
