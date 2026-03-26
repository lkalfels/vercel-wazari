const STEPS = [
  {
    n: "1",
    title: "Agenda a aula experimental",
    description: "Rápido, sem complicações — por WhatsApp ou formulário.",
  },
  {
    n: "2",
    title: "Vem treinar e conhecer o espaço",
    description: "Equipe, horários e dinâmica das aulas.",
  },
  {
    n: "3",
    title: "Recebe o plano recomendado",
    description: "Para avançar com objetivos claros.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
          Como começar em 3 passos
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <span className="font-heading text-5xl font-bold text-primary/30">
                {s.n}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-foreground uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
