import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData } from "@/lib/db";
import { saveFile, deleteFile } from "@/lib/upload";

export async function GET(request, { params }) {
  const { slug } = await params;
  const blogs = readData("blogs");
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export const PUT = withAuth(async (request, { params }) => {
  const { slug } = await params;
  const blogs = readData("blogs");
  const index = blogs.findIndex((b) => b.slug === slug);

  if (index === -1) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  const formData = await request.formData();
  const thumbnailFile = formData.get("thumbnail");

  let thumbnail = blogs[index].thumbnail;
  if (thumbnailFile && typeof thumbnailFile !== "string") {
    deleteFile(blogs[index].thumbnail);
    thumbnail = await saveFile(thumbnailFile);
  }

  const isPublished = formData.get("isPublished") === "true";

  blogs[index] = {
    ...blogs[index],
    title: formData.get("title") || blogs[index].title,
    category: formData.get("category") || blogs[index].category,
    author: formData.get("author") || blogs[index].author,
    excerpt: formData.get("excerpt") || blogs[index].excerpt,
    content: formData.get("content") || blogs[index].content,
    tags: formData.get("tags") ? formData.get("tags").split(",").map((t) => t.trim()) : blogs[index].tags,
    isPublished,
    thumbnail,
    publishedAt: isPublished && !blogs[index].publishedAt ? new Date().toISOString() : blogs[index].publishedAt,
    updatedAt: new Date().toISOString(),
  };

  writeData("blogs", blogs);
  return NextResponse.json(blogs[index]);
});

export const DELETE = withAuth(async (request, { params }) => {
  const { slug } = await params;
  const blogs = readData("blogs");
  const index = blogs.findIndex((b) => b.slug === slug);

  if (index === -1) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  deleteFile(blogs[index].thumbnail);
  blogs.splice(index, 1);
  writeData("blogs", blogs);

  return NextResponse.json({ message: "Blog deleted" });
});
