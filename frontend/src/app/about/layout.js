export const metadata = {
  title: "About Us",
  description:
    "Advait Green Recycling Private Limited - a CPCB and GPCB authorised recycler in Mahesana, Gujarat. Our facility, capacity, certifications, values and the team behind every tonne processed.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Advait Green Recycling",
    description:
      "Advait Green Recycling Private Limited - a CPCB and GPCB authorised recycler in Mahesana, Gujarat. Our facility, capacity, certifications, values and the team behind every tonne processed.",
    url: "/about",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630, alt: "About Us - Advait Green Recycling" }],
  },
  twitter: {
    title: "About Us | Advait Green Recycling",
    description: "Advait Green Recycling Private Limited - a CPCB and GPCB authorised recycler in Mahesana, Gujarat. Our facility, capacity, certifications, values and the team behind every tonne processed.",
    images: ["/images/og-default.webp"],
  },
};

export default function Layout({ children }) {
  return children;
}
