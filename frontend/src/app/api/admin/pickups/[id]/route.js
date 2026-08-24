import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData } from "@/lib/db";

export const DELETE = withAuth(async (request, { params }) => {
  const { id } = await params;
  const pickups = readData("pickups");
  const index = pickups.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Pickup not found" }, { status: 404 });
  }

  pickups.splice(index, 1);
  writeData("pickups", pickups);

  return NextResponse.json({ message: "Pickup deleted" });
});
