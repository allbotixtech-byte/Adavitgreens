import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth";
import { readData } from "@/lib/db";

export const GET = withAuth(async () => {
  const blogs = readData("blogs");
  const gallery = readData("gallery");
  const careers = readData("careers");
  const applications = readData("applications");
  const contacts = readData("contacts");
  const pickups = readData("pickups");

  const unreadContacts = contacts.filter((c) => !c.isRead).length;
  const unreadPickups = pickups.filter((p) => !p.isRead).length;

  return NextResponse.json({
    blogs: blogs.length,
    gallery: gallery.length,
    careers: careers.filter((c) => c.isActive).length,
    applications: applications.length,
    contacts: contacts.length,
    pickups: pickups.length,
    unreadContacts,
    unreadPickups,
    totalUnread: unreadContacts + unreadPickups,
  });
});
