import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData, generateId, generateSlug } from "@/lib/db";
import { saveFile } from "@/lib/upload";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");

  let blogs = readData("blogs");

  // Public: only published blogs unless admin
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    blogs = blogs.filter((b) => b.isPublished);
  }

  if (category) {
    blogs = blogs.filter((b) => b.category === category);
  }

  blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const total = blogs.length;
  const start = (page - 1) * limit;
  const paginated = blogs.slice(start, start + limit);

  return NextResponse.json({
    blogs: paginated,
    total,
    page,
    pages: Math.ceil(total / limit),
  });
}

export const POST = withAuth(async (request) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const category = formData.get("category");
  const author = formData.get("author") || "Advait Green Team";
  const excerpt = formData.get("excerpt");
  const content = formData.get("content");
  const tags = formData.get("tags");
  const isPublished = formData.get("isPublished") === "true";
  const thumbnailFile = formData.get("thumbnail");

  let thumbnail = "";
  if (thumbnailFile && typeof thumbnailFile !== "string") {
    thumbnail = await saveFile(thumbnailFile);
  }

  const slug = generateSlug(title);
  const blogs = readData("blogs");

  // Ensure unique slug
  let finalSlug = slug;
  let counter = 1;
  while (blogs.some((b) => b.slug === finalSlug)) {
    finalSlug = `${slug}-${counter++}`;
  }

  const blog = {
    id: generateId(),
    title,
    slug: finalSlug,
    category,
    thumbnail,
    excerpt,
    content,
    author,
    tags: tags ? tags.split(",").map((t) => t.trim()) : [],
    isPublished,
    publishedAt: isPublished ? new Date().toISOString() : null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  blogs.push(blog);
  writeData("blogs", blogs);

  return NextResponse.json(blog, { status: 201 });
});
