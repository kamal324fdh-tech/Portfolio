import React, { useState } from "react";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xppwdoql", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          result?.errors?.[0]?.message ||
            "Your message could not be sent. Please try again."
        );
      }

      navigate("/submission-success");
    } catch (error) {
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0C0F13] px-5 py-24 text-[#ECE9E2] sm:px-6 md:py-32 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-14 border-b border-[#20242b] pb-10"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C6D3F]">
            Contact
          </span>
          <h1 className="mt-3 font-serif text-[40px] leading-[1.05] text-[#ECE9E2] sm:text-[52px]">
            Let&apos;s Work Together
          </h1>
          <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-[#787f8c]">
            Tell me a little about what you&apos;re building, and I&apos;ll get back
            to you as soon as I can.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-[#787f8c]">
                Prefer a quick chat?
              </p>
              <a
                href="https://wa.me/2349128418599"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex max-w-full items-center gap-2 border-b border-[#8C6D3F] pb-1 text-[13.5px] font-medium text-[#ECE9E2] transition-colors duration-300 hover:text-[#A47C48]"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                <span>DM on WhatsApp</span>
                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-[#787f8c]">
                Send a message
              </p>
              <p className="flex items-center gap-2 text-[13.5px] text-[#9BA0AA]">
                <FiMail size={15} aria-hidden="true" />
                I&apos;m open to roles, freelance work, and collaborations.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#787f8c]">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full border-b border-[#303640] bg-transparent px-0 py-3 text-[14px] text-[#ECE9E2] outline-none transition-colors placeholder:text-[#555d68] focus:border-[#A47C48]"
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-2">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#787f8c]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full border-b border-[#303640] bg-transparent px-0 py-3 text-[14px] text-[#ECE9E2] outline-none transition-colors placeholder:text-[#555d68] focus:border-[#A47C48]"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#787f8c]">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                required
                className="w-full border-b border-[#303640] bg-transparent px-0 py-3 text-[14px] text-[#ECE9E2] outline-none transition-colors placeholder:text-[#555d68] focus:border-[#A47C48]"
                placeholder="How can I help?"
              />
            </label>

            <label className="block space-y-2">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#787f8c]">
                Message
              </span>
              <textarea
                name="message"
                rows="6"
                required
                className="w-full resize-y border-b border-[#303640] bg-transparent px-0 py-3 text-[14px] leading-relaxed text-[#ECE9E2] outline-none transition-colors placeholder:text-[#555d68] focus:border-[#A47C48]"
                placeholder="Tell me about your project..."
              />
            </label>

            {errorMessage && (
              <p
                role="alert"
                className="border border-[#7f3940] bg-[#29171b] px-4 py-3 text-[13px] leading-relaxed text-[#f0a6aa]"
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 border-b border-[#8C6D3F] pb-1 text-[13.5px] font-medium text-[#ECE9E2] transition-colors duration-300 hover:text-[#A47C48] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
