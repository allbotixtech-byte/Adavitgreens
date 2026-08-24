import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData } from "@/lib/db";

export const DELETE = withAuth(async (request, { params }) => {
  const { id } = await params;
  const contacts = readData("contacts");
  const index = contacts.findIndex((c) => c.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Contact not found" }, { status: 404 });
  }

  contacts.splice(index, 1);
  writeData("contacts", contacts);

  return NextResponse.json({ message: "Contact deleted" });
});
