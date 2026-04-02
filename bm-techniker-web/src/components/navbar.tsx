"use client";

import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/BM-techniker-icon.svg"
            alt="B.M Techniker"
            width={48}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-brand-yellow"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-brand-yellow"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-brand-yellow"
          >
            Contact
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <MobileNav />
          <Button asChild className="rounded-sm px-4 sm:px-5" size="lg">
            <a href="tel:0393705482">Call Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
