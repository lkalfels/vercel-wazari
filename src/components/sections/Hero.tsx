"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl, WHATSAPP_TRIAL_MESSAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[85svh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest bg-primary/10 rounded-full px-4 py-1.5 ring-1 ring-primary/25">
              <Flame className="w-3.5 h-3.5" aria-hidden />
              Centro · Navegantes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-7 sm:mt-8 font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight uppercase"
          >
            Treina com método na Academia Navegantes —{" "}
            <span className="text-primary">resultados reais</span> em Navegantes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl"
          >
            Aulas de CrossTraining, Pilates, Yoga, Boxe e Spin Bike, com acompanhamento próximo para todos os níveis. Agende uma aula experimental e comece já.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              href={whatsappUrl(WHATSAPP_TRIAL_MESSAGE)}
              size="lg"
              className="group"
            >
              Agendar aula experimental
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/#horarios" variant="outline" size="lg">
              Ver horários
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-6 text-sm text-muted"
          >
            Resposta em menos de 24 horas · Sem compromisso na primeira visita
          </motion.p>
        </div>
      </div>
    </section>
  );
}
