"use client";

import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { services } from "@/data/services";

export default function DataDestructionPage() {
  const service = services.find((s) => s.slug === "data-destruction");
  return <ServicePageTemplate service={service} />;
}
