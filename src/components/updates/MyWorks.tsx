"use client";
import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Section = { title?: string; points: string[] };

type Logo = { src: string; alt: string; circle?: boolean };

type Job = {
  id: string;
  logo: Logo;
  company: string;
  role: string;
  period: string;
  summary: string;
  intro?: string;
  sections: Section[];
  link: { href: string; label: string };
};

type Project = {
  logo: Logo;
  title: string;
  date?: string;
  points: string[];
  href: string;
};

type Certificate = {
  title: string;
  issuer?: string;
  date: string;
  points: string[];
  image: string;
  imageAlt: string;
  href: string;
  badgeHref?: string;
};

const jobs: Job[] = [
  {
    id: "forgenest",
    logo: { src: "/logos/forgenest.png", alt: "ForgeNest Services logo" },
    company: "Forgenest Services Pvt. Ltd.",
    role: "Backend Developer & DevOps Engineer",
    period: "Jun 2025 – Present",
    summary:
      "APIs for OSINT and market-intelligence products, and deployments across 10+ servers.",
    intro:
      "Design, develop and maintain REST APIs and backend services for OSINT and market-intelligence products; own server provisioning, deployments and monitoring for the team's production infrastructure.",
    link: {
      href: "https://www.forgenestservices.com.np/",
      label: "Visit forgenestservices.com.np",
    },
    sections: [
      {
        title: "Auditcity",
        points: [
          "Developed the FastAPI backend of a local market-intelligence platform that takes a user's query and location, collects data from Google Maps, Yelp, websites and social platforms, and returns refined market-intelligence data.",
          "Implemented authentication and authorization using Firebase Authentication and Firestore, including user-scoped API key generation and a credit-based usage tracking system.",
          "Built background processing with Redis Queue (RQ) for long-running data collection jobs; integrated internal data packages (e.g. Geogather) and exposed them through the API.",
          "Centralized application logs through Docker volumes and connected them to a dedicated Grafana instance for real-time monitoring.",
        ],
      },
      {
        title: "Vector Search",
        points: [
          "Built a standalone search service with two independent components: Meilisearch for full-text search with indexing and filtering, and Qdrant for semantic (vector) search.",
          "Exposed ingestion and query APIs so multiple applications can push data and search it; Auditcity stores its collected data here and lets users chat with it, using local embeddings for ingestion and the Gemini API for responses.",
        ],
      },
      {
        title: "Media Archiver",
        points: [
          "Developed a file processing service to upload files to AWS S3 from remote URLs or direct upload, with bulk batch uploads and queue-based background processing using RQ; used by Auditcity and other scraping pipelines.",
          "Added OCR-based PDF text extraction and on-the-fly document conversion (e.g. DOCX to PDF) using LibreOffice.",
        ],
      },
      {
        title: "Srota",
        points: [
          "Developed REST APIs for a web data collection platform that returns structured data from a submitted URL, supporting up to 52 endpoints across Reddit, Facebook, LinkedIn, Google Maps, GitHub and the open web.",
          "Implemented the authentication module with API key management, and built a Model Context Protocol (MCP) server (under development) so users can query Srota from Claude Desktop and other MCP clients.",
        ],
      },
      {
        title: "Bitarak",
        points: [
          "Worked with vector tiles using PostGIS and Martin for location-based data monitoring, and contributed to geo tools that resolve addresses, place names and coordinates to official administrative codes.",
        ],
      },
      {
        title: "DevOps",
        points: [
          "Provision new servers using Ansible playbooks executed through Semaphore: root login disabled, public-key SSH access, firewall, security hardening, Docker and Git installation, and swap configuration.",
          "Built CI/CD pipelines where GitHub Actions workflows trigger Semaphore templates; configured per-environment inventories (testing, staging, production) with deployments running docker compose build and up, and Discord webhook notifications on completion.",
          "Manage environment variables centrally in Semaphore and generate application .env files from Jinja2 templates during deployment.",
          "Responsible for deployments and monitoring across 10+ servers, with application logs streamed into Grafana for real-time visibility.",
        ],
      },
    ],
  },
  {
    id: "softified",
    logo: { src: "/logos/softifiedlogo.png", alt: "Softified logo" },
    company: "Softified Pvt. Ltd., Kathmandu",
    role: "Cloud & Full-Stack Developer",
    period: "Dec 2024 – Jun 2025",
    summary:
      "Microservices on AWS with Docker, ECS, ElastiCache and GitHub Actions CI/CD.",
    link: { href: "https://www.softified.com.np/", label: "More details" },
    sections: [
      {
        points: [
          "Architected and implemented microservices-based applications using AWS services, including EC2 for compute, S3 for storage, and DocumentDB for Database.",
          "Designed and deployed a containerized application infrastructure using Docker and AWS ECS.",
          "Implemented Redis caching on AWS ElastiCache, improving application performance by handling 2500+ more requests per second.",
          "Created CI/CD pipelines using GitHub Actions for automated testing and deployment to AWS environments.",
          "Established secure IAM roles and policies following least privilege principles for application resources.",
          "Led a team of interns to develop scalable, high-performance application with microservices architecture and monorepo.",
        ],
      },
    ],
  },
  {
    id: "adex",
    logo: { src: "/logos/adex-logo.png", alt: "Adex International logo" },
    company: "Adex International, Kathmandu",
    role: "AWS Solutions Architect Intern",
    period: "Nov 2024 – Jan 2025",
    summary:
      "Intensive AWS apprenticeship that ended with the Solutions Architect Associate certification.",
    link: {
      href: "https://drive.google.com/file/d/1zFY6_jsdr5Dz2ReVeymVp-FQF-tkMIY7/view?usp=sharing",
      label: "More details",
    },
    sections: [
      {
        points: [
          "Completed an intensive AWS apprenticeship program, gaining hands-on experience with EC2, S3, RDS, Lambda, IAM, and VPC.",
          "Designed scalable, secure, and cost-efficient cloud solutions on AWS, implementing best practices for architecture optimization.",
          "Implemented security compliance measures following AWS Well-Architected Framework.",
          "Deployed and managed various cloud infrastructure components while earning AWS Solutions Architect Associate certification.",
          "Participated in cloud architecture design reviews and optimization sessions.",
        ],
      },
    ],
  },
  {
    id: "metalogic",
    logo: {
      src: "/logos/Red%20Circle%20M-Mark%20Logo.png",
      alt: "Metalogic logo",
      circle: true,
    },
    company: "Metalogic Software Pvt. Ltd., Kathmandu",
    role: "Front-end Developer Intern",
    period: "Sep 2024 – Dec 2024",
    summary:
      "Led the frontend of the Digital Banshawali project and built its showcase site.",
    link: {
      href: "https://drive.google.com/file/d/1qwfTuITEfL6lYVDkUH_q3DopjRdey8_b/view?usp=sharing",
      label: "More details",
    },
    sections: [
      {
        points: [
          "Led frontend development for the Digital Banshawali project, ensuring a seamless and intuitive user experience.",
          "Engineered complex UI components, including an interactive tree structure dynamically generated from form data and integrated dynamic text views for enhanced visualization.",
          "Developed a showcase website for the Banshawali system, leveraging Three.js and Framer Motion to create highly interactive and visually captivating animations.",
        ],
      },
    ],
  },
];

