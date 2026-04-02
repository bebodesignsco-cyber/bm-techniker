import Link from "next/link";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=2%2F363-365+Old+Geelong+Road%2C+Hoppers+Crossing+VIC+3029+Australia";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">B.M Techniker</p>
          <p className="mt-2 max-w-sm text-sm text-foreground/70">
            Independent BMW and Mercedes-Benz service. Hoppers Crossing,
            Victoria.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:items-end">
          <a
            href="tel:0393705482"
            className="font-medium text-brand-yellow hover:text-brand-red"
          >
            03 9370 5482
          </a>
          <a
            href="mailto:admin@bmtechniker.com.au"
            className="text-foreground/80 hover:text-brand-yellow"
          >
            admin@bmtechniker.com.au
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-brand-yellow"
          >
            2/363-365 Old Geelong Road, Hoppers Crossing VIC 3029
          </a>
          <a
            href="tel:0475771453"
            className="text-foreground/60 hover:text-brand-yellow"
          >
            Mobile: 0475 771 453
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-card-border pt-8 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} B.M Techniker. All rights reserved.</p>
        <Link href="/privacy-policy" className="hover:text-brand-yellow">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
}
