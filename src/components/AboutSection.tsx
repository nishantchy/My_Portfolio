"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function AboutSection() {
  return (
    <div className="flex flex-col overflow-hidden bg-slate-950 ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white [mask-image:linear-gradient(to_right,transparent,white_60%,white_10%,transparent)]">
              <span
                className="md:text-title text-titleSm font-bold mt-1 leading-none text-gray-300"
                id="about"
              >
                How Do I Look?
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/profile.png`}
          alt="hero"
          height={720}
          width={1400}
          quality={100}
          className="mx-auto rounded-2xl object-cover h-full object-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
