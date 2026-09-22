import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

function Submission() {
  return (
    <section className="relative flex min-h-screen items-center bg-[#0C0F13] px-5 py-24 text-[#ECE9E2] sm:px-6 md:py-32 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-2xl border-t border-[#8C6D3F] pt-8"
      >
        <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#8C6D3F] text-[#A47C48]">
          <FiCheck size={19} aria-hidden="true" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C6D3F]">
          Message received
        </span>
        <h1 className="mt-3 max-w-lg font-serif text-[42px] leading-[1.05] text-[#ECE9E2] sm:text-[58px]">
          Thanks for reaching out.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#9BA0AA]">
          Your message is on its way. I&apos;ll review it and get back to you
          soon.
        </p>
        <Link
          to="/home"
          className="group mt-9 inline-flex items-center gap-2 border-b border-[#8C6D3F] pb-1 text-[13.5px] font-medium text-[#ECE9E2] transition-colors duration-300 hover:text-[#A47C48]"
        >
          <FiArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to portfolio
        </Link>
      </motion.div>
    </section>
  );
}

export default Submission;
