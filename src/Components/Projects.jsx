import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-full sm:h-screen w-full px-5 sm:px-20 pt-26 pb-10 border-b-2 border-[#32F5A9]/25"
    >
      <h3 className="tracking-wider">
        PERSONAL <span className="text-primary">PROJECTS</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
        {projects.map((project) => {
          return (
            <div className="col card" key={project.id}>
              <h4 className="!text-xl">{project.name}</h4>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  {project.skills?.map((Skill, index) => (
                    <Skill size={25} color="#32F5A9" key={index} />
                  ))}
                </div>

                <div className="">
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      className="text-xs underline text-primary"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
              <ul className="text-sm text-neutral-400 mt-4 list-disc pl-5 space-y-1">
                {project.desc?.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
