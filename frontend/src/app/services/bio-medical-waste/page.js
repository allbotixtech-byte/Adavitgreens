import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "Bio Medical Waste Management",
  description:
    "Colour-coded collection, barcoded tracking, dedicated transport and authorised treatment of biomedical waste under the Bio-Medical Waste Management Rules, 2016.",
};

export default function Page() {
  return <ServiceDetailPage slug="bio-medical-waste" />;
}
