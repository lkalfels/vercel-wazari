import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testemunhos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
          O que diz quem treina na Wazari
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-[var(--radius-lg)] bg-card border border-border p-6 md:p-8"
            >
              <Quote className="w-6 h-6 text-primary/50 mb-4" aria-hidden />
              <blockquote className="text-foreground/95 leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                <span className="font-semibold text-foreground">{t.name}</span>
                {", "}
                {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
