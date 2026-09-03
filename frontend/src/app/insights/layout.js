export const metadata = {
  // Object form (not a plain string) so nested article routes still inherit
  // the brand title template rather than overriding it for the whole subtree.
  title: {
    default: "Blog & Insights",
    template: "%s | Advait Green Recycling",
  },
  description:
    "Regulatory updates, practical guides and honest commentary on e-waste, plastic waste, EPR compliance and waste management in India.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Blog & Insights | Advait Green Recycling",
    description:
      "Regulatory updates, practical guides and honest commentary on e-waste, plastic waste, EPR compliance and waste management in India.",
    url: "/insights",
    images: [{ url: "/images/blog_hero_bg.png", width: 1200, height: 630, alt: "Blog & Insights - Advait Green Recycling" }],
  },
  twitter: {
    title: "Blog & Insights | Advait Green Recycling",
    description: "Regulatory updates, practical guides and honest commentary on e-waste, plastic waste, EPR compliance and waste management in India.",
    images: ["/images/blog_hero_bg.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
