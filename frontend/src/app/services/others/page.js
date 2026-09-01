import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "Other Services",
  description:
    "Secure data destruction, battery and solar panel recycling, reverse logistics, asset buyback and ESG reporting support from Advait Green Recycling.",
  alternates: { canonical: "/services/others" },
  openGraph: {
    title: "Other Services | Advait Green Recycling",
    description:
      "Secure data destruction, battery and solar panel recycling, reverse logistics, asset buyback and ESG reporting support from Advait Green Recycling.",
    url: "/services/others",
    images: [{ url: "/images/esg.png", alt: "Other Services — Advait Green Recycling" }],
  },
  twitter: {
    title: "Other Services | Advait Green Recycling",
    description: "Secure data destruction, battery and solar panel recycling, reverse logistics, asset buyback and ESG reporting support from Advait Green Recycling.",
    images: ["/images/esg.png"],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="others" />;
}