const projects: Project[] = [
  {
    logo: { src: "/logos/srotaapps.png", alt: "Srota Apps logo" },
    title: "Srota Apps – SaaS platform (RMS & IMS)",
    href: "https://www.srotaapps.com/",
    points: [
      "Sole developer of a SaaS platform with two products: Srota RMS (restaurant management) and Srota IMS (inventory management), both providing billing and point-of-sale functionality.",
      "Built IRD-verified applications with CBMS synchronization to meet Inland Revenue Department compliance requirements.",
      "Developed backend with FastAPI, PostgreSQL and RQ, Brevo for transactional email, and a Next.js (TypeScript, Tailwind CSS) frontend using SWR and Zustand; deployments automated with GitHub Actions.",
    ],
  },
  {
    logo: { src: "/logos/pokologistics.webp", alt: "Poko Logistics logo" },
    title: "Poko Logistics – Delivery management system",
    href: "https://pokologistics.com.np/",
    points: [
      "Built end-to-end, from requirements to production, a multi-vendor logistics platform for Poko Logistics Pvt. Ltd. where vendors create deliveries and the operations team manages them.",
      "Implemented delivery management, zone and location management, and report generation using Next.js, FastAPI and PostgreSQL; responsible for deployment and ongoing monitoring.",
    ],
  },
  {
    logo: { src: "/logos/lumbini.webp", alt: "Government of Nepal emblem" },
    title: "Lumbini Ministry of Social Development clone",
    date: "Oct 2024",
    href: "https://lumbini-mosd-clone.vercel.app/",
    points: [
      "Developed a full-stack clone of the Lumbini Ministry of Social Development website using Next.js and Express.js.",
      "Integrated Nodemailer for email notifications, Cloudinary for media uploads, and Docker for containerized deployment.",
      "Deployed the backend API on Render and the frontend on Vercel, ensuring a smooth and responsive user experience.",
    ],
  },
];

