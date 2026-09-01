import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "Extended Producer Responsibility (EPR)",
  description:
    "EPR registration, target planning and certificate generation for producers, importers and brand owners — backed by verified recycling at our own authorised facility.",
  alternates: { canonical: "/services/epr" },
  openGraph: {
    title: "Extended Producer Responsibility (EPR) | Advait Green Recycling",
    description:
      "EPR registration, target planning and certificate generation for producers, importers and brand owners — backed by verified recycling at our own authorised facility.",
    url: "/services/epr",
    images: [{ url: "/images/epr.png", alt: "Extended Producer Responsibility (EPR) — Advait Green Recycling" }],
  },
  twitter: {
    title: "Extended Producer Responsibility (EPR) | Advait Green Recycling",
    description: "EPR registration, target planning and certificate generation for producers, importers and brand owners — backed by verified recycling at our own authorised facility.",
    images: ["/images/epr.png"],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="epr" />;
}
