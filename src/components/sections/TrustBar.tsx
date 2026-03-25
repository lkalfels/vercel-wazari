import { MapPin, Users, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: MapPin, label: "Barcelos · Manhente" },
  { icon: Users, label: "Equipa atenta" },
  { icon: Sparkles, label: "Iniciantes e avançados" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-muted">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-primary shrink-0" aria-hidden />
              <span className="text-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
