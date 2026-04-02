import Link from "next/link";

import { Hero } from "@/components/hero";
import { ServicesPreview } from "@/components/services-preview";
import { TrustSection } from "@/components/trust-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <section
        id="contact-teaser"
        className="scroll-mt-20 border-t border-card-border px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Book or ask a question
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/70">
            Use the booking form for service requests and general enquiries, or
            call us for urgent advice.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact#booking">Go to booking form</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:0393705482">Call 03 9370 5482</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-foreground/55">
            2/363-365 Old Geelong Road, Hoppers Crossing VIC 3029
          </p>
        </div>
      </section>
    </>
  );
}
