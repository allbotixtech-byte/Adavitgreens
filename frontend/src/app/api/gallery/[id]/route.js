import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData } from "@/lib/db";
import { deleteFile } from "@/lib/upload";

export const PUT = withAuth(async (request, { params }) => {
  const { id } = await params;
  const gallery = readData("gallery");
  const index = gallery.findIndex((g) => g.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Image not found" }, { status: 404 });
  }

  const data = await request.json();
  gallery[index] = { ...gallery[index], ...data, updatedAt: new Date().toISOString() };
  writeData("gallery", gallery);

  return NextResponse.json(gallery[index]);
});

export const DELETE = withAuth(async (request, { params }) => {
  const { id } = await params;
  const gallery = readData("gallery");
  const index = gallery.findIndex((g) => g.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Image not found" }, { status: 404 });
  }

  deleteFile(gallery[index].imageUrl);
  gallery.splice(index, 1);
  writeData("gallery", gallery);

  return NextResponse.json({ message: "Image deleted" });
});
