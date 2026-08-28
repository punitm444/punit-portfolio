"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
} from "lucide-react";

const skills = [
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Ansible",
  "Jenkins",
  "Linux",
  "Git & GitHub",
  "Bash",
  "Python",
  "CI/CD",
  "Machine Learning",
  "SQL",
];

const projects = [
  {
    number: "01",
    title: "AWS Serverless Image Moderation",
    description:
      "A serverless image moderation system built entirely with Infrastructure as Code. Images uploaded to Amazon S3 trigger AWS Lambda, which uses Amazon Rekognition to detect unsafe content, stores moderation results in DynamoDB, and sends notifications through SNS.",
    tech: [
      "AWS",
      "Terraform",
      "Lambda",
      "S3",
      "Rekognition",
      "DynamoDB",
      "SNS",
    ],
    links: [
      {
        label: "View Code",
        href: "https://github.com/punitm444/aws-image-moderation",
      },
    ],
  },

  {
    number: "02",
    title: "Mental Awareness Platform",
    description:
      "An AI-powered mental awareness project designed to provide an interactive and supportive experience through conversational assistance and accessible technology.",
    tech: ["Python", "AI", "Machine Learning"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/punitm444/AI-Chat-Assistant",
      },
    ],
  },

  {
    number: "03",
    title: "MeetMySoul",
    description:
      "A full-stack application built with separate frontend and backend architectures, demonstrating modern web development, API integration, and structured application design.",
    tech: ["JavaScript", "Frontend", "Backend", "API"],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/punitm444/meetmysoul-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/punitm444/meetmysoul-backend",
      },
    ],
  },

  {
    number: "04",
    title: "Sign Language Interpreter",
    description:
      "A real-time sign language interpretation system using computer vision and machine learning to recognize hand gestures and convert them into meaningful text or speech.",
    tech: ["Python", "Computer Vision", "Machine Learning"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/punitm444/Sign-Language-Interpreter",
      },
    ],
  },

  {
    number: "05",
    title: "AgriVision",
    description:
      "A crop disease detection project that uses machine learning and computer vision to analyze plant images and identify potential crop diseases.",
    tech: ["Python", "Machine Learning", "Computer Vision"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/SAbhinav04/crop_disease_detection",
      },
    ],
  },
];

const experience = [
  {
    role: "Cloud & DevOps Intern",
    company: "Cloud Institution, Bengaluru",
    period: "Jun 2026 — Present",
    description:
      "Provisioning and administering AWS infrastructure and containerized environments using EC2, VPC, IAM, Docker, and Kubernetes. Automating infrastructure and configuration workflows with Terraform, Ansible, Bash, and Git.",
  },
  {
    role: "AI & Machine Learning Intern",
    company:
      "International Institute of Medical Science & Technology Council",
    period: "Jan 2026 — May 2026",
    description:
      "Completed a 730-hour internship building AI and ML-powered web applications, working across API integration, frontend development, dataset preprocessing, model integration, and deployment.",
  },
];

const certifications = [
  {
    title: "AWS APAC Solutions Architecture Virtual Experience",
    file: "/certificates/aws-solutions-architecture.pdf",
  },
  {
    title: "SQL Skill Certificate — HackerRank",
    file: "/certificates/sql-basic-certificate.pdf",
  },
  {
    title: "Deloitte Australia Cyber Job Simulation",
    file: "/certificates/deloitte-cyber-job-simulation.pdf",
  },
  {
    title: "Gen AI Powered Data Analytics",
    file: "/certificates/gen-ai-powered-data-analytics.pdf",
  },
  {
    title: "SOAR — AI To Be Aware — Microsoft",
    file: "/certificates/soar-ai-to-be-aware.pdf",
  },
];

