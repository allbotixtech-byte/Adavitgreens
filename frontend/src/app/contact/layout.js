export const metadata = {
  title: "Contact Us",
  description:
    "Talk to Advait Green Recycling about e-waste, plastic, biomedical or solid waste. Request a pickup, an EPR assessment or a site survey - we respond within one working day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Advait Green Recycling",
    description:
      "Talk to Advait Green Recycling about e-waste, plastic, biomedical or solid waste. Request a pickup, an EPR assessment or a site survey - we respond within one working day.",
    url: "/contact",
    images: [{ url: "/images/contact-us.webp", width: 1200, height: 630, alt: "Contact Us - Advait Green Recycling" }],
  },
  twitter: {
    title: "Contact Us | Advait Green Recycling",
    description: "Talk to Advait Green Recycling about e-waste, plastic, biomedical or solid waste. Request a pickup, an EPR assessment or a site survey - we respond within one working day.",
    images: ["/images/contact-us.webp"],
  },
};

export default function Layout({ children }) {
  return children;
}
