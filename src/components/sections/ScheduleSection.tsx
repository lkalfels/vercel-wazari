import { CalendarClock } from "lucide-react";

const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] as const;

type ClassEntry = { time: string; name: string; duration: string; location?: string };

const SCHEDULE: Record<(typeof DAYS)[number], ClassEntry[]> = {
  Segunda: [
    { time: "07:15", name: "CrossTraining", duration: "45'" },
    { time: "12:15", name: "Pilates", duration: "60'", location: "Estúdio 1" },
    { time: "12:15", name: "CrossTraining", duration: "45'" },
    { time: "18:00", name: "Yoga", duration: "45'", location: "Estúdio 1" },
    { time: "18:50", name: "Pilates", duration: "45'", location: "Estúdio 1" },
    { time: "19:30", name: "Spin Bike", duration: "45'", location: "Sala Spin Bike" },
    { time: "19:35", name: "Pilates", duration: "45'" },
  ],
  Terça: [
    { time: "12:15", name: "Yoga", duration: "45'", location: "Estúdio 1" },
    { time: "18:15", name: "Pilates", duration: "45'", location: "Estúdio 1" },
    { time: "19:00", name: "Boxe", duration: "45'", location: "Estúdio 1" },
    { time: "19:30", name: "Spin Bike", duration: "45'", location: "Sala Spin Bike" },
  ],
  Quarta: [
    { time: "07:15", name: "CrossTraining", duration: "45'" },
    { time: "12:15", name: "CrossTraining", duration: "45'" },
    { time: "18:45", name: "Pilates", duration: "45'", location: "Estúdio 1" },
    { time: "19:30", name: "Spin Bike", duration: "45'", location: "Sala Spin Bike" },
  ],
  Quinta: [
    { time: "07:15", name: "CrossTraining", duration: "45'" },
    { time: "18:00", name: "CrossTraining", duration: "45'" },
    { time: "19:00", name: "Boxe", duration: "45'", location: "Estúdio 1" },
    { time: "19:30", name: "Spin Bike", duration: "45'", location: "Sala Spin Bike" },
  ],
  Sexta: [
    { time: "09:00", name: "Pilates", duration: "60'", location: "Estúdio 1" },
    { time: "12:15", name: "CrossTraining", duration: "45'" },
    { time: "18:00", name: "Pilates", duration: "45'", location: "Estúdio 1" },
    { time: "18:45", name: "Pilates", duration: "45'", location: "Estúdio 1" },
    { time: "19:15", name: "Spin Bike", duration: "45'", location: "Sala de Spin Bike" },
  ],
  Sábado: [
    { time: "10:00", name: "Pilates", duration: "45'", location: "Estúdio 1" },
    { time: "11:00", name: "Yoga", duration: "45'", location: "Estúdio 1" },
  ],
};

const MODALITY_COLORS: Record<string, string> = {
  CrossTraining: "bg-[#3b6e3f] text-white",
  Pilates: "bg-[#2e7d32] text-white",
  Yoga: "bg-[#8d6e3f] text-white",
  Boxe: "bg-[#e07830] text-white",
  "Spin Bike": "bg-[#1565c0] text-white",
};

function ClassCard({ entry }: { entry: ClassEntry }) {
  const color = MODALITY_COLORS[entry.name] ?? "bg-muted text-foreground";
  return (
    <div className={`rounded-[var(--radius-md)] px-3 py-2 text-xs leading-tight ${color}`}>
      <span className="font-bold uppercase">{entry.name}</span>
      {entry.location && (
        <span className="block text-[10px] opacity-80">{entry.location}</span>
      )}
      <span className="block text-[10px] opacity-80">{entry.duration}</span>
    </div>
  );
}

export function ScheduleSection() {
  return (
    <section id="horarios" className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 mb-8">
          <CalendarClock className="w-8 h-8 text-primary shrink-0" aria-hidden />
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
              Mapa de Aulas
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              Confira os horários das nossas modalidades. Horários sujeitos a alterações — confirme sempre conosco antes da primeira visita.
            </p>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-[var(--radius-lg)] border border-border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-card">
                {DAYS.map((day) => (
                  <th
                    key={day}
                    className="px-3 py-3 text-sm font-bold text-foreground uppercase tracking-wide border-b border-border text-center"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {DAYS.map((day) => (
                  <td
                    key={day}
                    className="align-top p-2 border-r last:border-r-0 border-border bg-card/50 min-w-[140px]"
                  >
                    <div className="flex flex-col gap-2">
                      {SCHEDULE[day].map((entry, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-[11px] font-mono text-muted pt-1.5 w-10 shrink-0 text-right">
                            {entry.time}
                          </span>
                          <div className="flex-1">
                            <ClassCard entry={entry} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {DAYS.map((day) => (
            <div key={day} className="rounded-[var(--radius-lg)] border border-border bg-card/50 overflow-hidden">
              <div className="bg-card px-4 py-2.5 border-b border-border">
                <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
                  {day}
                </h3>
              </div>
              <div className="p-3 flex flex-col gap-2">
                {SCHEDULE[day].map((entry, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-xs font-mono text-muted pt-1.5 w-12 shrink-0 text-right">
                      {entry.time}
                    </span>
                    <div className="flex-1">
                      <ClassCard entry={entry} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted text-center md:text-left">
          Horário sujeito a alterações. Confirmar sempre antes da primeira visita.
        </p>
      </div>
    </section>
  );
}
