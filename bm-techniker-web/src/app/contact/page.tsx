"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, ExternalLink } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/image-placeholder";

const MAPS_OPEN =
  "https://www.google.com/maps/search/?api=1&query=2%2F363-365+Old+Geelong+Road%2C+Hoppers+Crossing+VIC+3029+Australia";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <section className="relative border-b border-white/10 bg-zinc-950 px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact &amp; Book
            </h1>
            <div className="mt-6 h-1 w-20 bg-brand-red" />
            <p className="mt-8 max-w-2xl text-xl text-white/70">
              Professional consultation and expert servicing. Send a booking enquiry or call us for primary support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form Side */}
          <motion.div
            id="booking"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="scroll-mt-24 rounded-2xl border border-brand-yellow/45 bg-gradient-to-br from-brand-yellow/32 via-brand-yellow/12 to-zinc-950/88 p-8 shadow-2xl shadow-black/40 ring-1 ring-brand-yellow/20 backdrop-blur-sm sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Clock className="h-6 w-6 text-brand-red" />
              Booking Enquiry
            </h2>
            <p className="mt-4 text-white/60">
              Fill out the form below and our service advisors will contact you shortly to confirm your appointment.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>

          {/* Info Side — compact height */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-xl sm:p-6"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <MapPin className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white">Visit the Workshop</h3>
                    <p className="mt-1 text-sm text-white/70 leading-snug sm:text-base">
                      2/363-365 Old Geelong Road, Hoppers Crossing VIC 3029
                    </p>
                    <a
                      href={MAPS_OPEN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-yellow hover:text-white transition-colors sm:text-sm"
                    >
                      Get Directions <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <Phone className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Direct Contact</h3>
                    <div className="mt-1 space-y-0.5">
                      <a href="tel:0393705482" className="block text-base font-semibold text-white hover:text-brand-red transition-colors">
                        03 9370 5482
                      </a>
                      <a href="tel:0475771453" className="block text-sm text-white/60 hover:text-brand-yellow transition-colors">
                        Mobile: 0475 771 453
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <Mail className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Email</h3>
                    <a href="mailto:admin@bmtechniker.com.au" className="mt-0.5 block text-sm text-white/70 hover:text-brand-yellow transition-colors sm:text-base">
                      admin@bmtechniker.com.au
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
            >
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
                <ImagePlaceholder
                  aspectRatio="4/3"
                  label="Hoppers Crossing Location — Map under maintenance"
                  className="brightness-75 transition-all"
                />
              </div>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-lg">
                <Image
                  src="/images/hero_banner.png"
                  alt="Workshop exterior"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
