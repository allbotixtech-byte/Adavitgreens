import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data", "json");

export function readData(filename) {
  const filePath = path.join(dataDir, `${filename}.json`);
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function writeData(filename, data) {
  const filePath = path.join(dataDir, `${filename}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
