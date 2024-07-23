"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const faqs = [
  {
    title: "Como me inscrevo em um curso?",
    content:
      "Para se inscrever, basta criar uma conta no DevLearning e escolher o curso que deseja. Clique em 'Inscrever-se' e siga as instruções para começar seu aprendizado.",
  },
  {
    title: "Preciso ter experiência em programação para começar?",
    content:
      "Não. Temos cursos para todos os níveis, desde iniciantes até avançados. Se você está começando, recomendamos nossos cursos básicos.",
  },
  {
    title: "Como posso acessar o suporte?",
    content:
      "Você pode acessar nosso suporte através do chat ao vivo na plataforma, por e-mail ou pelo nosso fórum de comunidade. Estamos sempre prontos para ajudar.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16">
      <div className="container max-w-screen-xl items-start">
        <header className="mb-12">
          <Badge variant="outline" className="mb-6">
            Possui dúvidas?
          </Badge>
          <h2 className="text-3xl font-bold md:max-w-[30%] mb-2">
            Perguntas Frequentes
          </h2>
          <h3 className="text-lg text-foreground mb-4">
            Esclareça suas dúvidas com nossas respostas rápidas
          </h3>
        </header>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.title}
              value={`item-${index}`}
              className="border border-border rounded-md bg-background"
              data-aos="fade-left"
              data-aos-delay={index * 50}
            >
              <AccordionTrigger className="text-left px-6">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 border-t border-border pt-4 text-md text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
