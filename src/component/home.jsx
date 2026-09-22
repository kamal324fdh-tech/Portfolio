import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const socials = [
    { icon: <AiFillGithub size={18} />, label: "GitHub", url: "https://github.com/kamal324fdh-tech" },
    { icon: <FaLinkedinIn size={16} />, label: "LinkedIn", url: "https://www.linkedin.com/in/alate-kamaldeen-bb86ab435/" },
    { icon: <AiOutlineTwitter size={18} />, label: "Twitter", url: "https://x.com/Kamal172195" },
  ];

  return (
    <section className="relative min-h-screen bg-[#0C0F13] text-[#ECE9E2] font-sans overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .Typewriter__cursor { color: #A47C48; }
      `}</style>

      {/* Faint ambient signature — a single slow-drifting line, not a glow blob */}
      <motion.div
        aria-hidden
        className="absolute -top-24 right-[-8%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(164,124,72,0.08) 0%, rgba(164,124,72,0) 70%)",
        }}
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* ================= HERO ================= */}
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-32 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.span
            variants={fadeInUp}
            className="font-mono text-[11px] tracking-[0.2em] text-[#8C6D3F] uppercase"
          >
            Portfolio — 2026
          </motion.span>

          <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-5">
            <span className="w-8 h-[1px] bg-[#8C6D3F]" />
            <span className="text-[15px] text-[#9BA0AA]">Hi there, I'm</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-serif text-[44px] md:text-[68px] leading-[1.05] mt-3 text-[#ECE9E2]"
          >
            Alate Kamaldeen
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="font-mono text-[17px] md:text-[19px] text-[#A47C48] mt-5 min-h-[32px]"
          >
            <Typewriter
              options={{
                strings: [
            "Frontend Developer",
             "React Developer",
             "Frontend Engineer",
             "JavaScript Developer",
             "UI Engineer"
               ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 55,
              }}
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-[15px] text-[#9BA0AA] leading-relaxed max-w-md mt-6"
          >
            I build clean, responsive interfaces and turn ideas into working
            products — currently sharpening my craft between MalHub and KWASU.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 mt-9">
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-[#ECE9E2] border-b border-[#8C6D3F] pb-1 hover:text-[#8C6D3F] transition-colors duration-300"
            >
              View My Work
              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#787f8c] border-b border-transparent hover:border-[#787f8c] hover:text-[#B8BCC4] transition-colors duration-300 pb-1"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="max-w-3xl mx-auto px-6 py-20 border-t border-[#20242b] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_140px] gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-baseline gap-3 mb-5">
              <span className="font-mono text-[11px] text-[#8C6D3F]">01</span>
              <h2 className="font-serif text-[26px] text-[#ECE9E2]">
                Let Me Introduce Myself
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[15px] text-[#9BA0AA] leading-relaxed">
              I fell in love with programming because turning ideas into
              reality through lines of code feels like a small kind of magic.
              Every project is a chance to solve a real problem and build
              something people actually enjoy using.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-[15px] text-[#9BA0AA] leading-relaxed mt-4">
              I specialize in{" "}
              <span className="text-[#D8D4CB] font-medium">
                JavaScript, React.js, Tailwind CSS, HTML5, and CSS3
              </span>
              , building clean, scalable, high-performance interfaces with a
              strong focus on user experience.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-[15px] text-[#9BA0AA] leading-relaxed mt-4">
              My focus is on{" "}
              <span className="text-[#D8D4CB] font-medium">
                sleek, interactive, responsive, and accessible web applications
              </span>{" "}
              — polished code that holds up across every device it's used on.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-[15px] text-[#9BA0AA] leading-relaxed mt-4">
              I'm currently{" "}
              <span className="text-[#D8D4CB] font-medium">
                open to frontend roles, freelance projects, and collaborations
              </span>{" "}
              where I can contribute, keep learning, and help build something
              worth using.
            </motion.p>
          </motion.div>

          {/* Monogram in place of the emoji avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="w-32 h-32 rounded-full border border-[#8C6D3F] flex justify-center items-center"
            >
              <span className="font-serif text-[34px] text-[#A47C48]">AK</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= SOCIALS ================= */}
      <div className="max-w-3xl mx-auto px-6 py-20 border-t border-[#20242b] relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-[11px] text-[#8C6D3F]">02</span>
            <h2 className="font-serif text-[26px] text-[#ECE9E2]">Find Me On</h2>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-[14.5px] text-[#787f8c] mb-8">
            Feel free to connect — I'm generally quick to reply.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#20242b] text-[#9BA0AA] hover:border-[#8C6D3F] hover:text-[#ECE9E2] transition-colors duration-300"
              >
                {social.icon}
                <span className="text-[12.5px] font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;