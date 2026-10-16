import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type HeaderProps={
    title?: string
    bigTitle?: string

}
const Header_line = ({title,bigTitle}: HeaderProps) => {
  return (
    <div>

        {bigTitle && (<div>
        <h1 className="text-center text-white text-5xl font-bold">{bigTitle}</h1>
        <div className="w-20 h-1 mx-auto my-3.75 rounded-2xl bg-[#a4c3b2]"></div>
        </div>)}
        
        {title &&(
            <div>
                <h1 className=" text-2xl font-bold text-[#a4c3b2]">
        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
       {title}</h1>
            </div>
        )}

        
    </div>
  )
}

export default Header_line