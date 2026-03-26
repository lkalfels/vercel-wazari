import { Button } from "@/components/ui/Button";
import { whatsappUrl, WHATSAPP_TRIAL_MESSAGE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-surface to-background py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight leading-tight">
          Pronto para o{" "}
          <span className="text-primary">primeiro passo?</span>
        </h2>
        <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
          Marca hoje a tua aula experimental na Academia Navegantes e começa com método e
          acompanhamento.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={whatsappUrl(WHATSAPP_TRIAL_MESSAGE)} size="lg">
            Quero marcar agora
          </Button>
          <Button href="/#marcar" variant="outline" size="lg">
            Preencher formulário
          </Button>
        </div>
      </div>
    </section>
  );
}
