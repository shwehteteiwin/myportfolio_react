import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = {
  quickCard?: string,
  education?: string,
  skills?: string,
  career?: string
}
const Card = ({ quickCard, education, skills, career }: CardProps) => {
  return (
    <>
        { quickCard && (
      
        <div className="flex flex-col items-center rounded-2xl w-[25%] mt-8 mb-8 p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
          {/* <i class="fa-solid fa-location-dot"></i> */}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <h4>Location</h4>
          <p>Mandalay, Myanmar</p>
         
        </div>
      

    )}
    
    {career &&(
      <div className="flex flex-col items-center rounded-2xl w-full justify-center h-37.5 mt-8 mb-8 p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
          {/* <i class="fa-solid fa-location-dot"></i> */}
          
          <span className="px-2.5  text-sm font-medium bg-[rgba(52, 78, 65, 0.1)]">{career}</span>
        </div>
    )}

    {education && (
        <div className="flex flex-col items-center rounded-2xl h-37.5 w-full mt-8 mb-8 p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
          {/* <i class="fa-solid fa-location-dot"></i> */}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <h4>{education}</h4>
          <p>Mandalay, Myanmar</p>
         
        </div>
    )}
       
    {skills &&(
      <div className="flex flex-col items-center rounded-2xl w-full text-white justify-center h-37.5 mt-8 mb-8 p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
          {/* <i class="fa-solid fa-location-dot"></i> */}
          
          <span className="px-2.5  text-sm font-medium text-[#344e41] bg-[rgba(52, 78, 65, 0.1)]">{skills}</span>
        </div>
    )}
    
    </>







  );
};

export default Card;
