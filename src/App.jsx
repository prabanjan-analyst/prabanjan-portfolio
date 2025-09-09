import React, { useState } from "react";
import HomeLogo from "./assets/LandingImage.webp";

import { TbFileTypeSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiGoogleanalytics, SiTableau } from "react-icons/si";
import { BsClipboard2DataFill, BsDatabaseFillCheck } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LuSquareArrowUp } from "react-icons/lu";

const App = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div>
      {/* Home Landing Page */}
      <section
        id="home"
        className="h-screen w-full px-20 flex items-center justify-center border-b-2 border-[#32F5A9]/25"
      >
        {/* Navbar */}
        <div
          className="w-full h-24 fixed top-0 px-20 py-5 flex items-center justify-between border-b border-[#081F2D] z-40"
          style={{ background: "rgb(4 6 31 / var(--tw-bg-opacity, 1))" }}
        >
          <h4>
            <span
              className="text-primary tracking-wider"
              style={{ fontFamily: "Underdog" }}
            >
              PRABANJAN
            </span>{" "}
            The Analyst
          </h4>
          <div className="flex items-center gap-10 text-base navlinks">
            <a
              href="#home"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => setActiveLink("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => setActiveLink("about")}
            >
              About
            </a>
            <a
              href="#skills"
              className={activeLink === "skills" ? "active" : ""}
              onClick={() => setActiveLink("skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={activeLink === "projects" ? "active" : ""}
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Home Page */}
        <div className="grid grid-cols-2 items-center gap-10 mt-12">
          <div className="col home-title">
            <p className="font-bold">Hi, I'm </p>
            <h1 className="text-primary tracking-wider">PRABANJAN</h1>
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
          <div className="col">
            <img src={HomeLogo} alt="" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen w-full px-20 pt-26 pb-10 border-b-2 border-[#32F5A9]/25"
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
        <div className="flex items-center justify-between">
          <a
            href=""
            download="Prabanjan Resume"
            target="_blank"
            className="btn bg-primary text-[#081F2D]"
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
      <section
        id="skills"
        className="h-screen w-full px-20 pt-26 pb-10 border-b-2 border-[#32F5A9]/25"
      >
        <h3 className="tracking-wider">
          CORE <span className="text-primary">SKILLS</span>
        </h3>

        <div className="grid grid-cols-4 gap-6 mt-10">
          <div className="col card">
            <div className="flex items-center justify-between">
              <h3>SQL</h3>
              <TbFileTypeSql size={40} color="#32F5A9" />
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Joins, Subqueries, CTE's
            </p>
          </div>

          <div className="col card">
            <div className="flex items-center justify-between">
              <h3>Python</h3>
              <FaPython size={40} color="#32F5A9" />
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Pandas, Numpy, Matplotlib
            </p>
          </div>

          <div className="col card">
            <div className="flex items-center justify-between">
              <h3>Excel</h3>
              <RiFileExcel2Fill size={40} color="#32F5A9" />
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Pivot Tables, Dashboards, Formulas
            </p>
          </div>

          <div className="col card">
            <div className="flex items-center justify-between">
              <h3>Power BI</h3>
              <SiGoogleanalytics size={40} color="#32F5A9" />
            </div>
            <p className="text-sm text-neutral-400 mt-2">DAX, Data Modeling</p>
          </div>

          <div className="col card">
            <div className="flex items-center justify-between">
              <h3>Tableau</h3>
              <SiTableau size={40} color="#32F5A9" />
            </div>
            <p className="text-sm text-neutral-400 mt-2">Joins, Dashboards</p>
          </div>

          <div className="col card">
            <div className="flex items-center justify-between">
              <h3>EDA</h3>
              <BsClipboard2DataFill size={40} color="#32F5A9" />
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Exploratory Data Analysis
            </p>
          </div>

          <div className="col card">
            <div className="flex items-center justify-between">
              <h3>Data</h3>
              <BsDatabaseFillCheck size={40} color="#32F5A9" />
            </div>
            <p className="text-sm text-neutral-400 mt-2">
              Data Cleaning & Data Wrangling
            </p>
          </div>
        </div>
      </section>

      {/* Project section */}
      <section
        id="projects"
        className="h-screen w-full px-20 pt-26 pb-10 border-b-2 border-[#32F5A9]/25"
      >
        <h3 className="tracking-wider">
          PERSONAL <span className="text-primary">PROJECTS</span>
        </h3>

        <div className="grid grid-cols-3 gap-6 mt-5">
          {/* Project 1 */}
          <div className="col card">
            <h4 className="!text-xl">Sales Promotion Strategies</h4>
            <div className="flex items-center gap-4 mt-4">
              <RiFileExcel2Fill size={25} color="#32F5A9" />
              <TbFileTypeSql size={25} color="#32F5A9" />
              <SiTableau size={25} color="#32F5A9" />
            </div>
            <ul className="text-sm text-neutral-400 mt-4 list-disc pl-5 space-y-1">
              <li>
                This is a research based on Data Analysis Project in which we
                try to analyze datasets of customers.
              </li>
              <li>
                We have would be analyzing few aspects such as sales and cost.
              </li>
              <li>
                Company can make important decisions for sales promotion
                strategies within the company and manage the quality of
                customers in order to enhance the business of the company.
              </li>

              <li>
                This insight will also help to increase the profit to company.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="col card overflow-hidden">
            <h4 className="!text-xl">COVID-19 Death-Analysis</h4>
            <div className="flex items-center gap-4 mt-4">
              <TbFileTypeSql size={25} color="#32F5A9" />
              <SiTableau size={25} color="#32F5A9" />
            </div>
            <ul className="text-sm text-neutral-400 mt-4 list-disc pl-5 space-y-1">
              <li>
                Collected and cleaned real-world COVID-19 datasets for deaths by
                country
              </li>
              <li>
                Performed Exploratory data analysis (EDA) to identify Death
                count by the continent and mortality rates
              </li>
              <li>
                Visualized insights using bar charts, line graphs and heatmaps
                to show death spikes and risk factors, countries with high
                infection rate compared to the population.
              </li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="col card">
            <h4 className="!text-xl">PIZZA Sales-Analysis </h4>
            <div className="flex items-center gap-4 mt-4">
              <TbFileTypeSql size={25} color="#32F5A9" />
              <SiGoogleanalytics size={22} color="#32F5A9" />
            </div>
            <ul className="text-sm text-neutral-400 mt-4 list-disc pl-5 space-y-1">
              <li>
                Cleaned and organized raw pizza sales data using Excel and Power
                Query.
              </li>
              <li>
                Analysed sales performance by pizza type, size, time of day and
                day of the week.
              </li>
              <li>
                Identified best-selling pizzas, total revenue, daily order
                count, monthly order count, sales by category and sales by size
                and Top 5 selling and Worst 5 selling pizzas by quantity.
              </li>

              <li>
                Visualized insights using bar charts, gauge and using cards by
                showing the count and quantity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact section */}

      <section
        id="contact"
        className="relative h-[100vh] w-full pt-26 border-b-2 border-[#32F5A9]/25"
      >
        <div className="px-20">
          <h3 className="tracking-wider mt-10">
            CONTACT <span className="text-primary">ME</span>
          </h3>

          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="col flex items-center">
              <p className="text-neutral-300 leading-8 tracking-wider">
                Let's connect and talk data! Whether it's about collaborating on
                a project, a job opportunity, or discussing datasets -- i'd love
                to hear from you...
              </p>
            </div>
            <div className="col flex flex-col gap-8  justify-center">
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
        <div className="absolute bottom-0 min-w-full py-3 bg-secondary flex items-center">
          <p className="w-full text-sm text-neutral-300 tracking-widest text-center">
            &copy; 2025 | <span className="text-primary">PRABANJAN</span> The
            Analyst | Made with Curiosity, Caffeine, and a Love for clean data.{" "}
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
