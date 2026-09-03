import { Archivo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/**
 * Canonical origin for absolute URLs in metadata (OG/Twitter images, canonicals).
 * Override per environment with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://advaitgreen.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Advait Green Recycling | CPCB Authorised E-Waste & Plastic Recycler in India",
    template: "%s | Advait Green Recycling",
  },
  description:
    "CPCB & GPCB authorised recycler in Mahesana, Gujarat. E-waste and plastic waste recycling, biomedical and solid waste management, pollution control devices, EPR compliance and AMC recycling contracts across India.",
  applicationName: "Advait Green Recycling",
  authors: [{ name: "Advait Green Recycling Private Limited" }],
  generator: "Next.js",
  keywords: [
    "e-waste recycling India",
    "CPCB authorised recycler",
    "GPCB authorised recycler",
    "plastic waste management",
    "bio medical waste management",
    "solid waste management",
    "pollution control devices",
    "EPR compliance",
    "EPR certificate",
    "e-waste recycler Gujarat",
    "secure data destruction",
    "battery recycling",
    "Advait Green Recycling",
  ],
  category: "Waste Management & Recycling",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Advait Green Recycling",
    title: "Advait Green Recycling | CPCB Authorised E-Waste & Plastic Recycler in India",
    description:
      "Authorised recycling for e-waste, plastics, biomedical and solid waste - with the certificates, manifests and EPR filings your compliance file needs.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Advait Green Recycling Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advait Green Recycling | CPCB Authorised Recycler",
    description:
      "Authorised recycling for e-waste, plastics, biomedical and solid waste - documented, traceable and audit-ready.",
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Icons are emitted from the app/ file conventions:
  // app/favicon.ico, app/icon.png, app/apple-icon.png
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport = {
  themeColor: "#001A2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${instrumentSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
