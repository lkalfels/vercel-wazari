export function Offer() {
  return (
    <section id="oferta" className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[var(--radius-xl)] bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 px-6 py-8 md:px-10 md:py-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight">
            Oferta de boas-vindas
          </h2>
          <p className="mt-3 text-foreground/90 text-lg">
            Aula experimental + avaliação inicial, sem compromisso.
          </p>
          <p className="mt-6 text-sm text-muted">
            Vagas limitadas por turma — consulta disponibilidade para esta semana.
          </p>
        </div>
      </div>
    </section>
  );
}
