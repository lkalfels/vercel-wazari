import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wazari | Ginásio em Barcelos — Aulas e Treino com Acompanhamento",
  description:
    "Ginásio em Barcelos (Manhente). CrossTraining, Pilates, Yoga, Boxe e Spin Bike. Marca a tua aula experimental e começa com método e acompanhamento.",
  keywords: [
    "ginásio Barcelos",
    "ginásio Manhente",
    "CrossTraining Barcelos",
    "Pilates Barcelos",
    "aulas de grupo",
    "Wazari",
  ],
  openGraph: {
    title: "Wazari — Ginásio em Barcelos",
    description:
      "Treina com método e acompanhamento. Aulas para todos os níveis. Marca a tua aula experimental.",
    type: "website",
    locale: "pt_PT",
    siteName: "Wazari Fitness Gym",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${oswald.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>
        <SiteHeader />
        <main className="pt-[var(--site-header-offset)]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
