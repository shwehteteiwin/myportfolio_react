import {
  faBullseye,
  faCode,
  faGraduationCap,
  faHeart,
  faLanguage,
  faLightbulb,
  faLocationDot,
  // faSignLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import Header_line from "./sections/Header_line";
// import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons/faAmericanSignLanguageInterpreting";

type AboutCardProps = {
  education: string;
  quickTitle: string;
  career: string;
  interest: string;
};
// const AboutCard = ({ education, career, quickTitle }: AboutCardProps) => {
//   return (
//     <div className=" mt-16 my-auto font-2xl text-zinc-100">
//       {/* <div className="flex w-full ">
//         <Header_line title={education}/>
//      <Header_line title={career}/>
//      </div> */}

//       <div className="flex  gap-9">
//         <div className="w-[50%]">
//           <Header_line title={education} iconName={faGraduationCap} />
//           <Card education="Computer University" />
//         </div>

//         <div className="w-[50%]">
//           <Header_line title={career} iconName={faBullseye} />
//           <Card career="Seeking internship opportunities where I can apply my software development knowledge, strengthen my technical skills, gain industry experience, and contribute to real-world projects while continuing to learn and grow as a developer." />
//         </div>
//       </div>

//       <div className="mt-10 ">
//         <Header_line title={quickTitle} iconName={faLightbulb}/>
//         <div className="flex gap-5 items-center justify-between">
//           <Card
//             quickCard
//             quickIcon={faLocationDot}
//             quickTitle="Location"
//             quickText="ChanMyaTharZi, Mandalay"
//             quickText2="Myanmar"
//           />

//           <Card
//             quickCard
//             quickIcon={faLanguage}
//             quickTitle="Education"
//             quickText="Burmese (Native)"
//             quickText2="English (Intermediate)"

//           />

//           <Card
//             quickCard
//             quickIcon={faCode}
//             quickTitle="Focus"
//             quickText="Software Development"
//             quickText2="(Full Stack)"
//           />

//           <Card
//             quickCard
//             quickIcon={faHeart}
//             quickTitle="Interest"
//             quickText="System Design"
//             quickText2="Database Design"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutCard;

const AboutCard = ({ education, career, quickTitle }: AboutCardProps) => {
  return (
    <div className="mt-16 font-2xl text-zinc-100">
    
      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-9">
        <div className="w-full lg:w-1/2 flex flex-col">
          <Header_line title={education} className="text-[#a4c3b2]" iconName={faGraduationCap} />
          <Card education="Computer University" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <Header_line title={career} className="text-[#a4c3b2]" iconName={faBullseye} />
          <Card career="Seeking internship opportunities where I can apply my software development knowledge, strengthen my technical skills, gain industry experience, and contribute to real-world projects while continuing to learn and grow as a developer." />
        </div>

      </div>

      <div className="mt-10">
        <Header_line title={quickTitle}className="text-[#a4c3b2]" iconName={faLightbulb} />

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
        >
          <Card
            quickCard
            quickIcon={faLocationDot}
            quickTitle="Location"
            quickText="ChanMyaTharZi, Mandalay"
            quickText2="Myanmar"
          />

          <Card
            quickCard
            quickIcon={faLanguage}
            quickTitle="Education"
            quickText="Burmese (Native)"
            quickText2="English (Intermediate)"
          />

          <Card
            quickCard
            quickIcon={faCode}
            quickTitle="Focus"
            quickText="Software Development"
            quickText2="(Full Stack)"
          />

          <Card
            quickCard
            quickIcon={faHeart}
            quickTitle="Interest"
            quickText="System Design"
            quickText2="Database Design"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
