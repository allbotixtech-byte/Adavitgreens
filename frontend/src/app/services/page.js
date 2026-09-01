import ServicesIndex from "@/components/sections/ServicesIndex";

export const metadata = {
  title: "Services",
  description:
    "E-waste, plastic waste, pollution control devices, biomedical waste, EPR, AMC recycling, solid waste management and specialised services — all under valid CPCB and GPCB authorisation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Advait Green Recycling",
    description:
      "Eight waste streams handled under valid CPCB and GPCB authorisation, with the documentation your audit file needs.",
    url: "/services",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Advait Green Recycling services" }],
  },
  twitter: {
    title: "Services | Advait Green Recycling",
    description: "Eight waste streams handled under valid CPCB and GPCB authorisation.",
    images: ["/images/og-default.png"],
  },
};

export default function Page() {
  return <ServicesIndex />;
}
