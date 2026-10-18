
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header_line from "./sections/Header_line";

type SkillCategory = {
  title: string;
  icon: IconDefinition;
  skills: string[];
};

type CardProps = {
  quickCard?: boolean;
  quickIcon?: IconDefinition;
  quickTitle?: string;
  quickText?: string;
  education?: string;
  skills?: SkillCategory[];
  career?: string;
  quickText2?: string;
};

const Card = ({
  quickCard,
  quickIcon,
  quickTitle,
  quickText,
  education,
  skills,
  career,
  quickText2,
}: CardProps) => {
  return (
    <>
      {quickCard && quickIcon && (
        <div className="flex flex-col items-center w-full bg-[rgba(255,255,255,0.08)] rounded-2xl mt-8 mb-8 p-5 sm:p-6 border-2 border-solid border-[rgba(255,255,255,0.12)] text-center">
          <FontAwesomeIcon className="text-2xl" icon={quickIcon} />
          <h4>{quickTitle}</h4>
          <p>{quickText}</p>
          <p>{quickText2}</p>
        </div>
      )}

      {career && (
        <div className="flex flex-col flex-1 ... items-center bg-[rgba(255,255,255,0.08)] rounded-2xl w-full justify-center mt-8 mb-8 p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
          <span className="px-2.5 text-sm font-medium bg-[rgba(52,78,65,0.1)]">{career}</span>
        </div>
      )}

      {education && (
        <div className="flex flex-col flex-1 ... justify-center bg-[rgba(255,255,255,0.08)] rounded-2xl w-full mt-8 mb-8 p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
          <h4>University of Computer Studies (Mandalay)</h4>
          <p>Bachelor of Computer Science (B.C.Sc)</p>
          <p>Final Year • Expected Graduation 2027</p>
        </div>
      )}

      {skills && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full">
          {skills.map((category) => (
            <div key={category.title} className="bg-white rounded-2xl p-5 sm:p-6 md:p-7.5 shadow-xl w-full">
              <Header_line title={category.title} className="text-[#344e41]" iconName={category.icon} />

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base text-[#344e41] bg-[#f6fff8]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
