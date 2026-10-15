import { type IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialData ={
    name: IconDefinition,
    link:string
}
const SocialIcon = ({name,link}:SocialData) => {

    
  return (
    
        // <a className = ' leading-9 text-red-600 rounded-xl bg-amber-500 h-9 w-10 text-center' href={link} target="_blank">
        <a className = ' leading-11 text-red-600 rounded-xl bg-white h-10 w-10 text-center' href={link} target="_blank">

            <FontAwesomeIcon icon ={name}/>
          </a>
    
            
          
          
  )
}

export default SocialIcon