"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function AboutSection() {
  return (
    <div
      className="bg-slate-950 py-16 px-4 md:px-6 flex justify-center"
      id="about"
    >
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center md:justify-start"
          >
            <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-lg shadow-indigo-500/20">
              <Image
                src="/nishant.png"
                alt="Nishant Chaudhary"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              About Me
            </h2>
            <p className="text-gray-300 mb-5 text-paragraphSm md:text-paragraph text-justify">
              I'm a Full-Stack and Cloud Developer with expertise in building
              scalable web applications and designing secure cloud
              infrastructure. With experience in both development and AWS cloud
              services, I bring a comprehensive approach to modern application
              architecture.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-auto">
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                  AWS Certified
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  Solutions Architect Associate
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-xs text-indigo-300 border border-indigo-700/50">
                    EC2
                  </span>
                  <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-xs text-indigo-300 border border-indigo-700/50">
                    S3
                  </span>
                  <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-xs text-indigo-300 border border-indigo-700/50">
                    Lambda
                  </span>
                  <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-xs text-indigo-300 border border-indigo-700/50">
                    CloudFront
                  </span>
                  <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-xs text-indigo-300 border border-indigo-700/50">
                    VPC
                  </span>
                </div> */}
              </div>

              <div className="w-32 h-32 md:w-40 md:h-40 relative mt-4 md:mt-0">
                <Link
                  href="https://www.credly.com/badges/da1f9265-a550-4aa3-82be-24462a4105c7/public_url"
                  target="_blank"
                >
                  <Image
                    src="/awssaa.png"
                    alt="AWS Solutions Architect Associate"
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
