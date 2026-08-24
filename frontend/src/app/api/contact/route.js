import { NextResponse } from "next/server";
import { readData, writeData, generateId } from "@/lib/db";

export async function POST(request) {
  const data = await request.json();

  const contacts = readData("contacts");
  const submission = {
    id: generateId(),
    name: data.name,
    company: data.company || "",
    email: data.email,
    phone: data.phone,
    city: data.city || "",
    service: data.service || "",
    message: data.message || "",
    isRead: false,
    createdAt: new Date().toISOString(),
  };

  contacts.push(submission);
  writeData("contacts", contacts);

  return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 201 });
}
