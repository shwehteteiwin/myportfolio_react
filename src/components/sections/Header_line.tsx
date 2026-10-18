import {  type IconDefinition } from "@fortawesome/free-solid-svg-icons"
// import { iconName } from "@fortawesome/free-solid-svg-icons/faAmericanSignLanguageInterpreting"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type HeaderProps={
    title?: string
    bigTitle?: string
    iconName?: IconDefinition
    className?: string
}
const Header_line = ({title,bigTitle,iconName,className}: HeaderProps) => {
  return (
    <div>

        {bigTitle && (<div>
        <h1 className={`text-center ${className}  text-5xl font-bold`}>{bigTitle}</h1>
        <div className="w-20 h-1 mx-auto my-3.75 rounded-2xl bg-[#a4c3b2]"></div>
        </div>)}
        
        {title && iconName &&(
            <div>
                <h1 className={`text-2xl font-bold ${className}`}>
        <FontAwesomeIcon className="mr-2" icon={iconName}></FontAwesomeIcon>
       {title}</h1>
            </div>
        )}

        
    </div>
  )
}

export default Header_line