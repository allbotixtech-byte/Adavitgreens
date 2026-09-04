import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "Pollution Control Devices",
  description:
    "Design, supply, installation and AMC of air scrubbers, dust collectors, ETPs and stack monitoring systems engineered to meet CPCB and GPCB consent limits.",
  alternates: { canonical: "/services/pollution-control-devices" },
  openGraph: {
    title: "Pollution Control Devices | Advait Green Recycling",
    description:
      "Design, supply, installation and AMC of air scrubbers, dust collectors, ETPs and stack monitoring systems engineered to meet CPCB and GPCB consent limits.",
    url: "/services/pollution-control-devices",
    images: [{ url: "/images/Industrial-Equipment.webp", alt: "Pollution Control Devices - Advait Green Recycling" }],
  },
  twitter: {
    title: "Pollution Control Devices | Advait Green Recycling",
    description: "Design, supply, installation and AMC of air scrubbers, dust collectors, ETPs and stack monitoring systems engineered to meet CPCB and GPCB consent limits.",
    images: ["/images/Industrial-Equipment.webp"],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="pollution-control-devices" />;
}
