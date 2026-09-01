import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "Solid Waste Management",
  description:
    "Segregated collection, material recovery, organic processing and scientific disposal of municipal and industrial solid waste under the Solid Waste Management Rules, 2016.",
  alternates: { canonical: "/services/solid-waste" },
  openGraph: {
    title: "Solid Waste Management | Advait Green Recycling",
    description:
      "Segregated collection, material recovery, organic processing and scientific disposal of municipal and industrial solid waste under the Solid Waste Management Rules, 2016.",
    url: "/services/solid-waste",
    images: [{ url: "/images/reverse-logistic.png", alt: "Solid Waste Management — Advait Green Recycling" }],
  },
  twitter: {
    title: "Solid Waste Management | Advait Green Recycling",
    description: "Segregated collection, material recovery, organic processing and scientific disposal of municipal and industrial solid waste under the Solid Waste Management Rules, 2016.",
    images: ["/images/reverse-logistic.png"],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="solid-waste" />;
}
