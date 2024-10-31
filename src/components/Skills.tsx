"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function Skills() {
  return (
    <div
      className="flex justify-center items-center h-[40rem] flex-col px-4 [mask-image:linear-gradient(to_right,transparent,white_50%,white_50%,transparent)]"
      id="skills"
    >
      <p className="text-gray-200 text-titleSm md:text-title font-semibold tracking-wide pb-6">
        Hover over the bold texts to see my skills.
      </p>

      <span className="text-gray-200 text-paragraphSm md:text-paragraph leading-loose text-center max-w-3xl mx-auto mb-10">
        I build dynamic, scalable applications using{" "}
        <LinkPreview url="https://react.dev/" className="font-bold">
          React.js{" "}
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://nextjs.org/" className="font-bold">
          Next.js
        </LinkPreview>{" "}
        for their efficient component structure and server-side rendering
        capabilities. For a polished, interactive UI, I use{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        for animations,{" "}
        <LinkPreview url="https://ui.shadcn.com/" className="font-bold">
          ShadCN UI
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind Css
        </LinkPreview>{" "}
        for streamlined styling. I also leverage{" "}
        <LinkPreview url="https://threejs.org/" className="font-bold">
          Three.js
        </LinkPreview>{" "}
        to integrate 3D elements, creating visually engaging, immersive
        experiences that elevate user engagement.
      </span>
      {/* <span className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </span> */}
    </div>
  );
}
