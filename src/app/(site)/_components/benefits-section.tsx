import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Gamepad2, BookOpenCheck, AlarmClock, Handshake, Cog, FileBadge } from "lucide-react";
import React from "react";

const benefits = [
  {
    title: "Aprendizado Gamificado:",
    description:
      "Transforme seu aprendizado em uma experiência de jogo, tornando o processo mais agradável e motivador.",
    icon: Gamepad2,
  },
  {
    title: "Conteúdo Atualizado:",
    description:
      "Nossos cursos são constantemente atualizados para refletir as últimas tendências e tecnologias do mercado.",
    icon: BookOpenCheck,
  },
  {
    title: "Flexibilidade de Horários:",
    description:
      "Estude no seu próprio ritmo e no horário que for mais conveniente para você.",
    icon: AlarmClock,
  },
  {
    title: "Comunidade Colaborativa:",
    description:
      "Junte-se a uma comunidade de alunos e instrutores, trocando conhecimentos e experiências.",
    icon: Handshake,
  },
  {
    title: "Suporte Personalizado:",
    description:
      "Receba suporte personalizado de nossos instrutores e monitores, garantindo que você alcance seus objetivos.",
    icon: Cog,
  },
  {
    title: "Certificado de Conclusão:",
    description:
      "Receba um certificado de conclusão ao final de cada curso, validando seus conhecimentos e habilidades.",
    icon: FileBadge,
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <>
      <section id="benefits" className="py-16 relative bg-secondary/30">
        <span className="pointer-events-none z-10 absolute size-26 md:size-64 top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>
        <span className="pointer-events-none z-10 absolute size-32 md:size-64 top-full left-full -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>
        <div className="container max-w-screen-xl">
          <header className="mb-12 flex flex-col items-center justify-center">
            <Badge variant="outline" className="mb-4">
              Benefícios
            </Badge>
            <h2 className="text-3xl font-bold md:max-w-[430px] mb-2 text-center">
              Por Que Escolher a Devlearning?
            </h2>
            <h3 className="text-lg text-foreground mb-4 text-center">
              aprendizado rápido e eficiente com uma plataforma intuitiva e
              fácil de usar.
            </h3>
            <p className="opacity-80 text-base max-w-[730px] text-center">
              Descubra como a Devlearning pode ajudar você a atingir seus
              objetivos de aprendizado de programação. Nossos benefícios são
              projetados para ajudá-lo a aprender de forma rápida e eficiente.
            </p>
          </header>

          <main className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="px-6 py-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <benefit.icon className="w-8 h-8 text-primary mb-4" />

                <h4 className="mb-2 font-bold">{benefit.title}</h4>

                <p className="opacity-80 mb-4">{benefit.description}</p>
              </Card>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};
