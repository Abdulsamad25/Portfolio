import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Samad from "../assets/Abdulsamad.jpg";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="flex justify-center items-center bg-gray-900 px-4 pt-20 min-h-screen"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 p-2 rounded-full w-32 h-32">
            <div className="flex justify-center items-center bg-gray-900 rounded-full w-full h-full">
              <span className="font-bold text-4xl">
                <img
                  src={Samad}
                  alt="Abdulsamad"
                  className="p-2 rounded-full w-full h-full object-cover"
                />
              </span>
            </div>
          </div>
        </div>

        <h1 className="mb-1 font-bold text-2xl md:text-3xl">
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent">
            Yahaya Abdulsamad
          </span>
        </h1>

        <p className="mb-8 text-gray-300 text-lg md:text-xl">
          Front-End Developer
        </p>

        <p className="mx-auto mb-12 max-w-2xl text-gray-400 text-lg leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered
          digital experiences. I bring ideas to life through clean code.
        </p>

        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-blue-600 hover:from-blue-700 to-purple-600 hover:to-purple-700 px-8 py-3 rounded-full text-white hover:scale-105 transition-all cursor-pointer transform"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-full text-white hover:text-blue-400 transition-all cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-3 mb-5">
          <a
            href="https://github.com/Abdulsamad25"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yahaya-abdulsamad-051b1b306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:samadolalekan15@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
