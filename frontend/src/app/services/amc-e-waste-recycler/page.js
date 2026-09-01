import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "AMC Authorised E-Waste Recycler",
  description:
    "An annual maintenance contract for your e-waste — scheduled pickups, asset-level reporting, data destruction and year-round compliance from a CPCB authorised recycler.",
  alternates: { canonical: "/services/amc-e-waste-recycler" },
  openGraph: {
    title: "AMC Authorised E-Waste Recycler | Advait Green Recycling",
    description:
      "An annual maintenance contract for your e-waste — scheduled pickups, asset-level reporting, data destruction and year-round compliance from a CPCB authorised recycler.",
    url: "/services/amc-e-waste-recycler",
    images: [{ url: "/images/secure-data.png", alt: "AMC Authorised E-Waste Recycler — Advait Green Recycling" }],
  },
  twitter: {
    title: "AMC Authorised E-Waste Recycler | Advait Green Recycling",
    description: "An annual maintenance contract for your e-waste — scheduled pickups, asset-level reporting, data destruction and year-round compliance from a CPCB authorised recycler.",
    images: ["/images/secure-data.png"],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="amc-e-waste-recycler" />;
}
