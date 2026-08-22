"use client";

import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { services } from "@/data/services";

export default function EWastePage() {
  const service = services.find((s) => s.slug === "e-waste");
  return <ServicePageTemplate service={service} />;
}
