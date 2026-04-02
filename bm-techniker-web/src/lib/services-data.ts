export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  bullets: string[];
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "logbook",
    title: "Logbook Servicing",
    short:
      "Factory-scheduled servicing using Mobil 1 fully synthetic oil. Preserves manufacturer warranty at a fraction of dealership cost.",
    bullets: [
      "Service intervals aligned to manufacturer specifications",
      "Mobil 1 fully synthetic lubricants where specified",
      "Digital logbook and warranty-preserving documentation",
    ],
    image: "/images/service_logbook.png",
  },
  {
    id: "oem-parts",
    title: "Genuine / OEM Parts",
    short:
      "Only genuine or OEM-quality German parts. No compromises on quality or compatibility.",
    bullets: [
      "Genuine or OEM-equivalent components sourced for correct fit and longevity",
      "Transparent part justification on every job",
      "Warranty and ADR considerations documented",
    ],
    image: "/images/service_oem_parts.png",
  },
  {
    id: "diagnostics",
    title: "Advanced Diagnostics",
    short:
      "Latest BMW and Mercedes-Benz diagnostic tools and software for accurate fault identification.",
    bullets: [
      "Manufacturer-level scan tools and software channels",
      "Structured fault tracing before parts replacement",
      "Clear explanation of codes, tests, and outcomes",
    ],
    image: "/images/service_diagnostics.png",
  },
  {
    id: "repairs",
    title: "Mechanical Repairs",
    short:
      "Full safety inspections with transparent reporting. No work carried out without your authority.",
    bullets: [
      "Safety inspection with prioritised findings",
      "Authorised repairs only—no surprise work",
      "Cost-effective sequencing of necessary vs deferred items",
    ],
    image: "/images/service_repairs.png",
  },
];
