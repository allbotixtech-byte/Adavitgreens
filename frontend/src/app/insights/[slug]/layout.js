import blogs from "@/data/json/blogs.json";

/**
 * Per-post metadata. The post page itself is a client component, so the
 * title/description/OG tags are resolved here from the same blog store the
 * page reads. `params` is a Promise in Next 16 and must be awaited.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for is no longer available.",
      robots: { index: false, follow: true },
    };
  }

  const image = post.thumbnail || "/images/og-default.webp";

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      images: [{ url: image, alt: post.title }],
      publishedTime: post.publishedAt || post.date || undefined,
      authors: post.author ? [post.author] : undefined,
      section: post.category || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default function Layout({ children }) {
  return children;
}
