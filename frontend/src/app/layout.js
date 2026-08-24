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

export const metadata = {
  title: {
    default: "Advait Green Recycling | E-Waste, Plastic & Battery Recycling",
    template: "%s | Advait Green Recycling",
  },
  description:
    "Advait Green Recycling is a GPCB & CPCB authorised recycler offering e-waste recycling, plastic waste management, battery recycling, EPR compliance and secure data destruction across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrumentSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
