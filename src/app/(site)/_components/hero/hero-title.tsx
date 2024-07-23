import React from "react";
import { FlipWords } from "./flip-words";

export function HeroTitle() {
  const words = ["divertindo-se", "brincando", "jogando", "rapidamente"];

  return (
    <div className="mx-auto md:max-w-[880px] font-normal text-center text-4xl md:text-6xl md:leading-[68px]">
      <div className="font-bold tracking-tight text-2xl min-[500px]:text-3xl sm:text-4xl md:max-w-[70%] text-center mx-auto max-w-96 xl:text-6xl">
        Aprenda a programar {""}
        <FlipWords words={words} />
      </div>
    </div>
  );
}
