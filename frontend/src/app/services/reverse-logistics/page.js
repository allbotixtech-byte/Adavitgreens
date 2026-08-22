"use client";

import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { services } from "@/data/services";

export default function ReverseLogisticsPage() {
  const service = services.find((s) => s.slug === "reverse-logistics");
  return <ServicePageTemplate service={service} />;
}
