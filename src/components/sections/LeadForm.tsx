"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/constants";

const GOALS = [
  { value: "perder peso", label: "Perder peso / definir" },
  { value: "ganhar força", label: "Ganhar força" },
  { value: "energia", label: "Mais energia e hábito" },
  { value: "regressar", label: "Regressar ao treino" },
  { value: "outro", label: "Outro" },
] as const;

const TIMES = [
  { value: "manha", label: "Manhã" },
  { value: "almoco", label: "Almoço" },
  { value: "tarde", label: "Tarde" },
  { value: "noite", label: "Noite" },
  { value: "indiferente", label: "Indiferente" },
] as const;

export function LeadForm() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState<(typeof GOALS)[number]["value"]>(
    GOALS[0].value,
  );
  const [timePref, setTimePref] = useState<(typeof TIMES)[number]["value"]>(
    TIMES[4].value,
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const n = name.trim();
    if (!n) {
      setError("Preenche o teu nome para te contactarmos.");
      return;
    }

    const lines = [
      "Olá! Quero marcar uma aula experimental na Wazari.",
      `Nome: ${n}`,
      `Objetivo: ${goal}`,
      `Preferência de horário: ${timePref}`,
    ];
    if (message.trim()) {
      lines.push(`Nota: ${message.trim()}`);
    }

    const url = whatsappUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="marcar" className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
            Pedido de aula experimental
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Preenche os campos. Ao enviar, abrimos o WhatsApp com a tua mensagem
            — só tens de confirmar o envio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl space-y-5 rounded-[var(--radius-lg)] bg-card border border-border p-6 md:p-8"
          noValidate
        >
          <div>
            <label
              htmlFor="lead-name"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Nome completo
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="O teu nome"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="lead-goal"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Objetivo principal
              </label>
              <select
                id="lead-goal"
                name="goal"
                value={goal}
                onChange={(e) =>
                  setGoal(e.target.value as (typeof GOALS)[number]["value"])
                }
                className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {GOALS.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="lead-time"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Preferência de horário
              </label>
              <select
                id="lead-time"
                name="time"
                value={timePref}
                onChange={(e) =>
                  setTimePref(e.target.value as (typeof TIMES)[number]["value"])
                }
                className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {TIMES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="lead-message"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Mensagem (opcional)
            </label>
            <textarea
              id="lead-message"
              name="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y min-h-[96px]"
              placeholder="Alguma limitação, horário ideal ou dúvida?"
            />
          </div>

          {error && (
            <p className="text-sm text-primary" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Enviar pedido
          </Button>
        </form>
      </div>
    </section>
  );
}
