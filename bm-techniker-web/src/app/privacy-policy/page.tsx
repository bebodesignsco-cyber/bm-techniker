import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How B.M Techniker collects, uses, and stores personal information submitted via this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-1 flex-col px-4 py-14 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl space-y-4 text-foreground/80">
        <h1 className="text-3xl font-bold text-foreground">Privacy policy</h1>
        <p className="text-sm text-foreground/60">
          Last updated: {new Date().toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>
          B.M Techniker (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
          privacy. This policy explains what we collect when you use our
          website or submit an enquiry, and how we use it.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-foreground">
          What we collect
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>
            Contact details you provide (name, phone, email) when you submit a
            booking or enquiry form.
          </li>
          <li>
            Vehicle information you choose to include to help us prepare for
            your visit.
          </li>
          <li>
            Technical data typical of websites (e.g. server logs) as required
            for security and reliability.
          </li>
        </ul>
        <h2 className="mt-10 text-xl font-semibold text-foreground">
          How we use information
        </h2>
        <p>
          We use your details only to respond to your enquiry, schedule work,
          and communicate about your vehicle. We do not sell personal
          information. We may disclose information where required by law.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-foreground">
          Storage and security
        </h2>
        <p>
          We take reasonable steps to protect information from misuse and
          unauthorised access. Retention periods follow operational and legal
          requirements.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-foreground">
          Your rights
        </h2>
        <p>
          You may request access to or correction of personal information we
          hold. Contact us using the details on our{" "}
          <Link href="/contact" className="text-brand-yellow hover:underline">
            contact page
          </Link>
          .
        </p>
        <h2 className="mt-10 text-xl font-semibold text-foreground">Updates</h2>
        <p>
          We may update this policy from time to time. Continued use of the site
          after changes constitutes acceptance of the updated policy.
        </p>
      </article>
    </div>
  );
}
