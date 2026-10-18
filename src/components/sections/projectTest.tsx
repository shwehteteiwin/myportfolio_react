




import { useState } from "react";
import Header_line from "./Header_line";

import romsEr from "../../assets/RomsEr.jpg";
import domainModel from "../../assets/domainModel.jpg";
import useCase from "../../assets/useCase.png";
import roms5 from "../../assets/ROMS5.jpg";
import roms6 from "../../assets/ROMS6.jpg";

import ssDashboard from "../../assets/SSdashboard.png";
import ssEvent from "../../assets/SSevent.png";
import ssNodes from "../../assets/SSNodes.png";
import ssCalendar from "../../assets/SScalender.png";
import ssTimetable from "../../assets/SStimetable.png";

import Button from "../Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  contributions: string[];
  github: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "Restaurant Ordering & Management System",

    description:
      "Developed a restaurant management platform supporting menu management, order processing, reservations, and inventory tracking using Spring Boot and MySQL.",

    technologies: [
      "Spring Boot",
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],

    contributions: [
      "Led the development team and Implemented mostly backend functionalities and business logic.",
      "Developed RESTful APIs.",
    ],

    github: "https://github.com/shwehteteiwin/ROMS",

    images: [romsEr, domainModel, useCase, roms5, roms6],
  },

  {
    title: "StudySync",

    description:
      "Designed and developed a study management platform that helps students organize learning resources and manage study activities.",

    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],

    contributions: [
      "Led project planning and team coordination.",
      "Developed frontend and backend features.",
      "Designed database management.",
    ],

    github: "https://github.com/shwehteteiwin/StudySync",

    images: [
      ssDashboard,
      ssEvent,
      ssNodes,
      ssCalendar,
      ssTimetable,
    ],
  },

  {
    title: "Smart Home Automation Prototype",

    description:
      "Developed a smart home automation system that enables remote monitoring and control of household devices through MQTT-based communication between IoT devices and a desktop application.",

    technologies: [
      "C#",
      "SQLite",
      "MQTT",
      "ESP32",
    ],

    contributions: [
      "Led a team of three students throughout development.",
      "Developed a Windows-based application for device monitoring and control.",
      "Implemented real-time communication using MQTT.",
    ],

    github:
      "https://github.com/shwehteteiwin/SmartHomePrototype",

    images: [],
  },
];

type ProjectDetailProps = {
  project: Project;
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div
      className="
        min-w-0
        w-full
        max-w-full
        overflow-hidden
        rounded-3xl
        bg-white
        p-5
        shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        sm:p-7
        lg:p-8
      "
    >
      {/* Project Header */}
      <div
        className="
          flex
          min-w-0
          flex-col
          gap-3
          sm:flex-row
          sm:items-start
          sm:justify-between
        "
      >
        <div className="min-w-0">
          <h3
            className="
              wrap-break-word
              text-xl
              font-semibold
              leading-snug
              text-[#2F3E46]
              sm:text-2xl
            "
          >
            {project.title}
          </h3>
        </div>

        <Button
          className="
            rounded-2xl
            bg-[#344E41]
            hover:bg-[#2F3E46]
          "
          link={project.github}
          buttonName="GitHub"
          iconName={faGithub}
        />
      </div>

      {/* Description */}
      <div className="mt-6">
        <p
          className="
            wrap-break-word
            text-sm
            leading-7
            text-gray-600
            sm:text-base
          "
        >
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-6">
        <h4 className="mb-3 text-sm font-semibold text-[#344E41]">
          Technologies
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-[#344E41]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Contributions */}
      <div className="mt-6">
        <h4 className="mb-3 text-sm font-semibold text-[#344E41]">
          Key Contributions
        </h4>

        <div className="flex flex-col gap-2">
          {project.contributions.map((contribution) => (
            <div
              key={contribution}
              className="
                flex
                min-w-0
                items-start
                gap-3
              "
            >
              <p
                className="
                  mt-2
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#344E41]
                "
              />

              <p
                className="
                  min-w-0
                  break-words
                  text-sm
                  leading-6
                  text-gray-600
                "
              >
                {contribution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      {project.images.length > 0 && (
        <div className="mt-7">
          <h4 className="mb-3 text-sm font-semibold text-[#344E41]">
            Project Gallery
          </h4>

          <div
            className="
              flex
              max-w-full
              gap-4
              overflow-x-auto
              pb-3
            "
          >
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="
                  h-40
                  w-52
                  shrink-0
                  rounded-2xl
                  object-cover
                  shadow-sm
                  sm:h-44
                  sm:w-60
                "
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const project = projects[selectedProject];

  return (
    <section
      id="projects"
      className="
        mt-28
        w-full
        max-w-full
        overflow-hidden
        px-4
        py-10
        sm:px-6
        lg:px-8
        xl:px-12
      "
    >
      <Header_line
        className="text-[#2F3E46]"
        bigTitle="Projects"
      />

      {/* =========================
          DESKTOP
          ========================= */}
      <div
        className="
          mx-auto
          mt-8
          hidden
          w-full
          max-w-7xl
          min-w-0
          xl:grid
          
          xl:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.7fr)]
          xl:items-stretch
          xl:gap-6
        "
      >
        
       <div
  id="left"
  className="
    flex
    min-w-0
    w-full
    flex-col
    rounded-3xl
    bg-emerald-950
    p-6
    shadow-[0_10px_25px_rgba(0,0,0,0.08)]
    lg:p-7
  "
>
  
          <h3
            className="
              mb-5
              text-xl
              font-semibold
              text-amber-100
            "
          >
            My Projects
          </h3>

          <div className="flex flex-col gap-3">
      
            {projects.map((item, index) => (
              
              <button
                key={item.title}
                onClick={() => setSelectedProject(index)}
                className={`
                  flex
                  w-full
                  min-w-0
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-4
                  text-left
                  transition

                  ${
                    selectedProject === index
                      ? "bg-[#344E41] text-white"
                      : "bg-[#F6FFF8] text-[#344E41] hover:bg-[#E8F1EB]"
                  }
                `}
              >
                
                <p
                  className="
                    min-w-0
                    wrap-break-word
                    text-sm
                    font-medium
                    sm:text-base
                  "
                >
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Right Project Detail */}
        <div className="min-w-0">
          <ProjectDetail project={project} />
        </div>
      </div>

      {/* =========================
          SMALL SCREEN
          ========================= */}
      <div
        className="
          mx-auto
          mt-8
          flex
          w-full
          max-w-7xl
          flex-col
          gap-6
          xl:hidden
        "
      >
        {projects.map((project) => (
          <ProjectDetail
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
