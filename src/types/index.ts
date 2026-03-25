export type NavLink = {
  label: string;
  href: string;
};

export type FAQItem = {
  question: string;
  answer: string | React.ReactNode;
};

export type Benefit = {
  title: string;
  description: string;
};

export type Modality = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  text: string;
};