const certificates: Certificate[] = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Adex International's Cloud Apprenticeship Program, Kathmandu",
    date: "Nov 2024 – Jan 2025",
    image: "/awssaa.png",
    imageAlt: "AWS Solutions Architect Associate",
    href: "https://drive.google.com/file/d/1pq-jdJXnKSwmqv8i6RyIBN24SqpbJsRI/view?usp=sharing",
    badgeHref:
      "https://www.credly.com/badges/da1f9265-a550-4aa3-82be-24462a4105c7/public_url",
    points: [
      "Successfully completed an intensive AWS apprenticeship, gaining hands-on experience with EC2, S3, RDS, Lambda, IAM, and VPC.",
      "Designed scalable, secure, and cost-efficient cloud solutions on AWS, implementing best practices for architecture optimization and security compliance.",
    ],
  },
  {
    title: "AWS Educate – Introduction to Cloud 101",
    date: "Jan 2024",
    image: "/educate.png",
    imageAlt: "AWS Cloud 101",
    href: "https://www.credly.com/badges/3c0f0b72-8397-48ac-b6dd-6e77cc602d7f/public_url",
    points: [
      "Earned this certification by completing Cloud Computing 101 training and passing the post-course assessment.",
      "Demonstrated the ability to create simple cloud applications in a virtual lab environment and understand core AWS services.",
    ],
  },
  {
    title: "AWS Skill Builder – Certified Developer – Associate",
    date: "Apr 2025",
    image: "/dva.jpg",
    imageAlt: "AWS Certified Developer Associate",
    href: "https://drive.google.com/file/d/1puDn4v3jMoQR9LuvlYKN_SwoZzi5I090/view?usp=sharing",
    points: [
      "Certified Developer Associate qualification demonstrating proficiency in developing applications on AWS.",
    ],
  },
  {
    title: "Certified by micro1",
    issuer: "Cloud & Full-Stack Developer",
    date: "Apr 2025",
    image: "/micro1cert.jpg",
    imageAlt: "Micro1 Certification",
    href: "https://drive.google.com/file/d/1_xFncAqwOuUI4R5GUJQbF1F2ni-37mqg/view?usp=sharing",
    points: [
      "Successfully passed micro1's AI interview and certified as a Cloud & Full-Stack Developer.",
      "Experienced in AWS Cloud Architecture, infrastructure design, and cost optimization with hands-on experience.",
    ],
  },
];

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-indigo-300 hover:text-white transition-colors ${focusRing}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Link>
  );
}

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-14 w-20 md:h-16 md:w-28 shrink-0 items-center justify-center rounded-lg bg-slate-950 ring-1 ring-slate-800">
      {logo.circle ? (
        <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="48px"
            className="object-cover scale-[1.04]"
          />
        </div>
      ) : (
        <div className="relative h-full w-full">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="112px"
            className="object-contain p-2"
          />
        </div>
      )}
    </div>
  );
}

