import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const QuickCard = () => {
  return (
     <div className="rounded-2xl  p-6.25 border-2 border-solid border-[rgba(255,255,255,0.12)]">
               {/* <i class="fa-solid fa-location-dot"></i> */}
               <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <h4>Location</h4>
            <p>Mandalay, Myanmar</p>
          </div>
  )
}

export default QuickCard