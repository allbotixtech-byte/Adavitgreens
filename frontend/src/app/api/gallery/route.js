import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData, generateId } from "@/lib/db";
import { saveFile } from "@/lib/upload";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let gallery = readData("gallery");

  if (category) {
    gallery = gallery.filter((g) => g.category === category);
  }

  gallery.sort((a, b) => (a.order || 0) - (b.order || 0) || new Date(b.createdAt) - new Date(a.createdAt));

  return NextResponse.json({ images: gallery, total: gallery.length });
}

export const POST = withAuth(async (request) => {
  const formData = await request.formData();
  const imageFile = formData.get("image");

  if (!imageFile || typeof imageFile === "string") {
    return NextResponse.json({ message: "Image is required" }, { status: 400 });
  }

  const imageUrl = await saveFile(imageFile);

  const gallery = readData("gallery");
  const image = {
    id: generateId(),
    title: formData.get("title") || "",
    category: formData.get("category") || "Facility",
    imageUrl,
    description: formData.get("description") || "",
    order: gallery.length,
    createdAt: new Date().toISOString(),
  };

  gallery.push(image);
  writeData("gallery", gallery);

  return NextResponse.json(image, { status: 201 });
});
