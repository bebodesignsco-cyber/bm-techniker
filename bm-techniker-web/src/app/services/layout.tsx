import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Logbook servicing, genuine and OEM parts, advanced diagnostics, and mechanical repairs for BMW and Mercedes-Benz vehicles in Hoppers Crossing.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
