"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services-data";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden border-b border-white/10">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/services_hero.png"
            alt="Workshop overview"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                Services
              </h1>
              <div className="mt-6 h-1 w-20 bg-brand-red" />
              <p className="mt-8 max-w-2xl text-xl font-medium text-white/80">
                Manufacturer-aligned processes, transparent reporting, and parts
                chosen for longevity on German luxury vehicles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <div className="divide-y divide-white/5 bg-black">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className={`flex-1 space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-white sm:text-5xl">
                    {service.title}
                  </h2>
                  <div className="h-1 w-12 bg-brand-red/60" />
                </div>
                <p className="text-xl leading-relaxed text-white/70">
                  {service.short}
                </p>
                <ul className="space-y-4 pt-4">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-lg text-white/80">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-yellow" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold bg-white text-black hover:bg-white/90">
                    <Link href="/contact#booking">Book this service</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className={`flex-1 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-zinc-950 border-t border-white/5 px-4 py-32 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-4xl space-y-10"
        >
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Precision care for your precision machine.
          </h2>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold bg-brand-red text-white hover:bg-brand-red/90">
              <Link href="/contact#booking">Send an Enquiry</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold border-white/20 text-white hover:bg-white hover:text-black">
              <a href="tel:0393705482">Call Workshop</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
