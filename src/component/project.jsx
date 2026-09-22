import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { getProjects } from "../services/projectService";

// Image imports (keep these)
import apexBarberImg from "../assets/images/apex-barber.png";
import solmarResturantImg from "../assets/images/solmar-resturant.png";
import meridianDentalImg from "../assets/images/meridian-dental.png";
import lagosPrimeEstatesImg from "../assets/images/lagosPrimeEstates.png";
import ironDistrictFitnessImg from "../assets/images/iron-district-fitness.png";

// Fallback images by project title
const fallbackImages = {
  "Apex Barber Studio Luxury Barbershop Website": apexBarberImg,
  "Solmar Lagos Restaurant": solmarResturantImg,
  "Meridian Dental": meridianDentalImg,
  "Lagos Prime Estates": lagosPrimeEstatesImg,
  "Iron District Fitness": ironDistrictFitnessImg,
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      
      // Add images to projects
      const projectsWithImages = data.map(project => ({
        ...project,
        image: fallbackImages[project.title] || apexBarberImg,
      }));

      setProjects(projectsWithImages);
    } catch (error) {
      console.error('Failed to load projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="relative min-h-screen bg-[#0C0F13] text-[#ECE9E2] py-24 md:py-32 font-sans">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-[#787f8c]">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative min-h-screen bg-[#0C0F13] text-[#ECE9E2] py-24 md:py-32 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 pb-10 border-b border-[#20242b] max-w-2xl"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#8C6D3F] uppercase">
            Selected Work
          </span>
          <h1 className="font-serif text-[40px] md:text-[52px] leading-[1.05] mt-3 text-[#ECE9E2]">
            Recent Projects
          </h1>
          <p className="text-[#787f8c] text-[14.5px] mt-3 leading-relaxed">
            A showcase of things I've built, experimented with, and shipped.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex flex-col group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] w-full border border-[#20242b] group-hover:border-[#8C6D3F] transition-colors duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
                  className="w-full h-full object-cover grayscale-[35%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-grow pt-5 space-y-3">
                <h3 className="font-serif text-[20px] text-[#ECE9E2] group-hover:text-[#A47C48] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-[13.5px] text-[#9BA0AA] leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-1">
                  {project.tags && project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-mono text-[10.5px] uppercase tracking-wide text-[#787f8c]"
                    >
                      {tag}
                      {tagIdx < project.tags.length - 1 && (
                        <span className="text-[#3a4048] ml-3">/</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4 mt-2 border-t border-[#20242b]">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#787f8c] hover:text-[#ECE9E2] transition-colors duration-300"
                  >
                    <FiGithub size={14} /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#787f8c] hover:text-[#A47C48] transition-colors duration-300 ml-auto"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;