"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkillPillProps {
  name: string;
  delay: number;
}

const SkillPill: React.FC<SkillPillProps> = ({ name, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
      className="px-4 py-2 bg-indigo-900/40 rounded-full text-sm text-indigo-300 border border-indigo-700/50 whitespace-nowrap"
    >
      {name}
    </motion.span>
  );
};

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "SQL", "Python"],
    },
    {
      title: "Frameworks",
      skills: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "Prisma",
        "Tailwind CSS",
        "Three.js",
        "Framer Motion",
      ],
    },
    {
      title: "AWS Services",
      skills: [
        "EC2",
        "S3",
        "CloudFront",
        "Lambda",
        "API Gateway",
        "RDS",
        "DynamoDB",
        "ElastiCache",
        "IAM",
        "VPC",
        "CloudWatch",
      ],
    },
    {
      title: "Cloud Security",
      skills: [
        "IAM Policies",
        "Security Groups",
        "Network ACLs",
        "KMS",
        "TLS/SSL",
      ],
    },
    {
      title: "Infrastructure & DevOps",
      skills: [
        "Docker",
        "AWS ECS",
        "CloudFormation",
        "Terraform",
        "GitHub Actions",
        "Jenkins",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Aurora Serverless",
        "DynamoDB",
        "DocumentDB",
      ],
    },
    {
      title: "Development Skills",
      skills: [
        "Full-Stack Development",
        "REST APIs",
        "Microservices",
        "Monorepo (TurboRepo)",
        "RBAC",
        "Micro-frontends",
        "CI/CD",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-Solving",
        "Team Collaboration",
        "Adaptability",
        "Time Management",
        "Communication",
      ],
    },
  ];

  return (
    <div className="w-full bg-slate-950 py-20 px-4 md:px-10" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="bg-slate-900/50 rounded-xl p-6 border border-slate-800"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill
                    key={skill}
                    name={skill}
                    delay={skillIndex + categoryIndex * category.skills.length}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-400 max-w-3xl mx-auto">
            I combine expertise in full-stack development with AWS cloud
            solutions to build scalable, secure, and performant applications.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
