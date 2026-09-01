export const metadata = {
  title: "E-Waste Management",
  description:
    "CPCB and GPCB authorised e-waste recycling — collection, dismantling, shredding and metal recovery with certificates of recycling and data destruction for every consignment.",
  alternates: { canonical: "/services/e-waste" },
  openGraph: {
    title: "E-Waste Management | Advait Green Recycling",
    description:
      "CPCB and GPCB authorised e-waste recycling — collection, dismantling, shredding and metal recovery with certificates of recycling and data destruction for every consignment.",
    url: "/services/e-waste",
    images: [{ url: "/images/e-west.png", width: 1200, height: 630, alt: "E-Waste Management — Advait Green Recycling" }],
  },
  twitter: {
    title: "E-Waste Management | Advait Green Recycling",
    description: "CPCB and GPCB authorised e-waste recycling — collection, dismantling, shredding and metal recovery with certificates of recycling and data destruction for every consignment.",
    images: ["/images/e-west.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
