import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-heading text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-heading text-2xl text-foreground uppercase">
        Página não encontrada
      </h1>
      <p className="mt-2 text-muted max-w-md">
        O link pode estar desatualizado. Volta à página inicial da Academia Navegantes.
      </p>
      <Button href="/" className="mt-8">
        Ir para início
      </Button>
    </div>
  );
}
