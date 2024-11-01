"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nishant's attention to detail is remarkable. Working with him has elevated our projects to a whole new level.",
      name: "Dhurba Chaudhary (Full Stack Developer)",
      image: "/testimonials/dhurbadai.png",
    },
    {
      quote:
        "A visionary with a knack for solving complex problems efficiently. I’m always impressed with Nishant’s work ethic.",
      name: "Sujan Man Sthapit (Graphics Designer)",
      image: "/testimonials/sujandai.png",
    },
    {
      quote:
        "Collaborating with Nishant was a transformative experience. His creative solutions and dedication are inspiring.",
      name: "Rabin Shrestha (Flutter Developer)",
      image: "/testimonials/rabindai.png",
    },
    {
      quote:
        "Nishant combines technical expertise with a warm, approachable personality. I highly recommend him.",
      name: "Aasis Thapa (CEO)",
      image: "/testimonials/aasissir.png",
    },
  ];

  return (
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
  );
}
