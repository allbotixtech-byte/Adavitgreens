import { NextResponse } from "next/server";
import { readData, writeData, generateId } from "@/lib/db";
import { saveFile } from "@/lib/upload";

export async function POST(request, { params }) {
  const { id } = await params;
  const careers = readData("careers");
  const career = careers.find((c) => c.id === id);

  if (!career) {
    return NextResponse.json({ message: "Career not found" }, { status: 404 });
  }

  const formData = await request.formData();
  const resumeFile = formData.get("resume");

  let resumeUrl = "";
  if (resumeFile && typeof resumeFile !== "string") {
    resumeUrl = await saveFile(resumeFile);
  }

  const applications = readData("applications");
  const application = {
    id: generateId(),
    careerPostId: id,
    careerTitle: career.title,
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    experience: formData.get("experience") || "",
    resumeUrl,
    coverLetter: formData.get("coverLetter") || "",
    createdAt: new Date().toISOString(),
  };

  applications.push(application);
  writeData("applications", applications);

  return NextResponse.json({ message: "Application submitted successfully" }, { status: 201 });
}
