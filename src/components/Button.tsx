import {  type IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type ButtonProps = {
    iconName: IconDefinition,
    link: string
    buttonName: string
    className?: string
    target?: string
}

const Button = ({ iconName, link, buttonName, target, className = "" }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (target === "_blank") {
      e.preventDefault();
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <a className={`items-center inline-flex text-center min-w-16 gap-2 ${className} px-3 py-3`} href={link} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} onClick={handleClick}>
      <FontAwesomeIcon icon={iconName} />
      {buttonName}
    </a>
  );
};
// const Button = ({iconName,link,buttonName,target,className=""}: ButtonProps) => {
    
//   return (
//        <a className= {`items-center inline-flex text-center min-w-16 gap-2  ${className}  px-3 py-3`} href={link} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} >
//             {/* <i class="fa-solid fa-download"></i> */}
//             <FontAwesomeIcon className="" icon={iconName}></FontAwesomeIcon>
//             {buttonName}
//           </a>
          
//   )
// }

export default Button