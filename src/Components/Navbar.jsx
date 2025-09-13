import React, { useState } from "react";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="w-full h-24 fixed top-0 px-5 sm:px-20 py-5 flex items-center justify-between border-b-2 sm:border-b border-[#081F2D] z-40"
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
      {/* Desktop Navbar */}
      <div className="sm:flex items-center gap-10 text-base navlinks hidden">
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

      <button
        className="block sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <RiCloseFill size={35} color="#32F5A9" />
        ) : (
          <RiMenu4Fill size={35} color="#32F5A9" />
        )}
      </button>

      {/* Mobile Navbar */}
      <div
        className={`sm:hidden  ${
          menuOpen
            ? "w-full absolute top-24 h-screen pt-20 z-50 flex flex-col items-center gap-10 text-base navlinks transition-all ease-in-out"
            : "hidden"
        }`}
        style={{ background: "rgb(4 6 31 / var(--tw-bg-opacity, 1))" }}
      >
        <a
          href="#home"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => {
            setActiveLink("home");
            setMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => {
            setActiveLink("about");
            setMenuOpen(false);
          }}
        >
          About
        </a>
        <a
          href="#skills"
          className={activeLink === "skills" ? "active" : ""}
          onClick={() => {
            setActiveLink("skills");
            setMenuOpen(false);
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => {
            setActiveLink("projects");
            setMenuOpen(false);
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => {
            setActiveLink("contact");
            setMenuOpen(false);
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
