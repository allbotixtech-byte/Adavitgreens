import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData, writeData } from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  const careers = readData("careers");
  const career = careers.find((c) => c.id === id);

  if (!career) {
    return NextResponse.json({ message: "Career not found" }, { status: 404 });
  }

  return NextResponse.json(career);
}

export const PUT = withAuth(async (request, { params }) => {
  const { id } = await params;
  const careers = readData("careers");
  const index = careers.findIndex((c) => c.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Career not found" }, { status: 404 });
  }

  const data = await request.json();
  careers[index] = {
    ...careers[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  writeData("careers", careers);

  return NextResponse.json(careers[index]);
});

export const DELETE = withAuth(async (request, { params }) => {
  const { id } = await params;
  const careers = readData("careers");
  const index = careers.findIndex((c) => c.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Career not found" }, { status: 404 });
  }

  careers.splice(index, 1);
  writeData("careers", careers);

  return NextResponse.json({ message: "Career deleted" });
});
