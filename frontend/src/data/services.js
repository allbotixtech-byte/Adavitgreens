/**
 * Single source of truth for the service catalogue.
 *
 * `services` drives the header dropdown, the footer column, the homepage
 * "Our Services" grid and the /services index. Entries that carry a `detail`
 * object are additionally rendered as a full detail page by
 * <ServiceDetailPage /> - see src/components/sections/ServiceDetailPage.jsx.
 *
 * E-Waste and Plastic Waste keep their own bespoke pages and therefore only
 * need catalogue fields here.
 */

import {
  Cpu, Recycle, Wind, Syringe, FileCheck, BadgeCheck, Trash2, Boxes,
  Truck, Eye, Scale, ClipboardCheck, ShieldCheck, Leaf, Globe, Factory,
  TrendingUp, BarChart3, Award, Container, Flame, FlaskConical, Droplets,
  SlidersHorizontal, AlertTriangle, Building2, Gauge, Filter, Thermometer,
  HardHat, Stethoscope, Microscope, Bandage, Biohazard, Sprout, Route,
  Headset, Settings, CalendarClock, Layers, Zap, Wrench, PackageCheck,
  RotateCcw, Landmark, GraduationCap, Sparkles, Lightbulb, CircleDot,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   1. E-WASTE MANAGEMENT  (bespoke page - catalogue fields only)
   ──────────────────────────────────────────────────────────── */
const eWaste = {
  slug: "e-waste",
  href: "/services/e-waste",
  title: "E-Waste Management",
  navLabel: "E-Waste Management",
  icon: Cpu,
  image: "/images/e-west.webp",
  summary:
    "End-to-end electronic waste recycling - collection, dismantling, metal recovery and certified disposal for businesses across India.",
};

/* ────────────────────────────────────────────────────────────
   2. PLASTIC WASTE MANAGEMENT  (bespoke page - catalogue only)
   ──────────────────────────────────────────────────────────── */
const plasticWaste = {
  slug: "plastic-waste",
  href: "/services/plastic-waste",
  title: "Plastic Waste Management",
  navLabel: "Plastic Waste Management",
  icon: Recycle,
  image: "/images/plastic-west.webp",
  summary:
    "Collection, sorting, washing and granulation of plastic waste into production-ready recycled raw material.",
};

/* ────────────────────────────────────────────────────────────
   3. POLLUTION CONTROL DEVICES
   ──────────────────────────────────────────────────────────── */
const pollutionControl = {
  slug: "pollution-control-devices",
  href: "/services/pollution-control-devices",
  title: "Pollution Control Devices",
  navLabel: "Pollution Control Devices",
  icon: Wind,
  image: "/images/pollution-control-device-1.webp",
  summary:
    "Design, supply, installation and maintenance of air and water pollution control equipment engineered to meet CPCB and GPCB discharge norms.",
  detail: {
    eyebrow: "Pollution Control Devices",
    // Single fallback kept for any context that reads heroImage directly;
    // heroSlides drives the rotating hero.
    heroImage: "/images/pollution-control-device-1.webp",
    heroSlides: [
      {
        image: "/images/pollution-control-device-1.webp",
        caption: "Dust Collection - Pulse-Jet Bag Filters",
      },
      {
        image: "/images/pollution-control-device-2.webp",
        caption: "Effluent Treatment - Clarifiers & Settling Ponds",
      },
      {
        image: "/images/pollution-control-device-3.webp",
        caption: "Stack Emissions & Fume Extraction",
      },
    ],
    heroTitle: "Emissions Have a Limit.",
    heroHighlight: "So Should Yours.",
    heroDesc:
      "Air scrubbers, dust collectors, effluent treatment plants and stack monitoring systems - engineered, installed and maintained to keep your emissions inside the consent limits written on your licence.",
    overview: {
      eyebrow: "The Challenge",
      title: "Consent to Operate Is Only as Good as Your Equipment",
      paragraphs: [
        "Every industrial unit operating in India holds a Consent to Operate issued under the Air (Prevention and Control of Pollution) Act, 1981 and the Water (Prevention and Control of Pollution) Act, 1974. That consent specifies exact limits for particulate matter, gaseous emissions and effluent parameters - and State Pollution Control Boards test against them without notice.",
        "The gap between compliance and violation is almost always equipment: an undersized scrubber, a bag filter past its service life, an ETP running outside its design load. Penalties escalate quickly, from show-cause notices to closure directions under Section 33A.",
        "Advait Green designs, supplies, installs and maintains pollution control equipment sized to your actual process load - not a catalogue approximation. Every installation is commissioned with performance testing against the parameters on your consent order.",
      ],
      image: "/images/pollution.webp",
      badgeLabel: "CPCB / GPCB Compliant",
      badgeSub: "Design, supply, installation & AMC",
    },
    handlesEyebrow: "Equipment Range",
    handlesTitle: "Devices We Supply & Service",
    handles: [
      {
        icon: Wind,
        label: "Air Scrubbers",
        desc: "Wet scrubbers, venturi scrubbers and packed-bed towers for acid fumes, alkali vapours, ammonia and odour control. Sized against your actual gas flow rate, inlet concentration and required removal efficiency, with corrosion-resistant FRP or PP construction selected for your chemistry.",
        image: "/images/Industrial-Equipment.webp",
      },
      {
        icon: Filter,
        label: "Dust Collectors & Bag Filters",
        desc: "Pulse-jet bag houses, cartridge filters and cyclone separators for particulate control in grinding, shredding, material handling and furnace operations. Filter media selected for temperature, abrasiveness and moisture - with differential pressure monitoring built in.",
        image: "/images/DustCollectorsBagFilters.webp",
      },
      {
        icon: Droplets,
        label: "Effluent Treatment Plants",
        desc: "Physico-chemical and biological ETPs covering equalisation, neutralisation, clarification, aeration and sludge dewatering. Designed to bring effluent within the inlet parameters of your CETP or within direct-discharge norms where applicable.",
        image: "/images/EffluentTreatmentPlants.webp",
      },
      {
        icon: Container,
        label: "Sewage Treatment Plants",
        desc: "Packaged and civil STPs for industrial townships, commercial complexes and institutional campuses. MBBR, SBR and MBR configurations with treated water suitable for flushing, gardening and cooling tower make-up.",
        image: "/images/SewageTreatmentPlants.webp",
      },
      {
        icon: Flame,
        label: "Fume Extraction Systems",
        desc: "Capture hoods, ducting networks, centrifugal blowers and stack assemblies for welding fumes, soldering fumes, plating baths and solvent operations. Designed for adequate capture velocity at the source, not just extraction at the roof.",
        image: "/images/FumeExtractionSystems.webp",
      },
      {
        icon: Gauge,
        label: "Monitoring & Instrumentation",
        desc: "Online continuous emission monitoring systems (OCEMS), stack sampling ports, effluent flow meters and pH/TSS analysers - including connectivity to the CPCB and State Board servers where your category mandates it.",
        image: "/images/MonitoringInstrumentation.webp",
      },
    ],
    processSubtitle: "How We Work",
    processTitle: "From Site Survey to Commissioned System",
    process: [
      {
        icon: Eye,
        num: "01",
        title: "Site Assessment",
        desc: "Our engineers survey your process, measure actual gas or effluent load, and read your consent order - so the design targets your real numbers, not assumed ones.",
      },
      {
        icon: SlidersHorizontal,
        num: "02",
        title: "Engineering & Design",
        desc: "Equipment sizing, material selection, general arrangement drawings and a documented basis of design showing how each consent parameter will be met.",
      },
      {
        icon: FileCheck,
        num: "03",
        title: "Approval Support",
        desc: "Drawings, specifications and technical justification prepared in the format State Pollution Control Boards expect for consent amendment or renewal.",
      },
      {
        icon: HardHat,
        num: "04",
        title: "Fabrication & Installation",
        desc: "Fabrication to approved drawings, site erection, ducting, electrical integration and safety interlocks - executed with minimal disruption to your production schedule.",
      },
      {
        icon: Thermometer,
        num: "05",
        title: "Commissioning & Testing",
        desc: "Performance trials with third-party stack or effluent analysis, confirming measured results against the limits on your consent before handover.",
      },
      {
        icon: Settings,
        num: "06",
        title: "Operation & Maintenance",
        desc: "Annual maintenance contracts covering media replacement, blower servicing, instrument calibration and periodic performance verification.",
      },
    ],
    benefitsEyebrow: "Why It Matters",
    benefitsTitle: "Why Correctly Sized Equipment Pays for Itself",
    benefits: [
      {
        icon: ShieldCheck,
        title: "Consent Compliance",
        desc: "Equipment sized against the actual parameters on your consent order - so a surprise inspection is an inconvenience, not a closure risk.",
      },
      {
        icon: AlertTriangle,
        title: "Penalty Avoidance",
        desc: "Show-cause notices, bank guarantee forfeiture and Section 33A closure directions cost far more than the equipment that prevents them.",
      },
      {
        icon: TrendingUp,
        title: "Lower Running Cost",
        desc: "Right-sized blowers and correctly specified filter media cut power draw and consumable replacement - an oversized system wastes energy every hour it runs.",
      },
      {
        icon: Leaf,
        title: "Genuine Emission Reduction",
        desc: "Measurable reduction in particulate and gaseous discharge - the environmental outcome the regulation was actually written for.",
      },
      {
        icon: HardHat,
        title: "Safer Workplaces",
        desc: "Effective fume and dust capture at the source protects operators from respiratory exposure and supports your ISO 45001 obligations.",
      },
      {
        icon: BarChart3,
        title: "Audit-Ready Records",
        desc: "Design basis, commissioning reports and maintenance logs kept in one place - ready for board inspection, ESG reporting or customer audit.",
      },
    ],
    stats: [
      { stat: "CPCB", label: "Norm-Compliant Design", dark: true },
      { stat: "24x7", label: "Breakdown Support", dark: false },
      { stat: "AMC", label: "Maintenance Contracts", dark: true },
      { stat: "Turnkey", label: "Design to Commissioning", dark: false },
      { stat: "OCEMS", label: "Online Monitoring Ready", dark: true },
      { stat: "Pan-India", label: "Installation & Service", dark: false },
      { stat: "100%", label: "Performance Tested", dark: true },
      { stat: "10+", label: "Years of Engineering", dark: false },
    ],
    whyTitle: "Why Advait Green for",
    whyHighlight: "Pollution Control Equipment",
    whyDesc:
      "Engineering-led design, performance-tested commissioning and long-term maintenance - from a partner who also understands the compliance paperwork behind the equipment.",
    compliance: {
      badge: "Regulatory",
      title: "Built Around Your",
      highlight: "Consent Conditions",
      paragraphs: [
        "Pollution control equipment is not judged on its specification sheet. It is judged on whether the stack and effluent readings taken during an inspection fall inside the limits written on your Consent to Operate.",
        "We start from that document. Every system we design references the specific parameters and limits applicable to your category and scale, and every handover includes the test results that demonstrate compliance.",
      ],
      cta: { label: "Talk to Our Engineering Team", href: "/contact" },
      items: [
        {
          icon: ClipboardCheck,
          title: "Consent Order Review",
          desc: "We read your existing consent and identify every parameter the equipment must satisfy.",
        },
        {
          icon: Scale,
          title: "Design Basis Documentation",
          desc: "A written calculation trail showing how the sizing achieves each required removal efficiency.",
        },
        {
          icon: FileCheck,
          title: "Third-Party Performance Testing",
          desc: "Commissioning trials with NABL-accredited laboratory analysis of stack or effluent samples.",
        },
        {
          icon: CalendarClock,
          title: "Scheduled Maintenance",
          desc: "AMC visits timed around your consent renewal cycle so records are current when the board asks.",
        },
      ],
    },
    ctaTitle: "Not Sure Your Current System Still Meets Its Limits?",
    ctaDesc:
      "Send us your consent order and a description of your process. We will tell you honestly whether your existing equipment is adequate - and what it would take if it is not.",
  },
};

/* ────────────────────────────────────────────────────────────
   4. BIO MEDICAL WASTE MANAGEMENT
   ──────────────────────────────────────────────────────────── */
const bioMedical = {
  slug: "bio-medical-waste",
  href: "/services/bio-medical-waste",
  title: "Bio Medical Waste Management",
  navLabel: "Bio Medical Waste Management",
  icon: Syringe,
  image: "/images/BioMedicalWasteManagement-Hero.webp",
  summary:
    "Colour-coded collection, secure transport and authorised treatment of biomedical waste under the Bio-Medical Waste Management Rules, 2016.",
  detail: {
    eyebrow: "Bio Medical Waste Management",
    heroImage: "/images/BioMedicalWasteManagement-Hero.webp",
    heroTitle: "Healthcare Waste Is Not",
    heroHighlight: "Ordinary Waste.",
    heroDesc:
      "Segregation at source, barcoded collection, refrigerated transport and treatment at authorised Common Bio-Medical Waste Treatment Facilities - with the manifest trail the Bio-Medical Waste Management Rules, 2016 demand.",
    overview: {
      eyebrow: "The Challenge",
      title: "One Missegregated Bag Undoes an Entire Protocol",
      paragraphs: [
        "India's healthcare establishments generate over 700 tonnes of biomedical waste every day - infectious cultures, sharps, anatomical waste, contaminated plastics, expired pharmaceuticals and cytotoxic residues. Mixed with general waste, any one of these becomes a public health hazard and a documented regulatory violation.",
        "The Bio-Medical Waste Management Rules, 2016 place the obligation squarely on the occupier: the hospital, clinic, laboratory, blood bank or veterinary institution generating the waste. Segregation into yellow, red, white and blue streams must happen at the point of generation, and the chain of custody must be traceable to final treatment.",
        "Advait Green provides the full operating system around that obligation - colour-coded bins and liners, trained handling staff, barcoded bag tracking, dedicated transport and disposal through authorised Common Bio-Medical Waste Treatment Facilities, with annual returns filed on your behalf.",
      ],
      image: "/images/pharma-healthcare.webp",
      badgeLabel: "BMW Rules, 2016 Compliant",
      badgeSub: "Barcoded, manifest-tracked collection",
    },
    handlesEyebrow: "Waste Categories",
    handlesTitle: "Streams We Handle",
    handles: [
      {
        icon: Biohazard,
        label: "Yellow Category",
        desc: "Human and animal anatomical waste, soiled dressings, microbiology and biotechnology cultures, expired and discarded medicines, chemical waste and cytotoxic drug residues. Treated by incineration or plasma pyrolysis at authorised facilities - never landfilled.",
        image: "/images/yellow-category.webp",
      },
      {
        icon: Recycle,
        label: "Red Category",
        desc: "Contaminated recyclable plastics - IV tubing, catheters, urine bags, syringes without needles, vacutainers and gloves. Autoclaved or microwaved to sterilise, then shredded and channelled to authorised plastic recyclers.",
        image: "/images/red-category.webp",
      },
      {
        icon: Bandage,
        label: "White Category (Sharps)",
        desc: "Needles, scalpels, blades, lancets and any contaminated sharp object capable of causing puncture injury. Collected in puncture-proof, leak-proof containers, then autoclaved and mutilated before final encapsulation or disposal.",
        image: "/images/white-category.webp",
      },
      {
        icon: FlaskConical,
        label: "Blue Category",
        desc: "Broken and discarded contaminated glassware including medicine vials and ampoules, plus metallic body implants. Disinfected, washed and sent for recycling through authorised channels.",
        image: "/images/blue-category.webp",
      },
      {
        icon: Microscope,
        label: "Laboratory & Research Waste",
        desc: "Culture plates, stocks, specimens, blood samples, live attenuated vaccines and residues from diagnostic and research laboratories. Pre-treated on site by autoclaving or disinfection before handover, as the Rules require.",
        image: "/images/Laboratory_ResearchWaste.webp",
      },
      {
        icon: Stethoscope,
        label: "Expired Pharmaceuticals",
        desc: "Time-expired, discontinued and returned medicines from hospital pharmacies, retail chemists and pharmaceutical distributors - destroyed under documented supervision with certificates of destruction issued.",
        image: "/images/Expired_Pharmaceuticals.webp",
      },
    ],
    processSubtitle: "How It Works",
    processTitle: "Segregation to Certified Treatment",
    process: [
      {
        icon: Layers,
        num: "01",
        title: "Segregation at Source",
        desc: "Colour-coded bins, liners and sharps containers positioned at every generation point, with signage and staff training so the right waste enters the right stream first time.",
      },
      {
        icon: ClipboardCheck,
        num: "02",
        title: "Barcoded Tagging",
        desc: "Every bag is weighed and barcoded at collection, recording department, category, weight, date and handler - creating the traceability the Rules require.",
      },
      {
        icon: Container,
        num: "03",
        title: "Interim Storage",
        desc: "Waste held in a designated, access-controlled storage area for no more than 48 hours, in line with Schedule I timelines.",
      },
      {
        icon: Truck,
        num: "04",
        title: "Dedicated Transport",
        desc: "Purpose-built, labelled and GPS-tracked vehicles authorised solely for biomedical waste - never shared with general waste collection.",
      },
      {
        icon: Flame,
        num: "05",
        title: "Authorised Treatment",
        desc: "Incineration, autoclaving, microwaving or shredding at a CPCB-authorised Common Bio-Medical Waste Treatment Facility, matched to the waste category.",
      },
      {
        icon: FileCheck,
        num: "06",
        title: "Documentation & Returns",
        desc: "Manifests, treatment certificates and the Form IV annual return prepared and filed - your audit file stays complete without your staff assembling it.",
      },
    ],
    benefitsEyebrow: "Why It Matters",
    benefitsTitle: "What Structured Biomedical Waste Handling Delivers",
    benefits: [
      {
        icon: ShieldCheck,
        title: "Full Statutory Compliance",
        desc: "Segregation, storage timelines, transport, treatment and reporting aligned to the Bio-Medical Waste Management Rules, 2016 and their amendments.",
      },
      {
        icon: Bandage,
        title: "Infection Control",
        desc: "Correct sharps handling and sealed containment protect nursing staff, housekeeping teams and waste handlers from needle-stick injury and exposure.",
      },
      {
        icon: Eye,
        title: "Complete Traceability",
        desc: "Barcoded bags and GPS-tracked vehicles mean every kilogram can be traced from the ward that generated it to the facility that treated it.",
      },
      {
        icon: Award,
        title: "Accreditation Support",
        desc: "Documentation structured to satisfy NABH and NABL auditors, who examine waste management as a scored element of accreditation.",
      },
      {
        icon: Leaf,
        title: "Reduced Environmental Load",
        desc: "Red-category plastics recovered for recycling after sterilisation instead of being incinerated - lower emissions, less material lost.",
      },
      {
        icon: Headset,
        title: "Trained Handling Staff",
        desc: "Periodic training and refreshers for your clinical and housekeeping teams, with attendance records maintained for inspection.",
      },
    ],
    stats: [
      { stat: "4", label: "Colour-Coded Streams", dark: true },
      { stat: "48hr", label: "Maximum Storage Window", dark: false },
      { stat: "100%", label: "Barcoded Traceability", dark: true },
      { stat: "GPS", label: "Tracked Transport Fleet", dark: false },
      { stat: "CBWTF", label: "Authorised Treatment", dark: true },
      { stat: "Form IV", label: "Annual Returns Filed", dark: false },
      { stat: "NABH", label: "Audit-Ready Records", dark: true },
      { stat: "Daily", label: "Collection Schedules", dark: false },
    ],
    whyTitle: "Why Advait Green for",
    whyHighlight: "Bio Medical Waste",
    whyDesc:
      "Trained handlers, barcoded traceability and authorised treatment partners - with the reporting burden lifted off your clinical staff.",
    compliance: {
      badge: "Regulatory",
      title: "Bio-Medical Waste",
      highlight: "Management Rules, 2016",
      paragraphs: [
        "Under the Rules, the occupier - not the contractor - remains legally responsible for the waste generated on their premises. Authorisation from the State Pollution Control Board, annual returns in Form IV, accident reporting and maintained records are all obligations that sit with the healthcare establishment.",
        "We operate as the system behind that responsibility: correct segregation infrastructure, documented handover at every stage, treatment through authorised facilities only, and the paperwork prepared in the form the board expects.",
      ],
      cta: { label: "Discuss Your Facility's Requirement", href: "/contact" },
      items: [
        {
          icon: FileCheck,
          title: "Authorisation Assistance",
          desc: "Support with SPCB authorisation applications and renewals for your establishment.",
        },
        {
          icon: ClipboardCheck,
          title: "Form IV Annual Returns",
          desc: "Category-wise quantity records compiled and filed within the statutory deadline.",
        },
        {
          icon: Scale,
          title: "Manifest Documentation",
          desc: "Signed handover manifests and treatment certificates retained for every consignment.",
        },
        {
          icon: GraduationCap,
          title: "Staff Training Records",
          desc: "Scheduled training sessions with attendance registers maintained for inspection.",
        },
      ],
    },
    ctaTitle: "Ready to Fix Segregation Before Your Next Inspection?",
    ctaDesc:
      "Tell us your bed count, departments and current arrangement. We will propose a collection schedule, bin plan and documentation pack sized to your facility.",
  },
};

/* ────────────────────────────────────────────────────────────
   5. EXTENDED PRODUCER RESPONSIBILITY
   ──────────────────────────────────────────────────────────── */
const epr = {
  slug: "epr",
  href: "/services/epr",
  title: "Extended Producer Responsibility",
  navLabel: "Extended Producer Responsibility",
  icon: FileCheck,
  image: "/images/Extended-Producer-Responsibility-Hero-1.webp",
  summary:
    "EPR registration, target planning and certificate generation for producers, importers and brand owners - backed by verified recycling at our own facility.",
  detail: {
    eyebrow: "Extended Producer Responsibility",
    // Fallback for any context reading heroImage directly; heroSlides drives
    // the rotating hero.
    heroImage: "/images/Extended-Producer-Responsibility-Hero-1.webp",
    heroSlides: [
      { image: "/images/Extended-Producer-Responsibility-Hero-1.webp" },
      { image: "/images/Extended-Producer-Responsibility-Hero-2.webp" },
      { image: "/images/Extended-Producer-Responsibility-Hero-3.webp" },
    ],
    heroTitle: "Compliance, Documented.",
    heroHighlight: "Impact, Verified.",
    heroDesc:
      "From CPCB portal registration to quarterly certificate generation - we carry the EPR obligation for producers, importers and brand owners, with certificates backed by material we actually processed.",
    overview: {
      eyebrow: "The Challenge",
      title: "Paper Credits Do Not Survive an Audit",
      paragraphs: [
        "Extended Producer Responsibility makes the producer, importer or brand owner accountable for what happens to a product after the consumer is finished with it. In India the obligation now spans electronics under the E-Waste (Management) Rules, 2022, packaging under the Plastic Waste Management Rules, batteries under the Battery Waste Management Rules, 2022 and used tyres.",
        "Targets are computed on your placed-on-market quantities, filed quarterly on the CPCB EPR portal, and settled by surrendering EPR certificates. The market for those certificates is uneven - and certificates issued against volumes that were never genuinely processed have become a recurring audit finding.",
        "Advait Green issues certificates against material physically received, processed and recorded at our own authorised facility. The recycling behind your compliance is traceable to a consignment, a weighbridge slip and a processing batch.",
      ],
      image: "/images/epr.webp",
      badgeLabel: "CPCB Registered Recycler",
      badgeSub: "Certificates backed by own processing",
    },
    handlesEyebrow: "Coverage",
    handlesTitle: "Obligations We Cover",
    handles: [
      {
        icon: Cpu,
        label: "E-Waste EPR",
        desc: "Registration and target fulfilment under the E-Waste (Management) Rules, 2022 across all scheduled electrical and electronic equipment categories - with collection, channelisation and recycling handled end to end.",
        image: "/images/e-west.webp",
      },
      {
        icon: Recycle,
        label: "Plastic Packaging EPR",
        desc: "Category I to IV plastic packaging obligations under the Plastic Waste Management Rules - rigid, flexible, multi-layered and compostable - including recycling, end-of-life disposal and reuse targets.",
        image: "/images/plastic-west.webp",
      },
      {
        icon: Zap,
        label: "Battery Waste EPR",
        desc: "Producer obligations under the Battery Waste Management Rules, 2022 covering portable, automotive, industrial and electric vehicle batteries, with channelisation to authorised refurbishers and recyclers.",
        image: "/images/solar-planet-recycle.webp",
      },
      {
        icon: Building2,
        label: "Importer Compliance",
        desc: "Support for importers whose obligation is triggered on customs clearance - registration, quantity declaration and target computation aligned to your import records.",
        image: "/images/manufactring-automotive.webp",
      },
      {
        icon: BarChart3,
        label: "Annual & Quarterly Filing",
        desc: "Preparation and submission of quarterly returns and annual reports on the CPCB portal, reconciled against your sales and import data before anything is filed.",
        image: "/images/esg.webp",
      },
      {
        icon: Route,
        label: "Collection Network Setup",
        desc: "Design and operation of take-back channels - collection points, reverse logistics, dealer buy-back and awareness programmes - where your category requires demonstrable consumer collection.",
        image: "/images/reverse-logistic.webp",
      },
    ],
    processSubtitle: "How It Works",
    processTitle: "From Registration to Surrendered Certificates",
    process: [
      {
        icon: ClipboardCheck,
        num: "01",
        title: "Obligation Assessment",
        desc: "We review your product portfolio, sales and import data to establish which rules apply and what your placed-on-market quantities actually are.",
      },
      {
        icon: FileCheck,
        num: "02",
        title: "Portal Registration",
        desc: "EPR registration on the CPCB portal - documentation, category mapping and application follow-up until your registration number is issued.",
      },
      {
        icon: Scale,
        num: "03",
        title: "Target Computation",
        desc: "Year-wise and category-wise target calculation under the applicable schedule, with a plan for how each quarter's obligation will be met.",
      },
      {
        icon: Truck,
        num: "04",
        title: "Collection & Channelisation",
        desc: "Material collected through our network and delivered to our authorised facility, with weighbridge records and consignment documentation at every handover.",
      },
      {
        icon: RotateCcw,
        num: "05",
        title: "Processing & Verification",
        desc: "Recycling at our own GPCB-authorised facility, with batch records tying processed tonnage back to the consignments that produced it.",
      },
      {
        icon: Award,
        num: "06",
        title: "Certificate Generation",
        desc: "EPR certificates generated against verified volumes and transferred on the portal, with the filing record retained in your compliance file.",
      },
    ],
    benefitsEyebrow: "Why It Matters",
    benefitsTitle: "What Genuine EPR Compliance Protects",
    benefits: [
      {
        icon: ShieldCheck,
        title: "Real Liability Transfer",
        desc: "Certificates backed by material processed at an authorised facility hold up when a regulator or customer traces them back.",
      },
      {
        icon: AlertTriangle,
        title: "Penalty Protection",
        desc: "Environmental compensation for shortfall in EPR targets is levied per unit of unmet obligation and accumulates quickly across quarters.",
      },
      {
        icon: BarChart3,
        title: "ESG Reporting Inputs",
        desc: "Verified recycling volumes feed directly into BRSR disclosures and customer sustainability questionnaires without further reconstruction.",
      },
      {
        icon: Globe,
        title: "Supply Chain Assurance",
        desc: "Multinational customers increasingly audit their vendors' EPR position - documented compliance keeps you on their approved list.",
      },
      {
        icon: CalendarClock,
        title: "No Missed Deadlines",
        desc: "Quarterly filing calendars managed on your behalf, with reminders and prepared returns ahead of each due date.",
      },
      {
        icon: Sparkles,
        title: "One Partner, Every Stream",
        desc: "E-waste, plastic packaging and batteries handled under a single relationship instead of three disconnected vendors.",
      },
    ],
    stats: [
      { stat: "CPCB", label: "Registered Recycler", dark: true },
      { stat: "3", label: "Waste Streams Covered", dark: false },
      { stat: "Quarterly", label: "Filings Managed", dark: true },
      { stat: "100%", label: "Own-Facility Processing", dark: false },
      { stat: "Verified", label: "Certificate Backing", dark: true },
      { stat: "Pan-India", label: "Collection Network", dark: false },
      { stat: "BRSR", label: "Reporting Inputs", dark: true },
      { stat: "10+", label: "Years in Compliance", dark: false },
    ],
    whyTitle: "Why Advait Green for",
    whyHighlight: "EPR Compliance",
    whyDesc:
      "A recycler first and a compliance partner second - which means the certificates we issue are backed by tonnage that physically passed through our facility.",
    compliance: {
      badge: "Regulatory",
      title: "Rules That Create Your",
      highlight: "EPR Obligation",
      paragraphs: [
        "E-Waste (Management) Rules, 2022; Plastic Waste Management Rules, 2016 as amended; Battery Waste Management Rules, 2022. Each defines who counts as a producer, how targets are computed, and what evidence must be surrendered on the CPCB portal.",
        "We map your business against all three, tell you plainly which obligations apply, and then operate the collection, processing and filing that discharge them.",
      ],
      cta: { label: "Request an EPR Assessment", href: "/contact" },
      items: [
        {
          icon: ClipboardCheck,
          title: "CPCB Portal Registration",
          desc: "Onboarding, category mapping and annual target computation on the EPR portal.",
        },
        {
          icon: Scale,
          title: "Target Fulfilment Planning",
          desc: "Collection and processing scheduled against your quarterly obligation, not left to year end.",
        },
        {
          icon: FileCheck,
          title: "Certificate Generation",
          desc: "Certificates issued against verified recycling volumes from our authorised facility.",
        },
        {
          icon: ShieldCheck,
          title: "Audit-Ready Documentation",
          desc: "Quarterly filings, annual returns and manifests assembled for regulatory or customer audit.",
        },
      ],
    },
    ctaTitle: "Unsure Where Your EPR Position Actually Stands?",
    ctaDesc:
      "Share your product categories and volumes. We will come back with your applicable targets, any accumulated shortfall, and a plan to close it.",
  },
};

/* ────────────────────────────────────────────────────────────
   6. AMC AUTHORISED E-WASTE RECYCLER
   ──────────────────────────────────────────────────────────── */
const amcRecycler = {
  slug: "amc-e-waste-recycler",
  href: "/services/amc-e-waste-recycler",
  title: "AMC Authorised E-Waste Recycler",
  navLabel: "AMC Authorised E-Waste Recycler",
  icon: BadgeCheck,
  image: "/images/amc-hero.webp",
  summary:
    "An annual maintenance contract for your e-waste - scheduled pickups, asset reporting and year-round compliance from a CPCB authorised recycler.",
  detail: {
    eyebrow: "AMC Authorised E-Waste Recycler",
    // Fallback for any context reading heroImage directly; heroSlides drives
    // the rotating hero.
    heroImage: "/images/amc-hero.webp",
    heroSlides: [
      { image: "/images/amc-hero.webp" },
      { image: "/images/amc-hero-2.webp" },
      { image: "/images/E-West-Managment-3.webp" },
    ],
    heroTitle: "Compliance Is Not an Event.",
    heroHighlight: "It Is a Calendar.",
    heroDesc:
      "An annual maintenance contract that puts your entire e-waste obligation on a schedule - fixed pickups, tracked assets, certificates issued on collection and filings prepared before they are due.",
    overview: {
      eyebrow: "The Challenge",
      title: "Most Organisations Deal With E-Waste Once a Year - Too Late",
      paragraphs: [
        "The typical pattern is familiar: obsolete IT accumulates in a store room for months, someone notices the audit approaching, and a disposal is arranged in a hurry. Assets go out without a proper inventory, certificates arrive late or not at all, and the compliance file has a gap that an auditor will find.",
        "An annual maintenance contract replaces that scramble with a schedule. Advait Green becomes your standing authorised recycler: agreed pickup frequency, a named account manager, asset-level reporting on every consignment, and certificates issued as collections happen rather than reconstructed afterwards.",
        "For organisations running continuous IT refresh cycles - banks, IT services, hospitals, manufacturing plants, government departments and educational institutions - the AMC model turns e-waste from a recurring problem into a managed service line.",
      ],
      image: "/images/E-West-Managment-2.webp",
      badgeLabel: "CPCB / GPCB Authorised",
      badgeSub: "Scheduled pickups, year-round coverage",
    },
    handlesEyebrow: "What's Included",
    handlesTitle: "Inside the Annual Contract",
    handles: [
      {
        icon: CalendarClock,
        label: "Scheduled Pickups",
        desc: "An agreed collection frequency - monthly, quarterly or on-call within a guaranteed response window - so material never accumulates beyond your storage tolerance or a regulator's comfort.",
        image: "/images/E-Waste-Collection-Logistics.webp",
      },
      {
        icon: ClipboardCheck,
        label: "Asset-Level Inventory",
        desc: "Serial numbers, asset tags, make, model and condition recorded at pickup and reconciled against your fixed asset register - so finance can retire assets with evidence, not assumption.",
        image: "/images/computer-workstation.webp",
      },
      {
        icon: ShieldCheck,
        label: "Data Sanitisation",
        desc: "Storage media wiped to recognised overwriting standards or physically shredded on request, with a certificate of data destruction issued per device or per batch.",
        image: "/images/secure-data.webp",
      },
      {
        icon: Award,
        label: "Certificates of Recycling",
        desc: "Issued against every consignment as it is processed - not batched at year end - so your compliance file is complete on any given day of the year.",
        image: "/images/E-West-Managment-5.webp",
      },
      {
        icon: TrendingUp,
        label: "Buyback & Valuation",
        desc: "Transparent recovery-based valuation for assets with residual material value, credited against your contract or settled separately as you prefer.",
        image: "/images/Circuit-Boards-PCBs.webp",
      },
      {
        icon: BarChart3,
        label: "Compliance Reporting",
        desc: "Periodic reports covering quantities collected, categories processed, recovery achieved and diversion from landfill - formatted for internal ESG and external audit use.",
        image: "/images/esg.webp",
      },
    ],
    processSubtitle: "How It Works",
    processTitle: "How the AMC Runs Through the Year",
    process: [
      {
        icon: Eye,
        num: "01",
        title: "Baseline Assessment",
        desc: "We survey your sites, estimate annual generation by category, and agree the pickup frequency and service levels that match it.",
      },
      {
        icon: FileCheck,
        num: "02",
        title: "Contract & Onboarding",
        desc: "A defined annual scope with rates, response times, reporting formats and a named account manager - plus induction for your facilities and IT teams.",
      },
      {
        icon: Truck,
        num: "03",
        title: "Scheduled Collection",
        desc: "Pickups executed to the agreed calendar with sealed, tracked transport and signed handover documentation at each site.",
      },
      {
        icon: PackageCheck,
        num: "04",
        title: "Inventory & Sanitisation",
        desc: "Asset-level recording at our facility, data-bearing media sanitised or destroyed, and a reconciliation report returned to you.",
      },
      {
        icon: RotateCcw,
        num: "05",
        title: "Authorised Processing",
        desc: "Dismantling, shredding and material recovery at our GPCB-authorised facility, with hazardous fractions channelled to authorised downstream processors.",
      },
      {
        icon: Award,
        num: "06",
        title: "Certification & Filing",
        desc: "Certificates of recycling and data destruction issued per consignment, and EPR or annual return support prepared ahead of each deadline.",
      },
    ],
    benefitsEyebrow: "Why It Matters",
    benefitsTitle: "Why an Annual Contract Beats Ad-Hoc Disposal",
    benefits: [
      {
        icon: CalendarClock,
        title: "Nothing Accumulates",
        desc: "Scheduled collection means obsolete equipment never occupies floor space or sits in a corridor waiting for a decision.",
      },
      {
        icon: ShieldCheck,
        title: "Continuous Audit Readiness",
        desc: "Certificates issued as collections happen - your compliance file is complete on any date an auditor picks.",
      },
      {
        icon: Scale,
        title: "Predictable Commercials",
        desc: "Agreed rates and buyback terms fixed for the year, replacing case-by-case negotiation on every disposal.",
      },
      {
        icon: Headset,
        title: "Single Point of Contact",
        desc: "One account manager who knows your sites, your asset patterns and your reporting deadlines.",
      },
      {
        icon: TrendingUp,
        title: "Recovered Asset Value",
        desc: "Systematic valuation across the year captures scrap value that ad-hoc disposal routinely gives away.",
      },
      {
        icon: BarChart3,
        title: "Reportable Impact",
        desc: "Year-on-year data on tonnage diverted and material recovered - the numbers your ESG report needs.",
      },
    ],
    stats: [
      { stat: "AMC", label: "Annual Service Contract", dark: true },
      { stat: "CPCB", label: "Authorised Recycler", dark: false },
      { stat: "500+", label: "Corporates Served", dark: true },
      { stat: "24x7", label: "Toll-Free Support", dark: false },
      { stat: "Asset-Level", label: "Inventory Reporting", dark: true },
      { stat: "Per-Pickup", label: "Certificates Issued", dark: false },
      { stat: "Pan-India", label: "Site Coverage", dark: true },
      { stat: "10+", label: "Years of Recycling", dark: false },
    ],
    whyTitle: "Why Advait Green as Your",
    whyHighlight: "Contracted Recycler",
    whyDesc:
      "Authorised processing at our own facility, asset-level transparency and a service calendar built around your audit dates - not ours.",
    compliance: {
      badge: "Regulatory",
      title: "Your Obligation Under the",
      highlight: "E-Waste Rules, 2022",
      paragraphs: [
        "Bulk consumers of electrical and electronic equipment must channel end-of-life assets only to registered recyclers, maintain records in Form 6, and produce those records on demand. Handing equipment to an unregistered scrap dealer does not discharge the obligation - it creates one.",
        "Under the AMC, that record-keeping becomes ours to maintain and yours to present. Every collection is documented, every certificate is filed, and the annual return is prepared before its deadline rather than after your auditor asks.",
      ],
      cta: { label: "Request an AMC Proposal", href: "/contact" },
      items: [
        {
          icon: ClipboardCheck,
          title: "Form 6 Record Maintenance",
          desc: "Statutory records maintained consignment by consignment and available on request.",
        },
        {
          icon: Award,
          title: "Certificates on Collection",
          desc: "Recycling and data destruction certificates issued per pickup, not batched at year end.",
        },
        {
          icon: Scale,
          title: "Asset Register Reconciliation",
          desc: "Serial-level reporting your finance team can match against fixed asset retirements.",
        },
        {
          icon: FileCheck,
          title: "Annual Return Support",
          desc: "Consolidated quantities and documentation prepared ahead of the filing deadline.",
        },
      ],
    },
    ctaTitle: "Put Your E-Waste on a Schedule.",
    ctaDesc:
      "Tell us how many sites you run and roughly what you retire each year. We will propose a pickup calendar, service levels and annual rates.",
  },
};

/* ────────────────────────────────────────────────────────────
   7. SOLID WASTE MANAGEMENT
   ──────────────────────────────────────────────────────────── */
const solidWaste = {
  slug: "solid-waste",
  href: "/services/solid-waste",
  title: "Solid Waste Management",
  navLabel: "Solid Waste Management",
  icon: Trash2,
  image: "/images/Post-Industrial-Waste.webp",
  // Spans two columns in the homepage 3-up grid so 8 cards close the last row.
  wide: true,
  summary:
    "Segregated collection, material recovery and scientific disposal of municipal and industrial solid waste under the Solid Waste Management Rules, 2016.",
  detail: {
    eyebrow: "Solid Waste Management",
    // Fallback for any context reading heroImage directly; heroSlides drives
    // the rotating hero.
    heroImage: "/images/Post-Industrial-Waste.webp",
    heroSlides: [
      {
        image: "/images/Post-Industrial-Waste.webp",
        caption: "Mixed Waste — Before Segregation",
      },
      {
        image: "/images/E-West-Managment-5.webp",
        caption: "Bulk Material Handling",
      },
      {
        image: "/images/amc-hero-2.webp",
        caption: "The Municipal Stream at Source",
      },
    ],
    heroTitle: "A Landfill Is a Decision.",
    heroHighlight: "Not a Destination.",
    heroDesc:
      "Segregated collection, material recovery, composting and scientific disposal for campuses, industrial estates, commercial complexes and urban local bodies - with diversion measured, not claimed.",
    overview: {
      eyebrow: "The Challenge",
      title: "Most Waste Sent to Landfill Never Needed to Go There",
      paragraphs: [
        "India generates more than 160,000 tonnes of municipal solid waste every day, and a large share still reaches unlined dumpsites. Yet the majority of it is wet organic waste that could be composted and dry recyclables that hold real market value. What makes it landfill is not its nature - it is the fact that it was mixed.",
        "The Solid Waste Management Rules, 2016 place a duty on every waste generator to segregate at source into biodegradable, non-biodegradable and domestic hazardous fractions, and make bulk generators - campuses, hotels, hospitals, gated communities, industrial units - responsible for arranging processing of their own waste.",
        "Advait Green operates that system end to end: bin infrastructure and segregation training, routed collection, material recovery facility sorting, organic processing, recyclable channelisation and documented disposal of the genuine residue only.",
      ],
      image: "/images/reverse-logistic.webp",
      badgeLabel: "SWM Rules, 2016 Aligned",
      badgeSub: "Measured diversion from landfill",
    },
    handlesEyebrow: "Waste Streams",
    handlesTitle: "What We Collect & Process",
    handles: [
      {
        icon: Sprout,
        label: "Wet & Organic Waste",
        desc: "Kitchen and canteen waste, food processing residue, garden and horticultural trimmings. Processed through composting or bio-methanation, returning compost or biogas instead of methane from a dumpsite.",
        image: "/images/Agricultural-Plastic.webp",
      },
      {
        icon: Recycle,
        label: "Dry Recyclables",
        desc: "Paper, cardboard, plastics, glass, metals and tetra packs recovered at our material recovery facility, baled by grade and channelised to authorised recyclers with weight records per stream.",
        image: "/images/Rigid-Plastics.webp",
      },
      {
        icon: Boxes,
        label: "Industrial Non-Hazardous Waste",
        desc: "Packaging waste, wooden pallets, rejected material, process residues and general factory sweepings - sorted for recovery with only genuinely non-recoverable fractions sent for disposal.",
        image: "/images/Post-Industrial-Waste.webp",
      },
      {
        icon: Building2,
        label: "Construction & Demolition Debris",
        desc: "Concrete, masonry, tiles, wood and metal from renovation and demolition activity, channelled to authorised C&D processing facilities rather than informal dumping.",
        image: "/images/manufactring-automotive.webp",
      },
      {
        icon: AlertTriangle,
        label: "Domestic Hazardous Waste",
        desc: "Batteries, tube lights, CFLs, paints, solvents, aerosols and expired chemicals separated from the general stream and routed to authorised hazardous waste handlers.",
        image: "/images/Industrial-Equipment.webp",
      },
      {
        icon: Container,
        label: "Bulk Generator Contracts",
        desc: "Full-scope waste management for campuses, gated communities, hotels, malls and industrial estates - infrastructure, manpower, routing, processing and monthly diversion reporting.",
        image: "/images/E-Waste-Collection-Logistics.webp",
      },
    ],
    processSubtitle: "How It Works",
    processTitle: "Segregation to Measured Diversion",
    process: [
      {
        icon: Layers,
        num: "01",
        title: "Source Segregation",
        desc: "Colour-coded bin infrastructure at every generation point, with signage, staff briefing and periodic audits to keep segregation quality from drifting.",
      },
      {
        icon: Truck,
        num: "02",
        title: "Routed Collection",
        desc: "Stream-separated collection on a fixed route and schedule, with vehicle-level weight capture so quantities are recorded at the point of pickup.",
      },
      {
        icon: SlidersHorizontal,
        num: "03",
        title: "Material Recovery",
        desc: "Sorting at our MRF into marketable grades - polymer type, paper grade, metal category - with contaminants and rejects separated out.",
      },
      {
        icon: Sprout,
        num: "04",
        title: "Organic Processing",
        desc: "Wet waste directed to composting or bio-methanation, converting the largest fraction of the stream into compost or energy instead of landfill methane.",
      },
      {
        icon: RotateCcw,
        num: "05",
        title: "Recyclable Channelisation",
        desc: "Baled recyclables delivered to authorised processors, with weighbridge records and destination documentation per consignment.",
      },
      {
        icon: BarChart3,
        num: "06",
        title: "Reporting & Residue Disposal",
        desc: "Monthly diversion reports by stream, with only the genuine non-recoverable residue sent to an authorised landfill or waste-to-energy facility.",
      },
    ],
    benefitsEyebrow: "Why It Matters",
    benefitsTitle: "What a Structured Waste System Returns",
    benefits: [
      {
        icon: ShieldCheck,
        title: "Bulk Generator Compliance",
        desc: "Meets the source segregation and on-site processing duties the Solid Waste Management Rules, 2016 place on bulk waste generators.",
      },
      {
        icon: Leaf,
        title: "Lower Methane Emissions",
        desc: "Diverting wet waste from landfill removes the single largest source of methane in the municipal waste stream.",
      },
      {
        icon: TrendingUp,
        title: "Recovered Material Value",
        desc: "Clean, segregated recyclables carry real market value - value that mixed waste destroys before it ever reaches a sorting line.",
      },
      {
        icon: BarChart3,
        title: "Measured Diversion",
        desc: "Monthly weight data by stream gives you a defensible landfill diversion percentage instead of an estimate.",
      },
      {
        icon: Award,
        title: "Rating & Certification Support",
        desc: "Documentation that supports green building ratings, Swachh Survekshan submissions and corporate sustainability disclosures.",
      },
      {
        icon: Globe,
        title: "Cleaner Sites",
        desc: "Scheduled, stream-separated collection ends overflowing bins, informal picking and the odour and pest problems that follow.",
      },
    ],
    stats: [
      { stat: "3-Stream", label: "Source Segregation", dark: true },
      { stat: "MRF", label: "Material Recovery Sorting", dark: false },
      { stat: "Monthly", label: "Diversion Reporting", dark: true },
      { stat: "Routed", label: "Scheduled Collection", dark: false },
      { stat: "Composting", label: "Organic Processing", dark: true },
      { stat: "Authorised", label: "Residue Disposal Only", dark: false },
      { stat: "SWM 2016", label: "Rules Aligned", dark: true },
      { stat: "Pan-India", label: "Service Network", dark: false },
    ],
    whyTitle: "Why Advait Green for",
    whyHighlight: "Solid Waste Management",
    whyDesc:
      "Segregation infrastructure, routed collection and material recovery run as one system - with diversion reported in weights, not adjectives.",
    compliance: {
      badge: "Regulatory",
      title: "Solid Waste",
      highlight: "Management Rules, 2016",
      paragraphs: [
        "The Rules make every waste generator responsible for segregating waste at source, and require bulk generators to arrange for processing of biodegradable waste within their own premises or through an agreed facility. Handing mixed waste to a collector does not discharge that duty.",
        "We build the operating system around it - bins, briefing, routes, sorting, processing and the monthly record that shows what actually happened to each stream.",
      ],
      cta: { label: "Discuss a Site Assessment", href: "/contact" },
      items: [
        {
          icon: ClipboardCheck,
          title: "Bulk Generator Registration",
          desc: "Support with local body registration and the undertakings bulk generators must file.",
        },
        {
          icon: Scale,
          title: "Stream-Wise Weight Records",
          desc: "Collection weights captured per stream, per pickup - the basis of any credible diversion claim.",
        },
        {
          icon: FileCheck,
          title: "Destination Documentation",
          desc: "Records of where each recovered stream went, and to which authorised processor.",
        },
        {
          icon: GraduationCap,
          title: "Segregation Training",
          desc: "Staff and resident training with periodic bin audits to keep segregation quality stable.",
        },
      ],
    },
    ctaTitle: "Want to Know How Much of Your Waste Is Actually Recoverable?",
    ctaDesc:
      "We will run a characterisation study on your site - a week of segregated weighing - and show you exactly what you are currently sending to landfill.",
  },
};

export const services = [
  eWaste,
  plasticWaste,
  pollutionControl,
  bioMedical,
  epr,
  amcRecycler,
  solidWaste,
];

/** Catalogue entries used for nav dropdowns and footer columns. */
export const serviceLinks = services.map((s) => ({
  label: s.navLabel,
  href: s.href,
}));

/** Look up a single service by its route slug. */
export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
