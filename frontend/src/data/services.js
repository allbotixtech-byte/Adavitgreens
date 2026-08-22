import {
  Monitor,
  HardDrive,
  ShieldCheck,
  Truck,
  RefreshCw,
  FileCheck,
  Gem,
} from "lucide-react";

export const services = [
  {
    icon: Monitor,
    title: "E-Waste Recycling",
    slug: "e-waste",
    shortDesc:
      "Responsible collection, segregation, dismantling and recycling of applicable end-of-life electrical and electronic equipment.",
    hero: {
      heading: "Responsible E-Waste Recycling Starts Here",
      description:
        "From obsolete computers and electronics to applicable end-of-life electrical equipment, we provide structured solutions for collection, segregation, processing and responsible recycling.",
      cta: "Schedule E-Waste Pickup",
    },
    challenge: {
      heading: "The E-Waste Challenge",
      content:
        "Electronic products have become an essential part of modern life. But when devices reach the end of their useful life, they require responsible handling. Improper disposal can lead to resource loss and environmental risks. Our objective is to create a controlled path from discarded electronics to responsible recovery.",
    },
    items: [
      "Computers",
      "Laptops",
      "Servers",
      "Networking equipment",
      "Printers",
      "Scanners",
      "Monitors",
      "Telecommunication equipment",
      "Cables",
      "Circuit boards",
      "Consumer electronics",
      "Electrical equipment",
      "Other applicable electronic equipment",
    ],
    process: [
      { title: "Collection", description: "Organized pickup from your location" },
      { title: "Receiving", description: "Material intake and logging" },
      { title: "Inspection", description: "Initial assessment of materials" },
      { title: "Segregation", description: "Categorization by type" },
      { title: "Dismantling", description: "Systematic disassembly" },
      { title: "Material Separation", description: "Component-level sorting" },
      { title: "Recovery", description: "Valuable material extraction" },
      { title: "Responsible Disposal", description: "Safe handling of residuals" },
    ],
    benefits: [
      "Structured collection",
      "Responsible material handling",
      "Resource recovery",
      "Secure processing",
      "Traceability",
      "Documentation",
      "Sustainability-focused approach",
    ],
  },
  {
    icon: HardDrive,
    title: "IT Asset Disposition",
    slug: "itad",
    shortDesc:
      "A structured solution for organizations looking to responsibly retire, recover, reuse or recycle their IT assets.",
    hero: {
      heading: "Retire Your IT Assets Responsibly",
      description:
        "Old IT equipment can contain both valuable resources and sensitive information. Our IT Asset Disposition approach helps organizations move retired equipment through a structured process from collection to reuse, recovery or recycling.",
      cta: "Discuss ITAD Solutions",
    },
    challenge: {
      heading: "Why ITAD Matters",
      content:
        "IT equipment reaches end-of-life faster than ever. Without a structured process, organizations risk data exposure, resource waste, and compliance issues. Our ITAD process ensures every asset is tracked, secured, and directed to its most responsible next step.",
    },
    items: [
      "Laptops",
      "Desktops",
      "Servers",
      "Hard drives",
      "SSDs",
      "Networking equipment",
      "Storage systems",
      "Printers",
      "Monitors",
      "Peripherals",
      "Other IT assets",
    ],
    process: [
      { title: "Asset Collection", description: "Secure collection from your facility" },
      { title: "Asset Identification", description: "Inventory and classification" },
      { title: "Data Security", description: "Sanitization or destruction" },
      { title: "Condition Assessment", description: "Evaluate for reuse or recycling" },
      { title: "Refurbishment / Reuse", description: "Prepare for another lifecycle" },
      { title: "Recycling", description: "Appropriate recycling streams" },
      { title: "Reporting", description: "Asset and recycling documentation" },
    ],
    benefits: [
      "End-to-end asset tracking",
      "Data security compliance",
      "Resource recovery",
      "Refurbishment potential",
      "Complete documentation",
      "Responsible disposal",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Destruction",
    slug: "data-destruction",
    shortDesc:
      "Secure handling and destruction of data-bearing devices before assets enter reuse, recovery or recycling processes.",
    hero: {
      heading: "Protect Your Data. Then Recycle Your Hardware.",
      description:
        "Disposing of an IT asset should never mean exposing the information stored on it. We provide structured data-destruction solutions for organizations retiring data-bearing devices.",
      cta: "Discuss Secure IT Asset Disposal",
    },
    challenge: {
      heading: "Why Data Destruction Matters",
      content:
        "Storage devices may contain customer information, employee records, business documents, financial information, passwords and credentials, intellectual property, and internal communications. Secure data handling helps reduce the risk of sensitive information remaining on retired equipment.",
    },
    items: [
      "Data Sanitization",
      "Physical Destruction",
      "Asset Tracking",
      "Documentation",
    ],
    process: [
      { title: "Asset Identification", description: "Identify data-bearing devices" },
      { title: "Secure Handling", description: "Chain of custody protocols" },
      { title: "Data Sanitization", description: "Software-based data wiping" },
      { title: "Physical Destruction", description: "Where required, physical shredding" },
      { title: "Documentation", description: "Certificates and reports" },
    ],
    benefits: [
      "Data-bearing asset identification",
      "Secure device handling",
      "Data sanitization",
      "Physical destruction where required",
      "Asset tracking",
      "Destruction documentation",
      "Certificate/report generation",
    ],
  },
  {
    icon: Truck,
    title: "Reverse Logistics",
    slug: "reverse-logistics",
    shortDesc:
      "Organized collection and transportation solutions designed to move recyclable materials safely from source to appropriate processing channels.",
    hero: {
      heading: "Moving Waste Responsibly From Collection to Recovery",
      description:
        "Efficient recycling depends on efficient logistics. Our reverse-logistics solutions are designed to coordinate the movement of recyclable materials from businesses and collection points to appropriate processing facilities.",
      cta: "Discuss Logistics Solutions",
    },
    challenge: {
      heading: "Logistics in Recycling",
      content:
        "The gap between waste generation and proper recycling often comes down to logistics. Without organized collection, assessment, and transportation, recyclable materials may never reach appropriate processing channels.",
    },
    items: [],
    process: [
      { title: "Pickup Request", description: "Submit material and location details" },
      { title: "Material Assessment", description: "Review type and quantity" },
      { title: "Pickup Scheduling", description: "Coordinate collection timing" },
      { title: "Secure Transportation", description: "Safe material movement" },
      { title: "Facility Receiving", description: "Arrival and intake logging" },
      { title: "Processing & Recovery", description: "Material processing" },
      { title: "Documentation", description: "Complete logistics records" },
    ],
    benefits: [
      "Pan-location pickup support",
      "Material-specific handling",
      "Scheduled collections",
      "Secure transportation",
      "Complete documentation",
    ],
    suitableFor: [
      "Corporate offices",
      "Manufacturing facilities",
      "Retail networks",
      "IT companies",
      "Educational institutions",
      "Multi-location organizations",
      "Bulk asset disposal programs",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refurbishment & Reuse",
    slug: "refurbishment",
    shortDesc:
      "Where technically and economically viable, suitable equipment can be evaluated for reuse, refurbishment or recovery.",
    hero: {
      heading: "Extend Product Life Before Recycling It",
      description:
        "Not every used electronic device needs to become waste immediately. Where appropriate, equipment can be evaluated for reuse or refurbishment before being directed towards material recovery.",
      cta: "Explore Refurbishment",
    },
    challenge: {
      heading: "Reuse Before Recycling",
      content:
        "The most sustainable product is often the one that can be used longer. By evaluating equipment for refurbishment potential, we can extend useful life, reduce waste, and maximize the value extracted from every device.",
    },
    items: [],
    process: [
      { title: "Inspect", description: "Assess equipment condition" },
      { title: "Test", description: "Evaluate functionality and components" },
      { title: "Refurbish", description: "Restore suitable equipment" },
      { title: "Reuse", description: "Extend useful life of recoverable products" },
      { title: "Recycle", description: "End-of-life equipment to recycling channels" },
    ],
    benefits: [
      "Extended product lifecycle",
      "Reduced waste generation",
      "Cost recovery potential",
      "Environmental impact reduction",
      "Circular economy contribution",
    ],
  },
  {
    icon: FileCheck,
    title: "EPR Solutions",
    slug: "epr",
    shortDesc:
      "Support for businesses looking to manage their Extended Producer Responsibility requirements through responsible collection and recycling channels.",
    hero: {
      heading: "Simplifying Responsible EPR Management",
      description:
        "Extended Producer Responsibility requires businesses to think beyond the point of sale. We support organizations with structured collection and recycling solutions designed around responsible end-of-life management.",
      cta: "Talk to Our EPR Team",
    },
    challenge: {
      heading: "Understanding EPR",
      content:
        "Extended Producer Responsibility places greater emphasis on responsible management of products beyond their initial sale and use. Organizations need structured collection and recycling channels to meet their EPR obligations.",
    },
    items: [
      "Collection network coordination",
      "Reverse logistics",
      "Material aggregation",
      "Recycling coordination",
      "Documentation",
      "Reporting",
      "Stakeholder coordination",
      "Recycling traceability",
    ],
    process: [
      { title: "Assessment", description: "Understand EPR requirements" },
      { title: "Planning", description: "Design collection strategy" },
      { title: "Collection", description: "Organized material pickup" },
      { title: "Processing", description: "Material recycling" },
      { title: "Reporting", description: "Compliance documentation" },
    ],
    benefits: [
      "End-to-end EPR support",
      "Compliance documentation",
      "Collection network",
      "Recycling coordination",
      "Transparent reporting",
    ],
    whoCanBenefit: [
      "Electronics manufacturers",
      "Importers",
      "Producers",
      "Brands",
      "Retailers",
      "Distributors",
      "Organizations managing product take-back programs",
    ],
  },
  {
    icon: Gem,
    title: "Resource Recovery",
    slug: "resource-recovery",
    shortDesc:
      "Identification and recovery of valuable materials from suitable end-of-life products and equipment.",
    hero: {
      heading: "Recovering Value From What Others Consider Waste",
      description:
        "End-of-life products contain materials that can potentially be recovered and redirected into productive applications. Our resource-recovery approach focuses on identifying, separating and directing recoverable materials through appropriate recycling channels.",
      cta: "Discuss Resource Recovery",
    },
    challenge: {
      heading: "Hidden Value in Waste",
      content:
        "Every piece of electronic waste contains valuable materials — metals, plastics, glass, and more. Without proper recovery processes, these resources are lost. Our approach ensures maximum material recovery from every item we process.",
    },
    items: [
      "Ferrous metals",
      "Non-ferrous metals",
      "Copper",
      "Aluminium",
      "Plastics",
      "Glass",
      "Printed circuit boards",
      "Other recoverable components",
    ],
    process: [
      { title: "Connect", description: "Tell us about your materials" },
      { title: "Assess", description: "Evaluate type and quantity" },
      { title: "Collect", description: "Coordinate collection" },
      { title: "Receive", description: "Material intake at facility" },
      { title: "Segregate", description: "Categorize by type" },
      { title: "Process", description: "Appropriate processing methods" },
      { title: "Recover", description: "Extract valuable materials" },
      { title: "Report", description: "Recovery documentation" },
    ],
    benefits: [
      "Maximum material recovery",
      "Circular economy contribution",
      "Environmental impact reduction",
      "Transparent documentation",
      "Multiple material streams",
    ],
  },
];
