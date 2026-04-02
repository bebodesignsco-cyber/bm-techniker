"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn("md:hidden", className)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/70" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col border-l border-card-border bg-background p-6 shadow-xl outline-none"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between border-b border-card-border pb-4">
            <Dialog.Title className="text-lg font-semibold text-foreground">
              Menu
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              Primary navigation links for the B.M Techniker website.
            </Dialog.Description>
            <Dialog.Close asChild>
              <Button type="button" variant="ghost" size="icon" aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>
          <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
            {links.map(({ href, label }) => (
              <Dialog.Close key={href} asChild>
                <Link
                  href={href}
                  className="rounded-sm px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-white/5 hover:text-brand-yellow"
                >
                  {label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>
          <div className="mt-auto border-t border-card-border pt-6">
            <Button asChild className="w-full" size="lg">
              <a href="tel:0393705482">Call 03 9370 5482</a>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
