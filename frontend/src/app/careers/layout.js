export const metadata = {
  title: "Careers",
  description:
    "Build a career in sustainable recycling. Open roles at Advait Green Recycling across operations, logistics, compliance and plant engineering in Mahesana, Gujarat.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Advait Green Recycling",
    description:
      "Build a career in sustainable recycling. Open roles at Advait Green Recycling across operations, logistics, compliance and plant engineering in Mahesana, Gujarat.",
    url: "/careers",
    images: [{ url: "/images/career_hero_bg.webp", width: 1200, height: 630, alt: "Careers - Advait Green Recycling" }],
  },
  twitter: {
    title: "Careers | Advait Green Recycling",
    description: "Build a career in sustainable recycling. Open roles at Advait Green Recycling across operations, logistics, compliance and plant engineering in Mahesana, Gujarat.",
    images: ["/images/career_hero_bg.webp"],
  },
};

export default function Layout({ children }) {
  return children;
}
