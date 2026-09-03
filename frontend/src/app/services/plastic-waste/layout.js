export const metadata = {
  title: "Plastic Waste Management",
  description:
    "Collection, sorting, washing and granulation of plastic waste into production-grade recycled granules, with EPR certificates backed by verified processing volumes.",
  alternates: { canonical: "/services/plastic-waste" },
  openGraph: {
    title: "Plastic Waste Management | Advait Green Recycling",
    description:
      "Collection, sorting, washing and granulation of plastic waste into production-grade recycled granules, with EPR certificates backed by verified processing volumes.",
    url: "/services/plastic-waste",
    images: [{ url: "/images/plastic-west.png", width: 1200, height: 630, alt: "Plastic Waste Management - Advait Green Recycling" }],
  },
  twitter: {
    title: "Plastic Waste Management | Advait Green Recycling",
    description: "Collection, sorting, washing and granulation of plastic waste into production-grade recycled granules, with EPR certificates backed by verified processing volumes.",
    images: ["/images/plastic-west.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
