import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen w-full px-5 sm:px-20 pt-26 pb-10 border-b-2 border-[#32F5A9]/25"
    >
      <h3 className="tracking-wider">
        CORE <span className="text-primary">SKILLS</span>
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
        {skills.map((skill) => {
          return (
            <div className="col card" key={skill.id}>
              <div className="flex items-center justify-between">
                <h4>{skill.tech}</h4>
                <skill.icon size={40} color="#32F5A9" />
              </div>
              <p className="text-sm text-neutral-400 mt-2">{skill.topics}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
