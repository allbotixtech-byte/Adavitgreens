import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData } from "@/lib/db";

export const PUT = withAuth(async (request, { params }) => {
  const { id } = await params;
  const pickups = readData("pickups");
  const index = pickups.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Pickup not found" }, { status: 404 });
  }

  pickups[index].isRead = true;
  writeData("pickups", pickups);

  return NextResponse.json(pickups[index]);
});
