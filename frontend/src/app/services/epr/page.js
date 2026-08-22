"use client";

import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { services } from "@/data/services";

export default function EPRPage() {
  const service = services.find((s) => s.slug === "epr");
  return <ServicePageTemplate service={service} />;
}
