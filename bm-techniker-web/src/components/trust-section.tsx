"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TrustSection() {
  return (
    <section
      id="trust"
      className="scroll-mt-20 border-t border-card-border bg-black px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Fix First Time
          </h2>
          <div className="mt-4 h-1 w-20 bg-brand-red" />
          <p className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
            Structured diagnosis, correct parts, and clear communication—so you
            are not paying twice for the same fault.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-8 text-lg leading-relaxed text-white/80"
          >
            <p>
              We use genuine or OEM-quality components suited to German
              vehicles, and we verify faults with manufacturer-appropriate
              tooling before recommending work. That keeps your vehicle
              maintained to a high standard without unnecessary spend—and
              typically at a fraction of dealership pricing.
            </p>
            <p>
              You receive a clear report of findings, prioritised by safety and
              reliability, and we only proceed with repairs you authorise.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold bg-white text-black hover:bg-white/90">
                <Link href="/contact#booking">Book a service</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            <motion.div
              variants={fadeIn}
              className="relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/diagnostic_workshop.png"
                alt="Technician using diagnostic equipment"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="relative mt-12 aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/oem_parts.png"
                alt="OEM parts detail"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
