"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const hasFullHero = isHome || isAbout;

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Header />
      {/* Pages with full-height hero sit behind the fixed header; others need top offset */}
      <main className={`flex-1 ${hasFullHero ? "" : "pt-[108px] lg:pt-[108px]"}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
