import { NextResponse } from "next/server";
import { readData, writeData, generateId } from "@/lib/db";

export async function POST(request) {
  const data = await request.json();

  const pickups = readData("pickups");
  const submission = {
    id: generateId(),
    name: data.name,
    organization: data.organization || "",
    email: data.email,
    phone: data.phone,
    address: data.address || "",
    city: data.city || "",
    pincode: data.pincode || "",
    preferredDate: data.preferredDate || "",
    preferredTime: data.preferredTime || "",
    materialType: data.materialType || "",
    quantity: data.quantity || "",
    remarks: data.remarks || "",
    isRead: false,
    createdAt: new Date().toISOString(),
  };

  pickups.push(submission);
  writeData("pickups", pickups);

  return NextResponse.json({ message: "Pickup request submitted successfully" }, { status: 201 });
}
