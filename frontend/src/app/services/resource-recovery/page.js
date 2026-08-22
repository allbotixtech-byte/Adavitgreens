"use client";

import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { services } from "@/data/services";

export default function ResourceRecoveryPage() {
  const service = services.find((s) => s.slug === "resource-recovery");
  return <ServicePageTemplate service={service} />;
}
