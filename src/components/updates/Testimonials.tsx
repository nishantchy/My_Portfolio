"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nishant's attention to detail is remarkable. Working with him has elevated our projects to a whole new level.",
      name: "Dhurba Chaudhary",
      role: "Full Stack Developer",
      image: "/testimonials/dhurbadai.png",
    },
    {
      quote:
        "A visionary with a knack for solving complex problems efficiently. I'm always impressed with Nishant's work ethic.",
      name: "Sujan Man Sthapit",
      role: "Graphics Designer",
      image: "/testimonials/sujandai.png",
    },
    {
      quote:
        "Collaborating with Nishant was a transformative experience. His creative solutions and dedication are inspiring.",
      name: "Rabin Shrestha",
      role: "Flutter Developer",
      image: "/testimonials/rabindai.png",
    },
    {
      quote:
        "Nishant combines technical expertise with a warm, approachable personality. I highly recommend him.",
      name: "Aasis Thapa",
      role: "CEO Metalogic Software Pvt. Ltd.",
      image: "/testimonials/aasissir.png",
    },
    {
      quote:
        "Nishant combines technical expertise with a warm, approachable personality. I highly recommend him.",
      name: "Aayush Raj Joshi",
      role: "CEO Softified Pvt. Ltd.",
      image: "/testimonials/aayushdai.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-slate-950 py-20 px-4 md:px-10" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          What People Say
        </h2>

        <div className="relative">
          {/* Main testimonial container */}
          <div className="relative overflow-hidden h-[400px] md:h-[300px] rounded-xl bg-slate-900/50 border border-slate-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center p-6 md:p-10 gap-6"
              >
                {/* Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-indigo-500 flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.667 13.333H5.33366C5.33366 8.00001 9.33366 5.33334 12.0003 4.00001C12.667 3.66668 12.667 2.66668 12.0003 2.33334C5.33366 4.66668 2.00033 9.33334 2.00033 16.6667V25.3333C2.00033 27.6667 4.00033 29.6667 6.33366 29.6667H10.667C13.0003 29.6667 15.0003 27.6667 15.0003 25.3333V17.6667C15.0003 15.3333 13.0003 13.333 10.667 13.333Z"
                        fill="#818CF8"
                      />
                      <path
                        d="M26.6663 13.333H21.333C21.333 8.00001 25.333 5.33334 27.9997 4.00001C28.6663 3.66668 28.6663 2.66668 27.9997 2.33334C21.333 4.66668 17.9997 9.33334 17.9997 16.6667V25.3333C17.9997 27.6667 19.9997 29.6667 22.333 29.6667H26.6663C28.9997 29.6667 30.9997 27.6667 30.9997 25.3333V17.6667C30.9997 15.3333 28.9997 13.333 26.6663 13.333Z"
                        fill="#818CF8"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-300 text-lg md:text-xl mb-6 italic">
                    {testimonials[currentIndex].quote}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-indigo-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-4 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-indigo-500 w-6"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Side controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
