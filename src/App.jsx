import React, { useState } from "react";
import HomeLogo from "./assets/LandingImage.webp";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LuSquareArrowUp } from "react-icons/lu";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      {/* Home Landing Page */}
      <section
        id="home"
        className="h-screen w-full px-5 sm:px-20 flex items-center justify-center border-b-2 border-[#32F5A9]/25"
      >
        {/* Navbar */}
        <Navbar />

        {/* Home Page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center gap-10 mt-12">
          <div className="col home-title">
            <p className="font-bold">Hi, I'm </p>
            <h1 className="text-primary tracking-wider my-2 sm:my-1">
              PRABANJAN
            </h1>
            <h4>Data Analyst | Turning Data into Insights</h4>
            <p className="leading-7 tracking-wider text-neutral-300 mt-5">
              Passionate about transforming raw data into actionable business
              insights using{" "}
              <span className="text-white font-bold">
                SQL, Python, Excel, Tableau and Power BI
              </span>
              . Let's uncover the story behind the your numbers.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#projects" className="btn bg-primary text-[#081F2D]">
                Explore My Work
              </a>
              <a href="#contact" className="btn hover:bg-[#32F5A9]/10">
                Let's Connect
              </a>
            </div>
          </div>
          <div className="sm:col">
            <img src={HomeLogo} alt="" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen w-full px-5 sm:px-20 pt-26 pb-10 border-b-2 border-[#32F5A9]/25"
      >
        <h3 className="tracking-wider">
          ABOUT <span className="text-primary">ME</span>
        </h3>
        <div className="flex flex-col items-center justify-center gap-4 mt-5 mb-4">
          <p className="tracking-wider leading-8 text-neutral-300">
            I'm an aspiring <b className="text-white">Data Analyst</b> with a
            strong passion for solving real-world problems using data. Though I
            come from a different background, I've dedicated the last few months
            to mastering data analytics tools and techniques through hands-on
            projects, self-learning through Internet and help of ChatGPT.
          </p>

          <p className="tracking-wider leading-8 text-neutral-300">
            My strength lies in breaking down complex datasets, cleaning and
            transforming them, and drawing insights that helps make informed
            business decisions. I've worked on projects using{" "}
            <b className="text-white">
              SQL, Python, Excel, Tableau and Power BI
            </b>
            , and I'm continuously learning to stay up-to-date with the
            industry.
          </p>

          <p className="tracking-wider leading-8 text-neutral-300">
            I may be new to the field, but I bring a strong work ethic,
            curiosity, and a problem-solving mindset -- all essential traits for
            success in Data Analytics.
          </p>
        </div>
        <div className="flex flex-col-reverse gap-5 mt-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href=""
            download="Prabanjan Resume"
            target="_blank"
            className="btn text-center bg-primary text-[#081F2D]"
          >
            Download CV
          </a>
          <div className="">
            <h4>
              <span className="text-primary">EDUCATION: </span>
              <span className="tracking-wider">Bachelor of Engineering</span>
            </h4>
            <p className="text-sm text-neutral-400 mt-2">
              PSV Engineering and Technology, Krishnagiri - YEAR: 2018
            </p>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <Skills />

      {/* Project section */}
      <Projects />

      {/* Contact section */}
      <section
        id="contact"
        className="relative h-[100vh] w-full pt-26 border-b-2 border-[#32F5A9]/25"
      >
        <div className="px-5 sm:px-20">
          <h3 className="tracking-wider mt-10">
            CONTACT <span className="text-primary">ME</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-32 sm:mt-7">
            <div className="col flex items-center">
              <p className="text-neutral-300 leading-8 tracking-wider">
                Let's connect and talk data! Whether it's about collaborating on
                a project, a job opportunity, or discussing datasets -- i'd love
                to hear from you...
              </p>
            </div>
            <div className="col flex flex-col gap-4 sm:gap-8  justify-center">
              <h4 className="flex items-center gap-3">
                <MdEmail size={35} color="#32F5A9" />{" "}
                <span className="text-base text-neutral-300">
                  imprabanjan@gmail.com
                </span>
              </h4>
              <h4 className="flex items-center gap-3">
                <FaGithub size={35} color="#32F5A9" />{" "}
                <span className="text-base text-neutral-300">
                  github.com/prabanjan-analyst
                </span>
              </h4>
              <h4 className="flex items-center gap-3">
                <FaLinkedin size={35} color="#32F5A9" />
                <span className="text-base text-neutral-300">
                  github.com/prabanjan-analyst
                </span>
              </h4>
              <h4 className="flex items-center gap-3">
                <IoCall size={35} color="#32F5A9" />
                <span className="text-base text-neutral-300">
                  {" "}
                  +91 9487684839
                </span>
              </h4>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-0 min-w-full py-5 sm:py-3 bg-secondary flex items-center">
          <p className="w-full text-xs sm:text-sm text-neutral-300 tracking-widest leading-7 text-center">
            &copy; {new Date().getFullYear()} |{" "}
            <span className="text-primary">PRABANJAN</span> The Analyst | Made
            with Curiosity, Caffeine, and a Love for clean data.{" "}
          </p>

          <a href="#home" title="Back to Top">
            <LuSquareArrowUp size={30} color="#32F5A9" className="mr-10" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
