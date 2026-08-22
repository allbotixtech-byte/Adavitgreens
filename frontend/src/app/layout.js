import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Advait Green Recycling | Turning Waste Into Resources",
    template: "%s | Advait Green Recycling",
  },
  description:
    "ADVAIT GREEN RECYCLING PRIVATE LIMITED provides responsible recycling and waste-management solutions designed to recover valuable resources, reduce environmental impact and help businesses manage their end-of-life materials responsibly.",
  keywords: [
    "e-waste recycling",
    "IT asset disposition",
    "data destruction",
    "reverse logistics",
    "EPR solutions",
    "resource recovery",
    "electronic waste",
    "recycling Gujarat",
    "Advait Green",
  ],
  authors: [{ name: "Advait Green Recycling Private Limited" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Advait Green Recycling",
    title: "Advait Green Recycling | Turning Waste Into Resources",
    description:
      "Responsible recycling and waste-management solutions for businesses across India.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
