"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * custom,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero_banner.png"
          alt="Modern automotive workshop"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-12 pb-28 text-center sm:px-6 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Image
            src="/images/BM-techniker-logo.svg"
            alt="B.M Techniker BMW Mercedes-Benz specialists"
            width={848}
            height={759}
            className="h-auto w-[min(100%,240px)] sm:w-[280px]"
            priority
          />
        </motion.div>

        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
        >
          German Vehicle Specialists
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg font-medium text-white/90 sm:text-xl md:text-2xl"
        >
          40+ Years of Combined Dealership Experience
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          We operate with a &ldquo;fix first time&rdquo; standard: genuine or
          OEM-quality German parts, factory-aligned servicing, and diagnostics
          that resolve issues correctly the first visit.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-white/90">
            <Link href="/contact#booking">Book a Service</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-white/50 text-white hover:bg-white/10 backdrop-blur-sm">
            <a href="tel:0393705482">Call 03 9370 5482</a>
          </Button>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/80 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden">
        <div className="mx-auto flex max-w-md flex-col gap-3">
          <Button asChild size="lg" className="w-full bg-white text-black">
            <a href="tel:0393705482">Call Now — 03 9370 5482</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full border-white/20 text-white">
            <Link href="/contact#booking">Book a Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
