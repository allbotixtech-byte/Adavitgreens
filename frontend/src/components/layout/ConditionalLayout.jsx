"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/";

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Header />
      {/* Home page hero sits behind the fixed header; other pages need top offset */}
      <main className={`flex-1 ${isHome ? "" : "pt-[108px] lg:pt-[108px]"}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
