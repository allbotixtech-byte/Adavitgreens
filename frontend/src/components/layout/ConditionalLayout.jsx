"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { hasFullHero } from "@/lib/layout";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const fullHero = hasFullHero(pathname);

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Header />
      {/* Pages with full-height hero sit behind the fixed header; others need top offset */}
      <main className={`flex-1 ${fullHero ? "" : "pt-[70px] sm:pt-[80px] lg:pt-[128px]"}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
