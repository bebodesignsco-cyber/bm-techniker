"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Cog, MonitorDot, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services-data";

const icons = [BookOpen, Cog, MonitorDot, Wrench] as const;

export function ServicesPreview() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-card-border bg-black px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Service Excellence
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-brand-red" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Structured maintenance and repair workflows built specifically for German luxury vehicles.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {SERVICES.map(({ id, title, short, image }, index) => {
            const Icon = icons[index] ?? BookOpen;
            return (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card transition-all hover:shadow-2xl hover:shadow-brand-red/10"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black shadow-lg">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-white/70">
                    {short}
                  </p>
                  <Link
                    href={`/services#${id}`}
                    className="mt-6 flex items-center gap-2 font-bold text-brand-yellow transition-colors hover:text-white"
                  >
                    Explore service
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold border-white/20 text-white hover:bg-white hover:text-black">
            <Link href="/services">View all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
