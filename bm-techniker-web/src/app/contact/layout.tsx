import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book a service or enquiry with B.M Techniker in Hoppers Crossing. Phone, email, and booking form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
