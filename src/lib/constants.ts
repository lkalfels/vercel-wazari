import type { Benefit, FAQItem, Modality, NavLink, Testimonial } from "@/types";

/** Substituir pelo número real (apenas dígitos, com código do país). Ex.: 351912345678 */
export const WHATSAPP_NUMBER = "351966710647";

export const WHATSAPP_TRIAL_MESSAGE =
  "Olá! Quero marcar uma aula experimental na Academia Navegantes.";

export function whatsappUrl(message: string = WHATSAPP_TRIAL_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_EMAIL = "wazarifitnessgym@gmail.com";
export const FACEBOOK_URL =
  "https://www.facebook.com/people/Wazari/61560514366485/";
export const INSTAGRAM_URL = "https://www.instagram.com/wazari_fitness_gym/";

export const ADDRESS_LINE = "Rua da Tulipa 77, Manhente, Barcelos, Portugal";
export const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Academia Navegantes " + ADDRESS_LINE);

export const NAV_LINKS: NavLink[] = [
  { label: "Modalidades", href: "/#modalidades" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Horários", href: "/#horarios" },
  { label: "FAQ", href: "/#faq" },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Mais energia e foco",
    description:
      "Treinos que se encaixam na tua vida e te deixam com mais disposição no dia a dia.",
  },
  {
    title: "Corpo mais forte e definido",
    description:
      "Progressão inteligente para tonificar, ganhar força e melhorar a condição física.",
  },
  {
    title: "Consistência sem culpa",
    description:
      "Acompanhamento real para não desistires à primeira dificuldade.",
  },
  {
    title: "Treino seguro para o teu nível",
    description:
      "Adaptamos cargas e exercícios — mesmo que estejas a começar ou a regressar.",
  },
];

export const MODALITIES: Modality[] = [
  {
    title: "CrossTraining",
    description:
      "Treino funcional intenso para melhorar resistência, força e condição física global.",
  },
  {
    title: "Pilates",
    description:
      "Postura, controlo, mobilidade e fortalecimento do core.",
  },
  {
    title: "Yoga",
    description:
      "Corpo e mente em equilíbrio — flexibilidade, respiração e bem-estar.",
  },
  {
    title: "Boxe",
    description:
      "Cardio, coordenação e libertação de stress num formato dinâmico.",
  },
  {
    title: "Spin Bike",
    description:
      "Aulas energéticas para resistência e queima calórica.",
  },
];

export const DIFFERENTIATORS = [
  "Acompanhamento próximo e humano — não és um número.",
  "Aulas pensadas para vários níveis — adaptação contínua.",
  "Comunidade local motivadora — treinas num ambiente que puxa por ti.",
  "Plano recomendado após a experiência — clareza no próximo passo.",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana",
    location: "Barcelos",
    text: "Comecei sem confiança e hoje treino várias vezes por semana com vontade. Sinto-me mais forte e com muito mais energia.",
  },
  {
    name: "Ricardo",
    location: "Manhente",
    text: "Nunca tinha conseguido manter rotina. Na Academia Navegantes encontrei acompanhamento e motivação a sério.",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Sou iniciante, posso participar?",
    answer:
      "Sim. As aulas são adaptadas ao teu nível e a equipa orienta-te desde o primeiro dia.",
  },
  {
    question: "Preciso de experiência prévia?",
    answer:
      "Não. Explicamos exercícios, progressões e alternativas para treinares com segurança.",
  },
  {
    question: "Que roupa devo levar?",
    answer:
      "Roupa confortável, ténis estáveis, toalha e garrafa de água.",
  },
  {
    question: "Há compromisso na aula experimental?",
    answer:
      "Não. Experimentas primeiro e decides com calma.",
  },
  {
    question: "Onde fica o ginásio?",
    answer: `Em ${ADDRESS_LINE}. Abre a localização no Google Maps para veres como chegar.`,
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "Segunda a Sexta: 6h30 às 22h. Sábado: 9h às 14h. Domingo: Fechado.",
  },
  {
    question: "Como contacto?",
    answer: `Email: ${SITE_EMAIL}. Também podes falar connosco pelo WhatsApp (botão no site).`,
  },
];
