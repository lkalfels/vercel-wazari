import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/lib/constants";

const FAQ_ADDRESS = "Rua da Tulipa 77, Manhente, Barcelos, Portugal";

const faqItems = FAQS.map((faq) => {
  if (faq.question === "Onde fica o ginásio?") {
    return {
      ...faq,
      answer: (
        <div className="space-y-4">
          <p>Em {FAQ_ADDRESS}.</p>
          <div className="rounded-[var(--radius-md)] overflow-hidden border border-border">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent("Academia Navegantes, Rua da Tulipa 77, Manhente, Barcelos")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Academia Navegantes no Google Maps"
            />
          </div>
        </div>
      ),
    };
  }
  if (faq.question === "Qual é o horário de funcionamento?") {
    return {
      ...faq,
      answer: (
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">Dia</th>
              <th className="text-left py-2 font-semibold text-foreground">Horário</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="py-2 pr-4">Segunda a Sexta</td>
              <td className="py-2">6h30 às 22h</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-2 pr-4">Sábado</td>
              <td className="py-2">9h às 14h</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Domingo</td>
              <td className="py-2">Fechado</td>
            </tr>
          </tbody>
        </table>
      ),
    };
  }
  return faq;
});

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
          Perguntas frequentes
        </h2>
        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
