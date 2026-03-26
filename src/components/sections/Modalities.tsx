import { MODALITIES } from "@/lib/constants";

export function Modalities() {
  return (
    <section id="modalidades" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
          Modalidades
        </h2>
        <p className="mt-4 text-muted max-w-2xl">
          Variedade para você treinar o corpo de forma completa — sempre com orientação da equipe.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODALITIES.map((m) => (
            <article
              key={m.title}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-6 md:p-7"
            >
              <h3 className="font-heading text-xl font-semibold text-primary uppercase tracking-wide">
                {m.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">{m.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
