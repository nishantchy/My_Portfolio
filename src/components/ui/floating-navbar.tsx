"use client";
import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
// import Link from "next/link";
import { Link } from "react-scroll";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div
      className={cn(
        "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full  backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  pl-8 pr-8 py-4  items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          to={navItem.link}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={`link=${idx}`}
          className={cn(
            "relative text-paragraphSm md:text-paragraph items-center flex space-x-1 text-gray-200 cursor-pointer"
          )}
        >
          <span className="block md:hidden">{navItem.icon}</span>
          <span className="hidden md:block">{navItem.name}</span>
        </Link>
      ))}
      <button className="border font-medium relative border-neutral-200 dark:border-white/[0.2]  text-gray-300 px-4 py-2 rounded-full">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
        >
          Get In Touch
        </Link>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
      <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
    </div>
  );
};
