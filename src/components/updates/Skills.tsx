import React from "react";

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

export function Skills() {
  return (
    <section className="w-full bg-slate-950 py-20 px-4 md:px-10" id="skills">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Technical Skills
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          I combine expertise in full-stack development with AWS cloud solutions
          to build scalable, secure, and performant applications.
        </p>

        <dl className="mx-auto max-w-5xl divide-y divide-slate-800 border-y border-slate-800">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid gap-2 py-5 md:grid-cols-[13rem_1fr] md:gap-8"
            >
              <dt className="font-semibold text-white">{category.title}</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-1.5 text-gray-300">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
