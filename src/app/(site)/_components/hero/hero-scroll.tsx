"use client";

import { ContainerScrollAnimation } from "@/app/(site)/_components/hero/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeroTitle } from "./hero-title";

export const HeroScroll: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScrollAnimation
        titleComponent={
          <>
            <HeroTitle />
            <div className="mx-auto">
              <p className="text-base sm:text-lg sm:leading-8 mt-4 text-center text-foreground max-w-96 mx-auto">
                Chegou a hora de aprender programação, faça as atividades e
                aprenda rapidamente com a nossa plataforma.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 mt-10">
              <Button asChild className="rounded-full font-semibold">
                <Link href={routesMap.register}>
                  Experimente agora
                  <ArrowRightIcon className="w-4 h-4 ml-4" />
                </Link>
              </Button>
            </div>
          </>
        }
      >
        <Image
          src="/mock-dashboard-dark.png"
          alt="hero"
          height={720}
          width={1400}
          className="hidden dark:block mx-auto rounded-lg object-contain h-auto w-full object-left-top aspect-1/2"
          draggable={false}
        />
        <Image
          src="/mock-dashboard-light.png"
          alt="hero"
          height={720}
          width={1400}
          className="dark:hidden mx-auto rounded-lg object-contain h-auto w-full object-left-top aspect-1/2"
          draggable={false}
        />
      </ContainerScrollAnimation>
    </div>
  );
};
