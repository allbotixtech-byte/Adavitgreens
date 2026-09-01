import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "Bio Medical Waste Management",
  description:
    "Colour-coded collection, barcoded tracking, dedicated transport and authorised treatment of biomedical waste under the Bio-Medical Waste Management Rules, 2016.",
  alternates: { canonical: "/services/bio-medical-waste" },
  openGraph: {
    title: "Bio Medical Waste Management | Advait Green Recycling",
    description:
      "Colour-coded collection, barcoded tracking, dedicated transport and authorised treatment of biomedical waste under the Bio-Medical Waste Management Rules, 2016.",
    url: "/services/bio-medical-waste",
    images: [{ url: "/images/pharma-healthcare.png", alt: "Bio Medical Waste Management — Advait Green Recycling" }],
  },
  twitter: {
    title: "Bio Medical Waste Management | Advait Green Recycling",
    description: "Colour-coded collection, barcoded tracking, dedicated transport and authorised treatment of biomedical waste under the Bio-Medical Waste Management Rules, 2016.",
    images: ["/images/pharma-healthcare.png"],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="bio-medical-waste" />;
}
