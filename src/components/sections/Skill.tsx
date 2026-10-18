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
    <section id="skills" className="my-20 mx-6 rounded-3xl px-17.5 pb-10">
      <Header_line
        className="text-[#2f3e46]"
        bigTitle="Skills"
      />

        <p className="max-w-175 my-5 text-center mx-auto text-[#2f3e46] opacity-.5">
          Technologies, tools, and professional skills I have used.
        </p>

      <Card
        skills={[
          {
            title: "Programming",
            icon: faCode,
            skills: [
              "Java",
              "JavaScript",
              "TypeScript",
              "C#",
              "PHP",
              "SQL",
            ],
          },
          {
            title: "Frontend",
            icon: faDesktop,
            skills: [
              "React",
              "TypeScript",
              "Tailwind CSS",
            ],
          },
          {
            title: "Backend",
            icon: faServer,
            skills: [
              "Spring Boot",
              "Node.js",
              "REST APIs",
            ],
          },
          {
            title: "Database",
            icon: faDatabase,
            skills: [
              "MySQL",
              "SQLite",
              "Database Design",
            ],
          },
          {
            title: "Tools",
            icon: faTools,
            skills: [
              "Git",
              "GitHub",
              "Docker",
              "VS Code",
            ],
          },
          {
            title: "Other",
            icon: faMicrochip,
            skills: [
              "Python",
              "Pandas",
              "IoT (ESP32, MQTT)",
            ],
          },
        ]}
      />
    </section>
  );
};

export default Skill;
// const Skill = () => {
//   return (
//     <section className="mt-28 mx-6  rounded-3xl px-17.5 py-10]">
//       <Header_line className="text-[#344e41]" bigTitle="Skills" />
      
//       <div className="grid grid-cols-2 gap-6.25">
        
//     <Card
//   skills={[
//     "HTML5",
//     "CSS3",
//     "JavaScript",
//     "PHP",
//     "Java",
//     "C#",
//     "Spring Boot",
//     "React",
//     "Node.js",
//     "MySQL",
//   ]}
// />
//         <Card
//   skills={[
//     "HTML5",
//     "CSS3",
//     "JavaScript",
//     "PHP",
//     "Java",
//     "C#",
//     "Spring Boot",
//     "React",
//     "Node.js",
//     "MySQL",
//   ]}
// />
//       </div>
//       {/*<div className="flex">
//          <div className="w-full mt-14 my-auto font-2xl text-zinc-100">
//           <Header_line title="Programming" iconName={faCode}/>
//          <Card/>
//          <Header_line title="Technology & Tools" iconName={faTools}/>
//         <Card/>
//         </div>
  
//         <div className="w-full mt-14 my-auto font-2xl text-zinc-100">
//           <Header_line title="Technology & Tools" iconName={faDatabase}/>
//         <Card/>
//          <Header_line title="Technology & Tools" iconName={faUsers}/>
//         <Card/>
//         </div>
//       </div> */}
//     </section>
//   );
// };

// export default Skill;
