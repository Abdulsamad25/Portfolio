import React from "react";
import CountUp from "react-countup";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 60 },
    { name: "Tailwind CSS", level: 70 },
    { name: "Git", level: 75 },
    { name: "Firebase", level: 60 },
  ];

  return (
    <section
      id="skills"
      className="px-4 py-0 md:py-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 md:mb-10 font-bold text-xl md:text-4xl text-center">
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="gap-8 grid md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-lg">{skill.name}</span>
                <span className="text-blue-400">
                  <CountUp end={skill.level} duration={2} enableScrollSpy />%
                </span>
              </div>
              <div className="bg-gray-700 rounded-full w-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full h-3 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
