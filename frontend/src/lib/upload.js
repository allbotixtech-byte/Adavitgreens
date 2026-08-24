import fs from "fs";
import path from "path";

const uploadDir = path.join(process.cwd(), "public", "uploads");

export async function saveFile(file) {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = path.extname(file.name) || ".bin";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
  const filePath = path.join(uploadDir, filename);

  fs.writeFileSync(filePath, buffer);

  return `/uploads/${filename}`;
}

export function deleteFile(fileUrl) {
  if (!fileUrl || !fileUrl.startsWith("/uploads/")) return;
  const filePath = path.join(process.cwd(), "public", fileUrl);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}
