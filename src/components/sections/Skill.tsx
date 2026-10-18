
import {
  faCode,
  faDatabase,
  faDesktop,
  faMicrochip,
  faServer,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../Card";
import Header_line from "./Header_line";

const Skill = () => {
  return (
    <section
      id="skills"
      className="my-16 sm:my-20 mx-3 sm:mx-6 rounded-3xl px-4 sm:px-8 md:px-12 lg:px-17.5 pb-8 sm:pb-10"
    >
      <Header_line
        className="text-[#2f3e46]"
        bigTitle="Skills"
      />

      <p className="max-w-175 my-4 sm:my-5 text-center mx-auto text-[#2f3e46] opacity-50 text-sm sm:text-base">
        Technologies, tools, and professional skills I have used.
      </p>

      <Card
        skills={[
          {
            title: "Programming",
            icon: faCode,
            skills: [ "Java", "JavaScript",  "TypeScript",  "C#",   "PHP",   "SQL"  ], },
          {
            title: "Frontend",  
            icon: faDesktop, 
            skills: [ "React", "TypeScript", "Tailwind CSS" ],
          },
          {
            title: "Backend",
            icon: faServer,
            skills: [ "Spring Boot",  "Node.js", "REST APIs" ],
          },
          {
            title: "Database",
            icon: faDatabase,
            skills: [ "MySQL", "SQLite",  "Database Design"  ],
          },
          {
            title: "Tools",
            icon: faTools,
            skills: [ "Git",  "GitHub",  "Docker",  "VS Code", ],
          },
          {
            title: "Other",
            icon: faMicrochip,
            skills: [ "Python",  "Pandas", "IoT (ESP32, MQTT)", ],
          },
        ]}
      />
    </section>
  );
};

export default Skill;
