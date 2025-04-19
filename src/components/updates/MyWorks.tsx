"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function MyWorks() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="w-full bg-slate-950 py-20 px-4 md:px-10" id="works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Professional Experience & Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-900/60 rounded-lg">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-5 py-2 rounded-md text-sm md:text-base transition-all ${
                activeTab === "experience"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-5 py-2 rounded-md text-sm md:text-base transition-all ${
                activeTab === "projects"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-5 py-2 rounded-md text-sm md:text-base transition-all ${
                activeTab === "certificates"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* ADEX Experience */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    ADEX INTERNATIONAL, KATHMANDU
                  </h3>
                  <p className="text-indigo-400">
                    AWS Solutions Architect Intern
                  </p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">
                  Nov 2024 – Feb 2025
                </p>
              </div>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  Completed an intensive AWS apprenticeship program, gaining
                  hands-on experience with EC2, S3, RDS, Lambda, IAM, and VPC.
                </li>
                <li>
                  Designed scalable, secure, and cost-efficient cloud solutions
                  on AWS, implementing best practices for architecture
                  optimization.
                </li>
                <li>
                  Implemented security compliance measures following AWS
                  Well-Architected Framework.
                </li>
                <li>
                  Deployed and managed various cloud infrastructure components
                  while earning AWS Solutions Architect Associate certification.
                </li>
                <li>
                  Participated in cloud architecture design reviews and
                  optimization sessions.
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://drive.google.com/file/d/1zFY6_jsdr5Dz2ReVeymVp-FQF-tkMIY7/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  More Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* SOFTIFIED Experience */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    SOFTIFIED PVT. LTD., KATHMANDU
                  </h3>
                  <p className="text-indigo-400">
                    Cloud & Full-Stack Developer
                  </p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">Feb 2024 – Present</p>
              </div>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  Architected and implemented microservices-based applications
                  using AWS services, including EC2 for compute, S3 for storage,
                  and DocumentDB for Database.
                </li>
                <li>
                  Designed and deployed a containerized application
                  infrastructure using Docker and AWS ECS.
                </li>
                <li>
                  Implemented Redis caching on AWS ElastiCache, improving
                  application performance by handling 2500+ more requests per
                  second.
                </li>
                <li>
                  Created CI/CD pipelines using GitHub Actions for automated
                  testing and deployment to AWS environments.
                </li>
                <li>
                  Established secure IAM roles and policies following least
                  privilege principles for application resources.
                </li>
                <li>
                  Led a team of interns to develop scalable, high-performance
                  application with microservices architecture and monorepo.
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://www.softified.com.np/"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  More Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* METALOGIC Experience */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    METALOGIC SOFTWARE PVT. LTD., KATHMANDU
                  </h3>
                  <p className="text-indigo-400">Front-end Developer Intern</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">
                  Sep 2024 – Dec 2024
                </p>
              </div>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  Led frontend development for the Digital Banshawali project,
                  ensuring a seamless and intuitive user experience.
                </li>
                <li>
                  Engineered complex UI components, including an interactive
                  tree structure dynamically generated from form data and
                  integrated dynamic text views for enhanced visualization.
                </li>
                <li>
                  Developed a showcase website for the Banshawali system,
                  leveraging Three.js and Framer Motion to create highly
                  interactive and visually captivating animations.
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://drive.google.com/file/d/1qwfTuITEfL6lYVDkUH_q3DopjRdey8_b/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  More Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Project 1 */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    LUMBINI MINISTRY OF SOCIAL DEVELOPMENT CLONE
                  </h3>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">OCT 2024</p>
              </div>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  Developed a full-stack clone of the Lumbini Ministry of Social
                  Development website using Next.js and Express.js.
                </li>
                <li>
                  Integrated Nodemailer for email notifications, Cloudinary for
                  media uploads, and Docker for containerized deployment.
                </li>
                <li>
                  Deployed the backend API on Render and the frontend on Vercel,
                  ensuring a smooth and responsive user experience.
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://lumbini-mosd-clone.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    CLOUD-NATIVE MINISTRY WEBSITE
                  </h3>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">OCT 2024</p>
              </div>
              <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  Implemented containerized service using Docker with best
                  deployment strategy.
                </li>
                <li>
                  Configured CI/CD pipeline for automated testing and deployment
                  to cloud environments.
                </li>
                <li>
                  Integrated cloud services for email notifications using AWS
                  SES and S3 for storage, and DocumentDB for metadata storage.
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://lumbini-mosd-clone.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Certificate 1 */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    AWS CERTIFIED SOLUTIONS ARCHITECT - ASSOCIATE
                  </h3>
                  <p className="text-indigo-400">
                    Adex International's Cloud Apprenticeship Program, Kathmandu
                  </p>
                  <p className="text-gray-400 mt-1">NOV 2024 – FEB 2025</p>
                </div>
                <div className="mt-4 md:mt-0 w-28 h-28 md:w-36 md:h-36 relative">
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
              <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  Successfully completed an intensive AWS apprenticeship,
                  gaining hands-on experience with EC2, S3, RDS, Lambda, IAM,
                  and VPC.
                </li>
                <li>
                  Designed scalable, secure, and cost-efficient cloud solutions
                  on AWS, implementing best practices for architecture
                  optimization and security compliance.
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://drive.google.com/file/d/1pq-jdJXnKSwmqv8i6RyIBN24SqpbJsRI/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Certificate 2 */}
            <div className="bg-slate-900/50 rounded-xl px-6 py-2 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    AWS EDUCATE – INTRODUCTION TO CLOUD 101
                  </h3>

                  <p className="text-gray-400 mt-1">JAN 2024</p>
                </div>
                <div className="mt-4 md:mt-0 w-28 h-28 md:w-36 md:h-36 relative">
                  <Image
                    src="/educate.png"
                    alt="AWS Cloud 101"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <ul className="list-disc pl-4 text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  Earned this certification by completing Cloud Computing 101
                  training and passing the post-course assessment.
                </li>
                <li>
                  Demonstrated the ability to create simple cloud applications
                  in a virtual lab environment and understand core AWS services.
                </li>
              </ul>
              <div className="py-4">
                <Link
                  href="https://www.credly.com/badges/3c0f0b72-8397-48ac-b6dd-6e77cc602d7f/public_url"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="bg-slate-900/50 rounded-xl px-6 py-2 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      AWS SKILL BUILDER – CERTIFIED DEVELOPER – ASSOCIATE
                    </h3>
                    <p className="text-gray-400 mt-2 md:mt-0">APR 2025</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 w-28 h-28 md:w-64 md:h-44 relative">
                  <Image
                    src="/dva.jpg"
                    alt="AWS Cloud 101"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-300  text-sm md:text-base">
                <li>
                  Certified Developer Associate qualification demonstrating
                  proficiency in developing applications on AWS.
                </li>
              </ul>
              <div className="py-5">
                <Link
                  href="https://drive.google.com/file/d/1puDn4v3jMoQR9LuvlYKN_SwoZzi5I090/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Certified by micro1
                  </h3>
                  <p className="text-indigo-400">
                    Cloud & Full-Stack Developer
                  </p>
                  <p className="text-gray-400 mt-1">APR 2025</p>
                </div>
                <div className="mt-4 md:mt-0 w-28 h-28 md:w-64 md:h-44 relative">
                  <Image
                    src="/micro1cert.jpg"
                    alt="Micro1 Certification"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-300  text-sm md:text-base">
                <li>
                  Successfully passed micro1's AI interview and certified as a
                  Cloud & Full-Stack Developer.
                </li>
                <li>
                  Experienced in AWS Cloud Architecture, infrastructure design,
                  and cost optimization with hands-on experience.
                </li>
              </ul>
              <div className="py-5">
                <Link
                  href="https://drive.google.com/file/d/1_xFncAqwOuUI4R5GUJQbF1F2ni-37mqg/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
