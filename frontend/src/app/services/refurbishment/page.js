"use client";

import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { services } from "@/data/services";

export default function RefurbishmentPage() {
  const service = services.find((s) => s.slug === "refurbishment");
  return <ServicePageTemplate service={service} />;
}
