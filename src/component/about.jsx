import React from "react";
import { motion } from "framer-motion";
import {
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiFirebase
} from "react-icons/di";
import {
  SiTailwindcss, SiFramer, SiFigma, SiPostman, SiVercel,
  SiSupabase, SiJest, SiReactrouter, SiVite, SiAxios
} from "react-icons/si";
import { BsFileEarmarkText } from "react-icons/bs";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  // Icons kept true to their tools, everything else muted to fit the page
  const skills = [
    { icon: <DiHtml5 size={26} />, name: "HTML5" },
    { icon: <DiCss3 size={26} />, name: "CSS3" },
    { icon: <DiJavascript1 size={26} />, name: "JavaScript (ES6+)" },
    { icon: <DiReact size={26} />, name: "React" },
    { icon: <SiTailwindcss size={24} />, name: "Tailwind CSS" },
    {
      icon: (
        <svg viewBox="0 0 256 256" className="h-[24px] w-[24px] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M208 40H48a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Zm-24 120H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16Zm0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16Z" />
        </svg>
      ),
      name: "shadcn/ui",
    },
    { icon: <SiFramer size={24} />, name: "Framer Motion" },
    { icon: <SiReactrouter size={24} />, name: "React Router" },
    { icon: <SiVite size={24} />, name: "Vite" },
    { icon: <SiFigma size={24} />, name: "Figma" },
    { icon: <SiPostman size={24} />, name: "Postman" },
    { icon: <SiAxios size={24} />, name: "Axios & Fetch API" },
    // { icon: <BsFileEarmarkText size={24} />, name: "React Hook Form" },
    // { icon: <SiJest size={24} />, name: "Jest + RTL" },
    { icon: <DiGit size={26} />, name: "Git & GitHub" },
    { icon: <SiVercel size={22} />, name: "Vercel" },
    {
      icon: (
        <div className="flex gap-1">
          {/* <DiFirebase size={18} /> */}
          {/* <SiSupabase size={18} /> */}
        </div>
      ),
      // name: "Firebase / Supabase",
    },
  ];

 const stats = [
  { number: "5+", label: "Business Websites Built" },
  { number: "2+", label: "Years Coding" },
  { number: "100%", label: "Responsive Design" },
  { number: "10+", label: "Technologies Used" },
];

  const interests = [
    "Exploring large open-world video games",
    "Writing and reading tech documentation",
    "Traveling around, hunting for good coffee",
  ];

  return (
    <section className="relative min-h-screen bg-[#0C0F13] text-[#ECE9E2] py-24 md:py-32 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-3xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20 pb-10 border-b border-[#20242b]"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#8C6D3F] uppercase">
            About
          </span>
          <h1 className="font-serif text-[40px] md:text-[52px] leading-[1.05] mt-3 text-[#ECE9E2]">
            Know Who I Am
          </h1>
          <p className="text-[#787f8c] text-[14.5px] mt-3 max-w-md leading-relaxed">
            A quick, honest snapshot of my journey, the tools I reach for, and
            what I get up to away from the keyboard.
          </p>
        </motion.div>

        {/* ================= MY STORY ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-12 mb-20"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-[11px] text-[#8C6D3F]">01</span>
              <h2 className="font-serif text-[24px] text-[#ECE9E2]">My Story</h2>
            </div>

            <p className="text-[15px] text-[#9BA0AA] leading-relaxed">
              I'm a web creator who thrives on turning complex problems into
              clean, seamless interfaces. My interest in code started the
              moment I realized I could take something out of my imagination
              and make it work, on screen, for someone else to use.
            </p>

            <p className="text-[14.5px] text-[#787f8c] mt-6 mb-3 uppercase tracking-wider font-mono text-[11px]">
              Outside of code
            </p>
            <ul className="space-y-2.5">
              {interests.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className="text-[14.5px] text-[#B8BCC4] leading-relaxed pl-4 relative"
                >
                  <span className="absolute left-0 top-[9px] w-[6px] h-[1px] bg-[#A47C48]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats — ledger style, no gradient cards */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="border-t border-[#20242b] pt-3 first:border-t-0 first:pt-0 md:border-t md:first:border-t md:first:pt-3"
              >
                <span className="font-serif text-[28px] text-[#ECE9E2] block leading-none">
                  {stat.number}
                </span>
                <span className="font-mono text-[10.5px] text-[#787f8c] uppercase tracking-wider mt-1.5 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= SKILLSET ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="pt-10 border-t border-[#20242b]"
        >
          <motion.div variants={fadeInUp} className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-[11px] text-[#8C6D3F]">02</span>
            <h2 className="font-serif text-[24px] text-[#ECE9E2]">
              Professional Skillset
            </h2>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[14.5px] text-[#787f8c] mb-8">
            Tools and frameworks I reach for to bring structures to life.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col items-center justify-center gap-2.5 py-6 px-2 border border-[#20242b] rounded-lg hover:border-[#8C6D3F] transition-colors duration-300 text-center"
              >
                <span className="text-[#787f8c] group-hover:text-[#A47C48] transition-colors duration-300">
                  {skill.icon}
                </span>
                <span className="text-[11px] font-medium text-[#787f8c] group-hover:text-[#ECE9E2] transition-colors duration-300 leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;