import { BENEFITS } from "@/lib/constants";
import { Zap } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end gap-3 mb-10 md:mb-14">
          <Zap className="w-8 h-8 text-primary shrink-0" aria-hidden />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
            O que ganhas connosco
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="rounded-[var(--radius-lg)] bg-card border border-border p-6 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wide">
                {b.title}
              </h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
