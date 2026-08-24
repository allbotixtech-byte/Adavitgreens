export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "E-Waste Recycling", href: "/services/e-waste" },
      { label: "Plastic Waste Management", href: "/services/plastic-waste" },
      { label: "EPR Services", href: "/services/epr" },
      { label: "Data Destruction", href: "/services/data-destruction" },
      { label: "Battery & Solar Recycling", href: "/services/battery-recycling" },
      { label: "Reverse Logistics", href: "/services/reverse-logistics" },
    ],
  },
  { label: "Process", href: "/process" },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const companyInfo = {
  name: "Advait Green Recycling",
  legalName: "ADVAIT GREEN RECYCLING PRIVATE LIMITED",
  tagline: "Responsible Recycling. Measurable Impact.",
  constitution: "Private Limited Company",
  tollFree: "1800 XXX XXXX",
  phoneEWaste: "+91 XXXXX XXXXX",
  phonePlastic: "+91 XXXXX XXXXX",
  email: "info@advaitgreen.com",
  address: {
    corporate: "No. 2016 B/2, Vamaj Road, Vamaj, Mahesana, Gujarat – 382728",
    facility: "No. 2016 B/2, Vamaj Road, Vamaj, Mahesana, Gujarat – 382728",
  },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
};

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/insights" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  services: [
    { label: "E-Waste Management", href: "/services/e-waste" },
    { label: "Plastic Waste Management", href: "/services/plastic-waste" },
    { label: "EPR Services", href: "/services/epr" },
    { label: "Data Destruction", href: "/services/data-destruction" },
    { label: "Battery Recycling", href: "/services/battery-recycling" },
    { label: "Reverse Logistics", href: "/services/reverse-logistics" },
  ],
};
