import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 px-4 py-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 font-bold text-2xl md:text-4xl text-center">
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-transparent">
            About Me
          </span>
        </h2>

        <div className="items-center gap-12 grid md:grid-cols-2">
          <div>
            <p className="mb-6 text-gray-300 text-m md:text-lg leading-relaxed">
              I'm a passionate full-stack developer with 2+ years of experience
              creating digital solutions that make a difference. I love turning
              complex problems into simple, beautiful designs.
            </p>
            <p className="mb-6 text-gray-300 text-m md:text-lg leading-relaxed">
              When I'm not coding, you'll find me playing video games, watching
              anime, movies or series.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-800 px-4 py-2 rounded-full text-white text-sm">
                Problem Solver
              </span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-white text-sm">
                Innovation Driven
              </span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-white text-sm">
                Team Player
              </span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-white text-sm">
                Willing Learner
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="mb-6 font-semibold text-blue-400 text-xl">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="text-white">
                  <CountUp
                    end={2}
                    duration={5}
                    enableScrollSpy
                    suffix="+"
                    className="text-white"
                  /> 
                   Years
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Projects Completed</span>
                <CountUp
                  end={10}
                  duration={5}
                  enableScrollSpy
                  suffix="+"
                  className="text-white"
                />
              </div>
              {/* <div className="flex justify-between">
                <span className="text-gray-400">Happy Clients</span>
                <CountUp end={25} duration={2} enableScrollSpy scrollSpyOnce suffix="+" className='text-white' />
              </div> */}
              <div className="flex justify-between">
                <span className="text-gray-400">Location</span>
                <span className="text-white">Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
