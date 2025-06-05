import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Cynosure from "../assets/Cynosure.png";
import Dropnest from "../assets/Dropnest.png";
import Cryptopulse from "../assets/Cryptopulse.png";
import Forever from "../assets/Forever.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DropNest",
      description:
        "A Drop shipping platform that allows user to sell a particular product without having to keep it in stock.",
      image: Dropnest,
      tags: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      liveUrl: "https://drop-nest.netlify.app/",
      githubUrl: "https://github.com/Abdulsamad25/landing-page/",
    },
    {
      id: 2,
      title: "Cynosure",
      description:
        "An architectural company website that showcases the company's portfolio, services, and contact information.",
      image: Cynosure,
      tags: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      liveUrl: "https://cyno-sure.netlify.app/",
      githubUrl: "https://github.com/Abdulsamad25/arch-landing-page",
    },
    // {
    //   id: 3,
    //   title: "Crypto Pulse",
    //   description:
    //     "A cryptocurrency dashboard that provides real-time data on various cryptocurrencies, including price charts and market trends.",
    //   image: Cryptopulse,
    //   tags: [
    //     "React",
    //     "Tailwind CSS",
    //     "Firebase",
    //     "Chart.js",
    //     "Coingecko API",
    //     "Netlify",
    //   ],
    //   liveUrl: "https://crypto-pulsee.netlify.app/",
    //   githubUrl: "https://github.com/Abdulsamad25/crypto-pulse/",
    // },
    {
      id: 3,
      title: "Forever E-commerce",
      description:
        "A full-stack e-commerce application with payment integration using Stripe and Paystack. It includes features like product browsing, cart management, user authentication, and order tracking.",
      image: Forever,
      tags: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "Paystack",
        "Vercel",
        "Netlify",
      ],
      liveUrl: "https://forever-store-app.netlify.app/",
      githubUrl: "https://github.com/Abdulsamad25/E-commerce-app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 px-4 py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 md:mb-12 font-bold text-2xl md:text-4xl text-center">
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-semibold text-blue-400 text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 px-3 py-1 rounded-full text-gray-300 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
