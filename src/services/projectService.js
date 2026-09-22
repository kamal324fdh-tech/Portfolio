import apexBarberImg from "../assets/images/apex-barber.png";
import solmarResturantImg from "../assets/images/solmar-resturant.png";
import meridianDentalImg from "../assets/images/meridian-dental.png";
import lagosPrimeEstatesImg from "../assets/images/lagosPrimeEstates.png";
import ironDistrictFitnessImg from "../assets/images/iron-district-fitness.png";

const fallbackProjects = [
  {
    title: "Apex Barber Studio Luxury Barbershop Website",
    description: "A modern, responsive business website built with React, Tailwind CSS, and Framer Motion, featuring elegant animations, premium UI design, and a mobile-first experience.",
    tags: ["React", "Tailwind CSS", "shadcn/ui"],
    githubLink: "https://github.com/kamal324fdh-tech/ApexBaber",
    liveLink: "https://apexbaber.netlify.app",
    image: apexBarberImg,
  },
  {
    title: "Solmar Lagos Restaurant",
    description: "A premium restaurant website built with React, Tailwind CSS, and Framer Motion, featuring a modern design, smooth animations, and a fully responsive user experience.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com/kamal324fdh-tech/Solmar-resturant-",
    liveLink: "https://solmar-lagos.netlify.app",
    image: solmarResturantImg,
  },
  {
    title: "Meridian Dental",
    description: "A modern dental clinic website built with React, Tailwind CSS, and Framer Motion, featuring a clean design, smooth animations, and a fully responsive user experience.",
    tags: ["React", "Tailwind CSS", "shadcn/ui"],
    githubLink: "https://github.com/kamal8-eng/meridian-dental",
    liveLink: "https://meridiandentals.netlify.app/",
    image: meridianDentalImg,
  },
  {
    title: "Lagos Prime Estates",
    description: "A modern real estate website built with React, Tailwind CSS, and Framer Motion, featuring a clean design, smooth animations, and a fully responsive user experience.",
    tags: ["React", "Tailwind CSS", "shadcn/ui"],
    githubLink: "https://github.com/kamal324fdh-tech/Lagos-Prime-Estate",
    liveLink: "https://lagoprimeestate.netlify.app",
    image: lagosPrimeEstatesImg,
  },
  {
    title: "Iron District Fitness",
    description: "A modern fitness website built with React, Tailwind CSS, and Framer Motion, featuring a clean design, smooth animations, and a fully responsive user experience.",
    tags: ["React", "Tailwind CSS", "shadcn/ui"],
    githubLink: "https://github.com/kamal324fdh-tech/Iron-District-Fitness",
    liveLink: "https://iron-district-fitness.netlify.app",
    image: ironDistrictFitnessImg,
  },
];

const BIN_ID = "6a9961abf5f4af5e2965316d "; 

export async function getProjects() {
  try {
    console.log(" Fetching projects from JSONBin...");
    console.log(" BIN_ID:", BIN_ID);
    
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`);

    console.log(" Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(" Data received:", data);
    
    if (data.record && data.record.projects) {
      console.log(` Found ${data.record.projects.length} projects in JSONBin`);
      return data.record.projects;
    }
    
    console.warn(" No projects found in JSONBin, using fallback");
    return fallbackProjects;
  } catch (error) {
    console.error(" Error fetching from JSONBin:", error.message);
    console.warn(" No projects found in JSONBin, using fallback");
    return fallbackProjects;
  }
}