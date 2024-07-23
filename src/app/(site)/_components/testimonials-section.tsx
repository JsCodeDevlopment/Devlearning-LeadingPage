"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "Leandro Scorza",
    avatar:
      "https://resenhas.b-cdn.net/wp-content/uploads/2021/12/leonardo-scorza-programador-full-stack-javascript-profissional-0.png",
    company: "CEO, Reform",
    text: "A DevLearning transformou a maneira como eu aprendo. Os jogos educativos são incrivelmente envolventes e me ajudaram a entender conceitos complexos de programação.",
  },
  {
    name: "Isaque Viadutos",
    avatar:
      "https://media.licdn.com/dms/image/C4E03AQG8mJOJLAzFqw/profile-displayphoto-shrink_200_200/0/1636077949591?e=1727308800&v=beta&t=O66WMqOm_pMn5NAdMo7h-FghHqOAyDbkdchy-IWBv_s",
    company: "CEO, SavvyCal",
    text: "Graças às aulas ao vivo e à mentoria personalizada, consegui me destacar no meu trabalho e fui promovido a desenvolvedor sênior em apenas um ano. A AppTrack nos trouxe maior segurança, eficiência e otimização dos processos operacionais.",
  },
  {
    name: "Levito Eber",
    avatar:
      "https://media.licdn.com/dms/image/D4D03AQEfZlHFD8Y7Lg/profile-displayphoto-shrink_200_200/0/1718936588663?e=1727308800&v=beta&t=ShRKF2UqYMLm8HsZIneQVXvKqXzW4qkrlhyjRF5x-YE",
    company: "CEO, Laravel",
    text: "A flexibilidade e a qualidade dos cursos me permitiram aprender no meu próprio ritmo e alcançar meus objetivos de carreira.",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container max-w-screen-xl">
        <div className="mb-2 flex flex-col items-center justify-center">
          <Badge variant="outline" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl font-bold mb-2 text-center">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground mb-4 text-center">
            Experiências reais de quem confia na Devlearning
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <div className="relative">
                  <blockquote className="mt-10">
                    <div className="max-w-3xl mx-auto text-center text-lg sm:text-xl leading-9 font-medium text-foreground">
                      <p>&ldquo;{testimonial.text}&rdquo;</p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex items-center justify-center gap-4">
                        <Avatar>
                          <AvatarFallback className="text-foreground">
                            {testimonial.name.slice(0, 2).toLocaleUpperCase()}
                          </AvatarFallback>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover object-center"
                          />
                        </Avatar>
                        <div className="flex flex-col justify-start">
                          <div className="text-base font-medium text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm font-medium text-muted-foreground">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
