import {  type IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type ButtonProps = {
    iconName: IconDefinition,
    link: string
    buttonName: string
    className?: string
}
const Button = ({iconName,link,buttonName,className=""}: ButtonProps) => {
    
  return (
       <a className= {`items-center inline-flex text-center min-w-16 gap-2  ${className} rounded-4xl px-3 py-3 border-[2px_solid]`} href={link} target="_blank" >
            {/* <i class="fa-solid fa-download"></i> */}
            <FontAwesomeIcon className="" icon={iconName}></FontAwesomeIcon>
            {buttonName}
          </a>
          
  )
}

export default Button