export default function Home() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute top-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#080808]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            P<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a
              href="#experience"
              className="transition hover:text-white"
            >
              Experience
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-blue-400/50 hover:bg-blue-400/10"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* HERO LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3 text-sm text-zinc-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
            >
              I build{" "}
              <span className="text-zinc-500">
                reliable cloud
              </span>
              <br />
              infrastructure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg leading-8 text-zinc-400"
            >
              I'm{" "}
              <span className="font-medium text-white">
                Punit Murali
              </span>
              , a DevOps Engineer focused on cloud infrastructure,
              automation, Infrastructure as Code, and building reliable
              systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
              >
                Explore my work

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <a
                href="https://github.com/punitm444"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:bg-white/5"
              >
                <Code2 size={18} />
                GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-14 flex flex-wrap gap-3"
            >
              {[
                "AWS",
                "Terraform",
                "Docker",
                "Kubernetes",
                "Linux",
                "Automation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* HERO RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">
                    SYSTEM ARCHITECTURE
                  </p>

                  <h2 className="mt-1 text-lg font-medium">
                    Deployment Pipeline
                  </h2>
                </div>

                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["01", "Developer", "Code changes pushed"],
                  ["02", "Git & GitHub", "Version control"],
                  ["03", "CI/CD", "Automated workflow"],
                  ["04", "Infrastructure", "Terraform automation"],
                  ["05", "AWS Cloud", "Scalable deployment"],
                ].map(([number, title, description], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-blue-400/30 hover:bg-blue-400/[0.03]"
                  >
                    <span className="font-mono text-xs text-blue-400">
                      {number}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-sm font-medium">
                        {title}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-500">
                        {description}
                      </p>
                    </div>

                    {index < 4 && (
                      <ArrowDown
                        size={16}
                        className="text-zinc-600"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5 text-xs text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Infrastructure systems operational
              </div>
            </div>
          </motion.div>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-white"
        >
          <ArrowDown
            size={22}
            className="animate-bounce"
          />
        </button>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/[0.06] px-6 py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm tracking-widest text-blue-400">
              01 — ABOUT
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              More than just
              <br />
              infrastructure.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-zinc-300">
              I'm a DevOps and cloud infrastructure enthusiast with a
              background spanning cloud engineering, automation,
              artificial intelligence, machine learning, and software
              development.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              I enjoy understanding how systems work end-to-end — from
              application development and machine learning models to
              cloud infrastructure, automation, security, deployment,
              and reliability.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-3xl font-semibold text-white">
                  10+
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  AWS services explored
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-3xl font-semibold text-white">
                  7
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Featured projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-3xl font-semibold text-white">
                  730
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Internship hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/[0.06] px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-widest text-blue-400">
            02 — SKILLS
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Tools I build with.
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="font-medium text-zinc-200">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-white/[0.06] px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-widest text-blue-400">
            03 — EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Engineering journey.
          </h2>

          <div className="mt-16 space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-medium">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-blue-400">
                      {item.company}
                    </p>

                    <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
                      {item.description}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-sm text-zinc-500">
                    {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-14">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-400">
              03 — PROJECTS
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Things I've built.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              A selection of projects exploring cloud infrastructure, AI,
              machine learning, computer vision, and full-stack development.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex min-h-[430px] flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]"
              >
                {/* Top */}
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-sm text-blue-400">
                    {project.number}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-blue-400/70" />
                </div>

                {/* Project Title */}
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-8 leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:text-white"
                    >
                      {link.label}

                      <span className="text-blue-400 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="border-t border-white/[0.06] px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm tracking-widest text-blue-400">
              05 — EDUCATION
            </p>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <p className="text-sm text-zinc-500">
                2022 — 2026
              </p>

              <h3 className="mt-4 text-2xl font-medium">
                B.E. in Artificial Intelligence & Machine Learning
              </h3>

              <p className="mt-3 text-zinc-500">
                Mysore College of Engineering and Management
              </p>

              <p className="mt-6 text-sm text-blue-400">
                CGPA: 8.4
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm tracking-widest text-blue-400">
              06 — CERTIFICATIONS
            </p>

            <div className="mt-10 space-y-3">
              {certifications.map((certification) => (
                <a
                  key={certification.title}
                  href={certification.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-blue-400/40 hover:bg-white/[0.04]"
                >
                  <span className="text-sm text-zinc-300 transition group-hover:text-white">
                    {certification.title}
                  </span>

                  <span className="text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/[0.06] px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-16">
            <p className="text-sm tracking-widest text-blue-400">
              07 — CONTACT
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
              Let's build something
              <span className="text-zinc-500"> reliable.</span>
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-zinc-500">
              Interested in cloud infrastructure, DevOps, automation, or
              building scalable systems? Feel free to get in touch.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:punitmurali4@gmail.com"
                className="flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
              >
                <Mail size={18} />
                Send me an email
              </a>

              <a
                href="https://github.com/punitm444"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                <Code2 size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/punit-m/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <footer className="flex flex-col justify-between gap-4 py-10 text-sm text-zinc-600 md:flex-row">
            <p>
              © 2026 Punit Murali. Built with Next.js.
            </p>

            <p>
              Cloud • DevOps • Automation
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
