import { DIFFERENTIATORS } from "@/lib/constants";
import { Check } from "lucide-react";

export function Differentiators() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
          O que nos distingue
        </h2>
        <ul className="mt-10 space-y-4 max-w-3xl">
          {DIFFERENTIATORS.map((line) => (
            <li key={line} className="flex gap-3">
              <Check
                className="w-5 h-5 text-primary shrink-0 mt-0.5"
                aria-hidden
              />
              <span className="text-foreground/90 leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
