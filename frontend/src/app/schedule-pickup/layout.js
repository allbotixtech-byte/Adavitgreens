export const metadata = {
  title: "Schedule a Free Pickup",
  description:
    "Book a free e-waste, plastic, battery or solid waste collection from Advait Green Recycling. CPCB and GPCB authorised processing, certificates for every consignment, no minimum quantity.",
  alternates: { canonical: "/schedule-pickup" },
  openGraph: {
    title: "Schedule a Free Pickup | Advait Green Recycling",
    description:
      "Tell us what you have and where it is. We respond within one working day with a collection slot and an indicative valuation.",
    url: "/schedule-pickup",
    images: [{ url: "/images/E-West-Managment-4.webp", alt: "Schedule a free pickup with Advait Green Recycling" }],
  },
  twitter: {
    title: "Schedule a Free Pickup | Advait Green Recycling",
    description: "Free collection, authorised processing, certificates for every consignment.",
    images: ["/images/E-West-Managment-4.webp"],
  },
};

export default function Layout({ children }) {
  return children;
}
