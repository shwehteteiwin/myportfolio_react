import { useState } from "react";
import Header_line from "./Header_line";

import romsEr from "../../assets/RomsEr.jpg";
import domainModel from "../../assets/domainModel.jpg";
import useCase from "../../assets/useCase.png";

import roms1 from "../../assets/ROMS1.jpg";
import roms2 from "../../assets/ROMS2.jpg";
import roms3 from "../../assets/ROMS3.jpg";
import roms4 from "../../assets/ROMS4.jpg";
import roms21 from "../../assets/ROMS19.jpg";

import roms5 from "../../assets/ROMS5.jpg";
import roms6 from "../../assets/ROMS6.jpg";
import roms7 from "../../assets/ROMS7.jpg";
import roms8 from "../../assets/ROMS8.jpg";
import roms9 from "../../assets/ROMS9.jpg";

import roms10 from "../../assets/ROMS10.jpg";
import roms11 from "../../assets/ROMS18.jpg";
import roms12 from "../../assets/ROMS12.jpg";
import roms16 from "../../assets/ROMS16.jpg";
import roms15 from "../../assets/ROMS15.jpg";
import roms14 from "../../assets/ROMS14.jpg";
import roms13 from "../../assets/ROMS13.jpg";

import ssDashboard from "../../assets/SSdashboard.png";
import ssEvent from "../../assets/SSevent.png";
import ssNodes from "../../assets/SSNodes.png";
import ssCalendar from "../../assets/SScalender.png";
import ssTimetable from "../../assets/SStimetable.png";

import Button from "../Button";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectDocument = {
  name: string;
  file: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  contributions: string[];
  github: string;
  images: string[];
  documents?: ProjectDocument[];
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
      "Led the development team and implemented mostly backend functionalities and business logic.",
      "Developed RESTful APIs.",
    ],
    github: "https://github.com/shwehteteiwin/ROMS",
    images: [
      romsEr,
      domainModel,
      useCase,
      roms21,
      roms10,
      roms9,
      roms16,
      roms1,
      roms2,
      roms3,
      roms4,
      roms12,
      roms5,
      roms11,
      roms6,
      roms7,
      roms8,
      roms13,
      roms14,
      roms15,
    ],
    documents: [
      {
        name: "Database Design",
        file: "/DatabaseDesign_ROMS.pdf",
      },
      {
        name: "SRS Document",
        file: "/SRS_ROMS.pdf",
      },
    ],
  },
  {
    title: "StudySync",
    description:
      "Designed and developed a study management platform that helps students organize learning resources and manage study activities.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
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
    technologies: ["C#", "SQLite", "MQTT", "ESP32"],
    contributions: [
      "Led a team of three students throughout development.",
      "Developed a Windows-based application for device monitoring and control.",
      "Implemented real-time communication using MQTT.",
    ],
    github: "https://github.com/shwehteteiwin/SmartHomePrototype",
    images: [],
  },
];

type ProjectDetailProps = {
  project: Project;
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="min-w-0 w-full max-w-full overflow-hidden rounded-3xl bg-white p-5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="wrap-break-word text-xl font-semibold leading-snug text-[#2F3E46] sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <div className="shrink-0">
            <Button
              className="rounded-2xl bg-[#344E41] hover:bg-[#2F3E46]"
              link={project.github}
              buttonName="GitHub"
              iconName={faGithub}
              target="_blank"
            />
          </div>
        </div>

        <div className="mt-6">
          <p className="wrap-break-word text-sm leading-7 text-gray-600 sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="mt-7">
          <h4 className="mb-3 text-sm font-semibold text-[#344E41]">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg bg-[#F6FFF8] px-3 py-2 text-sm font-medium text-[#344E41] shadow-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <h4 className="mb-3 text-sm font-semibold text-[#344E41]">
            Key Contributions
          </h4>

          <div className="flex flex-col gap-3">
            {project.contributions.map((contribution) => (
              <div
                key={contribution}
                className="flex min-w-0 items-start gap-3"
              >
                <p className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#344E41]" />

                <p className="min-w-0 break-words text-sm leading-6 text-gray-600">
                  {contribution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {project.documents && project.documents.length > 0 && (
          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold text-[#344E41]">
              Project Documents
            </h4>

            <div className="flex flex-wrap gap-3">
              {project.documents.map((document) => (
                <a
                  key={document.file}
                  href={document.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#344E41] px-4 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-[#2F3E46] hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faFilePdf} />
                  {document.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {project.images.length > 0 && (
          <div className="mt-8">
            <h4 className="mb-3 text-sm font-semibold text-[#344E41]">
              Project Gallery
            </h4>

            <div className="flex max-w-full gap-4 overflow-x-auto pb-3">
              {project.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className="shrink-0 cursor-zoom-in"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-40 w-52 rounded-2xl object-cover shadow-sm transition-transform duration-200 hover:scale-105 sm:h-44 sm:w-60"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedImage && (
  <div
    className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-black/80 p-3 sm:p-6"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative flex max-h-[90vh] max-w-[95vw] items-center justify-center sm:max-w-[90vw]"
      onClick={(event) => event.stopPropagation()}
    >
      <img
        src={selectedImage}
        alt="Project preview"
        className="block max-h-[85vh] max-w-[95vw] rounded-xl object-contain shadow-2xl sm:max-h-[88vh] sm:max-w-[90vw]"
      />

      <button
        onClick={() => setSelectedImage(null)}
        aria-label="Close image"
        className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition hover:bg-black/90 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
      >
        ×
      </button>
    </div>
  </div>
)}

      {/* {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Project preview"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black/80"
            >
              ×
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const project = projects[selectedProject];

  return (
    <section
      id="projects"
      className="mt-28 w-full max-w-full overflow-hidden px-4 py-10 sm:px-6 lg:px-8 xl:px-12"
    >
      
      <Header_line
        className="text-[#2F3E46]"
        bigTitle="Projects"
      />

      <div className="mt-6">
        <div className="mx-0 mt-8 w-full max-w-7xl">
          <div className="hide-scrollbar flex w-full gap-2 overflow-x-auto pb-6">
            {projects.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setSelectedProject(index)}
                className={`shrink-0 rounded-2xl px-4 py-3 text-sm font-medium shadow-lg transition-all duration-200 sm:px-5 sm:py-3.5 sm:text-base ${
                  selectedProject === index
                    ? "bg-[#344E41] text-white shadow-md"
                    : "bg-[#F6FFF8] text-[#344E41] hover:bg-[#E8F1EB]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <ProjectDetail project={project} />
      </div>
    </section>
  );
};

export default Projects;