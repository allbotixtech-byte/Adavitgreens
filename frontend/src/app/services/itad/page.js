"use client";

import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { services } from "@/data/services";

export default function ITADPage() {
  const service = services.find((s) => s.slug === "itad");
  return <ServicePageTemplate service={service} />;
}
