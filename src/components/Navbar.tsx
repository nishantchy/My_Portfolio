"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconTools,
  IconUser,
  IconMessage,
  IconBriefcase2,
} from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Me",
      link: "about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "skills",
      icon: <IconTools className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "testimonials",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "My Works",
      link: "works",
      icon: (
        <IconBriefcase2 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full font-Cinzel">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
