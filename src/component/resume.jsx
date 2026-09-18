import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function Resume() {
  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const codingJourney = [
    {
      period: "Recent",
      title: "Frontend Development Trainee",
      platform: "MalHub — Ilorin, Kwara State",
      description:
        "Began my coding journey in an intensive tech hub environment designed for rapid skill acquisition. Focused heavily on mastering frontend fundamentals, UI recreation, and moving from zero experience to building functional code.",
      highlights: [
        "Semantic HTML5, CSS3, and modern JavaScript (ES6+)",
        "Responsive, mobile-first layouts with Tailwind CSS",
        "Collaborative version control using Git and GitHub",
      ],
    },
    {
      period: "Ongoing",
      title: "Independent Portfolio Development",
      platform: "Personal Sandbox",
      description:
        "Actively bridging the gap between having no formal industry experience and entering the tech space, by building and deploying open-source personal projects from scratch.",
      highlights: [
        "Polished UI composition with shadcn/ui and custom styling",
        "Dynamic state flow using React and the modern ecosystem",
        "Deploying and hosting live web solutions via Vercel",
      ],
    },
  ];

  const education = [
    {
      period: "Present",
      title: "B.Sc. Computer Science",
      platform: "Kwara State University (KWASU)",
      description:
        "Gained admission into the Department of Computer Science. Currently engaging with foundational theoretical systems, mathematical computation, and structured algorithmic workflows.",
      highlights: [
        "Algorithmic thinking & computational logic",
        "Data structures & systems programming",
        "Software architecture & database principles",
      ],
    },
  ];

  const Entry = ({ item, accent }) => (
    <motion.div
      variants={fadeIn}
      className="grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] gap-x-6 py-9 first:pt-0 border-t border-[#20242b] first:border-t-0"
    >
      <div className="pt-1">
        <span className="font-mono text-[11px] tracking-wider text-[#787f8c] uppercase">
          {item.period}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-serif text-[21px] leading-snug text-[#ECE9E2]">
            {item.title}
          </h3>
          <p
            className="text-[13px] mt-0.5 tracking-wide"
            style={{ color: accent }}
          >
            {item.platform}
          </p>
        </div>

        <p className="text-[14.5px] leading-relaxed text-[#9BA0AA] max-w-xl">
          {item.description}
        </p>

        <ul className="pt-1 space-y-1.5">
          {item.highlights.map((h, i) => (
            <li
              key={i}
              className="text-[13px] text-[#B8BCC4] leading-relaxed pl-4 relative"
            >
              <span
                className="absolute left-0 top-[9px] w-[6px] h-[1px]"
                style={{ backgroundColor: accent }}
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen bg-[#0C0F13] text-[#ECE9E2] py-24 md:py-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-3xl mx-auto px-6 font-sans">
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 pb-10 border-b border-[#20242b]"
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#8C6D3F] uppercase">
              Curriculum Vitae — 2026
            </span>
            <h1 className="font-serif text-[40px] md:text-[52px] leading-[1.05] mt-3 text-[#ECE9E2]">
              Career Timeline
            </h1>
            <p className="text-[#787f8c] text-[14.5px] mt-3 max-w-md leading-relaxed">
              A straightforward account of my training, education, and the
              stack I'm building toward — no embellishment, just the record.
            </p>
          </div>

          <a
            href="/My_Resume.pdf"
            download="My_Resume.pdf"
            className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-[#ECE9E2] border-b border-[#8C6D3F] pb-1 whitespace-nowrap self-start md:self-end hover:text-[#8C6D3F] transition-colors duration-300"
          >
            Download Resume
            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* ================= TECHNICAL TRAINING ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-[11px] text-[#8C6D3F]">01</span>
            <h2 className="font-serif text-[22px] text-[#ECE9E2]">
              Technical Training
            </h2>
          </div>
          <div>
            {codingJourney.map((item, idx) => (
              <Entry item={item} accent="#A47C48" key={idx} />
            ))}
          </div>
        </motion.div>

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-[11px] text-[#8C6D3F]">02</span>
            <h2 className="font-serif text-[22px] text-[#ECE9E2]">
              Education
            </h2>
          </div>
          <div>
            {education.map((item, idx) => (
              <Entry item={item} accent="#7C8A99" key={idx} />
            ))}
          </div>
        </motion.div>

        {/* ================= STRATEGY / PHILOSOPHY ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="pt-10 border-t border-[#20242b]"
        >
          <blockquote className="pl-6 border-l-2 border-[#8C6D3F] max-w-xl">
            <p className="font-serif italic text-[18px] leading-relaxed text-[#D8D4CB]">
              "I don't yet have traditional corporate experience — I make up
              for it with intent, daily practice, and close attention to the
              tools the work actually calls for."
            </p>
            <footer className="mt-3 font-mono text-[11px] tracking-wider text-[#787f8c] uppercase not-italic">
              Working Philosophy
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;