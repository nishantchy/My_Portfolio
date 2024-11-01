"use client";
import ScrollDown from "./Animations/Scrolldown";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Wanna Know What I Do?`;

export function MessageSection() {
  return (
    <div
      className=" w-full bg-slate-950 flex flex-col items-center justify-start overflow-hidden rounded-md h-[60vh] [mask-image:linear-gradient(to_right,transparent,white_60%,white_40%,transparent)]"
      id="message"
    >
      <TextGenerateEffect words={words} />
      <div className="w-full relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      {/* Animation */}
      <ScrollDown />
    </div>
  );
}
