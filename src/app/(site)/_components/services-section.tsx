import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, GraduationCap, TrendingUp, MapPinned } from "lucide-react";

const services = [
  {
    title: "Cursos Interativos:",
    description:
      "Aprenda os fundamentos e técnicas avançadas de programação com nossos cursos detalhados.",
    icon: Code,
  },
  {
    title: "Jogo Educativo:",
    description:
      "Aprenda jogando. Nosso jogo é projetado para reforçar conceitos de programação de maneira divertida e envolvente.",
    icon: GraduationCap,
  },
  {
    title: "Rankeamento:",
    description: "Sinta-se desafiado a estar sempre no topo e tenha um objetivo para continuar.",
    icon: TrendingUp,
  },
  {
    title: "Praticidade:",
    description: "Aprenda de qualquer lugar, a qualquer hora, com nosso aplicativo móvel.",
    icon: MapPinned,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container max-w-screen-xl">
        <div
          className="mb-12 flex flex-col justify-center items-center md:items-start"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Badge variant="outline" className="mb-4">
            Nossos serviços
          </Badge>

          <h2 className="text-3xl font-bold max-w-[400px] md:max-w-[50%] lg:max-w-[40%] mb-2 text text-foreground text-center md:text-start">
            Conheça nossos serviços e soluções para você aprender a programar
          </h2>
          <h3 className="text-lg mb-4 font-semibold text-foreground text-center md:text-start">
            Aprender e se divertir nunca foi tão fácil
          </h3>

          <p className="opacity-80 text-base max-w-[500px] md:max-w-[80%] lg:max-w-[70%] text-foreground text-center md:text-start">
            No DevLearning, oferecemos uma variedade de serviços projetados para
            ajudá-lo a atingir seus objetivos de aprendizado de programação:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="px-6 py-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="mb-2 font-bold">{service.title}</h4>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
