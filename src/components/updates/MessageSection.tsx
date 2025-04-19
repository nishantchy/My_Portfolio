"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Full Stack Cloud Developer`;

export function MessageSection() {
  return (
    <div
      className="w-full bg-slate-950 flex flex-col items-center justify-center py-20 relative overflow-hidden"
      id="message"
    >
      {/* <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(600px_400px_at_center,transparent_30%,white)]"></div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center"
      >
        <TextGenerateEffect words={words} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto px-4"
        >
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Full-stack development with cloud expertise. Scroll down to explore
            my journey, skills, and projects.
          </p>
        </motion.div>
      </motion.div>

      {/* Background gradients */}
      <div className="absolute inset-x-50 top-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-50 top-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-100 top-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-100 top-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  );
}
