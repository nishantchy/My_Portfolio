"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/moving-border";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div id="hero">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-heroTitleSm md:text-heroTitle uppercase font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 pt-[300px]"
        >
          Code. Create. Captivate.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-paragraphSm md:text-paragraph max-w-[700px] pt-4 text-center font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
        >
          From concept to code, I’m Nishant Chaudhary, a web developer
          passionate about shaping seamless online journeys. Let’s make the web
          a more captivating place, one line of code at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="pt-11"
        >
          {/* <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-slate-950 text-gray-300 flex items-center space-x-2"
          >
            <span className="text-paragraphSm md:text-paragraph">
              Explore More
            </span>
          </HoverBorderGradient> */}
          <Link
            to="message"
            offset={-300}
            duration={700}
            spy={true}
            smooth={true}
          >
            {" "}
            <Button
              borderRadius="0%"
              className="bg-transparent text-paragraphSm md:text-paragraph text-gray-300"
            >
              Explore Me
            </Button>
          </Link>
        </motion.div>
      </LampContainer>
    </div>
  );
}
