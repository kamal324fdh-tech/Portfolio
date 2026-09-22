import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", index: "01", path: "/home" },
    { name: "About", index: "02", path: "/about" },
    { name: "Projects", index: "03", path: "/projects" },
    { name: "Resume", index: "04", path: "/resume" },
    { name: "Contact", index: "05", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0C0F13]/80 backdrop-blur-md border-b border-[#20242b] text-[#ECE9E2] transition-all duration-300 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Wordmark */}
        <Link
          to="/home"
          aria-label="A. Kamaldeen home"
          className="font-mono text-[14px] tracking-[0.02em] text-[#ECE9E2] transition-colors duration-300 hover:text-[#A47C48] sm:text-[15px]"
        >
          <span className="text-[#8C6D3F]">&lt;</span>{" "}
          <span>A. Kamaldeen</span>{" "}
          <span className="text-[#8C6D3F]">/&gt;</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative py-2 flex items-center gap-2 text-[13px] font-medium text-[#9BA0AA] hover:text-[#ECE9E2] transition-colors duration-200"
              >
                <span className="font-mono text-[10px] text-[#8C6D3F]">
                  {link.index}
                </span>
                {link.name}

                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-[1px] left-0 w-full h-[1px] bg-[#A47C48]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl p-2 focus:outline-none text-[#ECE9E2] hover:text-[#A47C48] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0C0F13] border-b border-[#20242b] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 py-3 border-b border-[#181b21] transition-colors duration-200 ${
                        isActive ? "text-[#A47C48]" : "text-[#9BA0AA] hover:text-[#ECE9E2]"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-[#8C6D3F]">
                        {link.index}
                      </span>
                      <span className="text-[15px] font-medium">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;