function BulletList({ points }: { points: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-sm md:text-[15px] leading-relaxed text-gray-300 marker:text-slate-600">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

function JobDetails({ job }: { job: Job }) {
  const [activeSection, setActiveSection] = useState(0);
  const hasPicker = job.sections.length > 1;
  const section = job.sections[activeSection];

  return (
    <div className="space-y-5 pt-4">
      {job.intro && (
        <p className="text-sm md:text-[15px] leading-relaxed text-gray-300">
          {job.intro}
        </p>
      )}

      {hasPicker ? (
        <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-6">
          <div
            role="tablist"
            aria-label={`${job.company} projects`}
            className="flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 -mx-1 px-1"
          >
            {job.sections.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === activeSection}
                onClick={() => setActiveSection(i)}
                className={`shrink-0 rounded-md px-3 py-1.5 text-left text-sm transition-colors ${focusRing} ${
                  i === activeSection
                    ? "bg-indigo-600/20 text-white md:border-l-2 md:border-indigo-400"
                    : "text-gray-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
          <div role="tabpanel" className="mt-3 md:mt-0">
            <BulletList points={section.points} />
          </div>
        </div>
      ) : (
        <BulletList points={section.points} />
      )}

      <ExternalLink href={job.link.href}>{job.link.label}</ExternalLink>
    </div>
  );
}

function ExperienceTimeline() {
  const [openId, setOpenId] = useState<string | null>(jobs[0].id);

  return (
    <ol className="relative ml-2 border-l border-slate-800 space-y-3">
      {jobs.map((job, index) => {
        const isOpen = openId === job.id;
        const isCurrent = index === 0;
        return (
          <li key={job.id} className="relative pl-6 md:pl-8">
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full ring-4 ring-slate-950 ${
                isCurrent ? "bg-indigo-400" : "bg-slate-600"
              }`}
            />
            <div
              className={`rounded-xl border transition-colors ${
                isOpen
                  ? "border-slate-700 bg-slate-900/70"
                  : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : job.id)}
                aria-expanded={isOpen}
                aria-controls={`job-${job.id}`}
                className={`flex w-full items-start justify-between gap-4 rounded-xl p-4 md:p-5 text-left ${focusRing}`}
              >
                <LogoTile logo={job.logo} />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs md:text-sm text-gray-400">
                    {job.period}
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-white">
                    {job.role}
                  </span>
                  <span className="block text-indigo-300">{job.company}</span>
                  {!isOpen && (
                    <span className="mt-2 block text-sm text-gray-400">
                      {job.summary}
                    </span>
                  )}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`mt-1 h-5 w-5 shrink-0 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`job-${job.id}`}
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-800 px-4 pb-5 md:px-5">
                      <JobDetails job={job} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function ProjectList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5"
        >
          <div className="flex items-center gap-4">
            <LogoTile logo={project.logo} />
            <div className="min-w-0">
              {project.date && (
                <p className="text-xs md:text-sm text-gray-400">
                  {project.date}
                </p>
              )}
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="mt-4 flex-1">
            <BulletList points={project.points} />
          </div>
          <div className="mt-5">
            <ExternalLink href={project.href}>View project</ExternalLink>
          </div>
        </article>
      ))}
    </div>
  );
}

function CertificateList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {certificates.map((cert) => (
        <article
          key={cert.title}
          className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5"
        >
          <div className="flex items-start gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm text-gray-400">{cert.date}</p>
              <h3 className="mt-1 text-base md:text-lg font-semibold text-white">
                {cert.title}
              </h3>
              {cert.issuer && (
                <p className="mt-0.5 text-sm text-indigo-300">{cert.issuer}</p>
              )}
            </div>
            <div className="relative h-20 w-24 shrink-0 rounded-md bg-slate-950/60">
              {cert.badgeHref ? (
                <Link
                  href={cert.badgeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${cert.imageAlt} badge on Credly`}
                  className={`block h-full w-full rounded-md ${focusRing}`}
                >
                  <Image
                    src={cert.image}
                    alt={cert.imageAlt}
                    fill
                    className="object-contain"
                  />
                </Link>
              ) : (
                <Image
                  src={cert.image}
                  alt={cert.imageAlt}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
          <div className="mt-4 flex-1">
            <BulletList points={cert.points} />
          </div>
          <div className="mt-5">
            <ExternalLink href={cert.href}>View certificate</ExternalLink>
          </div>
        </article>
      ))}
    </div>
  );
}

export function MyWorks() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full bg-slate-950 py-20 px-4 md:px-10" id="works">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Professional Experience & Projects
          </h2>

          <div className="flex justify-center mb-10">
            <div
              role="tablist"
              aria-label="Work sections"
              className="inline-flex p-1 bg-slate-900/60 rounded-lg"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-5 py-2 rounded-md text-sm md:text-base transition-colors ${focusRing} ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div role="tabpanel">
            {activeTab === "experience" && <ExperienceTimeline />}
            {activeTab === "projects" && <ProjectList />}
            {activeTab === "certificates" && <CertificateList />}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
