import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata = {
  title: "Solid Waste Management",
  description:
    "Segregated collection, material recovery, organic processing and scientific disposal of municipal and industrial solid waste under the Solid Waste Management Rules, 2016.",
};

export default function Page() {
  return <ServiceDetailPage slug="solid-waste" />;
}
