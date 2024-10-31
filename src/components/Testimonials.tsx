"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "It was the best of times.",
      name: "Charles Dickens",
      image: "/profile.JPG",
    },
    {
      quote: "To be, or not to be, that is the question",
      name: "William Shakespeare",
      image: "/profile.JPG",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      image: "/profile.JPG",
    },
  ];

  return (
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
  );
}
