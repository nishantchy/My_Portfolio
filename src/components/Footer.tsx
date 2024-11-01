"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ArrowUpCircle } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-gray-300 text-paragraphSm md:text-paragraph relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-start gap-x-[200px] items-center">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6 cursor-pointer">
              <li className="">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-white transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-white transition-colors"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-white transition-colors"
                >
                  My Works
                </Link>
              </li>
            </ul>
          </div>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <div className="w-full md:w-auto flex flex-col items-center ">
              <button
                onClick={scrollToTop}
                className={`${
                  isVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 ease-in-out focus:outline-none`}
                aria-label="Scroll to top"
              >
                <ArrowUpCircle className="h-10 w-10 text-gray-300 hover:text-white transition-colors" />
              </button>
              <span className="mt-2 text-sm">Scroll to Top</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
