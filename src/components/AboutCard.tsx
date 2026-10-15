import { faBolt, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuickCard from "./QuickCard";

const AboutCard = () => {
  return (
    <div className="w-[50%] mt-16 my-auto font-2xl text-zinc-100">
      <h1 className=" text-2xl font-bold mb-5 text-[#a4c3b2]">
        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
        Eduction
      </h1>

      <div className="rounded-t-2xl  p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
        <h4>University of Computer Studies (Mandalay)</h4>
        <p>Bachelor of Computer Science (B.C.Sc)</p>
        <span>Final Year • Expected Graduation 2026</span>
      </div>
      <div className="mt-10">
            <h1 className=" text-2xl font-bold mb-5 text-[#a4c3b2]">
            <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
            Quick Facts
            </h1>
            <div className="flex gap-5">
                <QuickCard/>
                <QuickCard/>
            </div>
      </div>
    </div>
  );
};

export default AboutCard;
