"use client";

import { useLottie } from "lottie-react";
import WhatsAppAnimation from "../../lottie/whatsApp.json";
import Link from "next/link";
export default function WhatsApp() {
  const options = {
    animationData: WhatsAppAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div>
      <div className="fixed z-20 right-6 bottom-14  md:right-20 md:bottom-24 max-w-[50px] md:max-w-[70px] w-full mx-auto">
        <Link
          href="https://wa.me/9868211546?text=Hi%20I%20need%20your%20assistance%20"
          target="_blank"
        >
          {View}
        </Link>
      </div>
      ;
      <div className="pb-6 text-center text-paragraphSm md:text-paragraph text-gray-300">
        Developed By Nishant Chaudhary
      </div>
    </div>
  );
}
