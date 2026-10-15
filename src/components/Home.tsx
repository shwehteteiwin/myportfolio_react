import shwePhoto from '../assets/shwe.png'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon'
const Home = () => {
  return (
    <section className='flex'>
      <div id='left'>
        <div className='flex mb-3.5  gap-4' >
        <SocialIcon name={faInstagram} link="https://www.instagram.com/shwehtetei/"/>
        <SocialIcon name={faGithub} link="https://github.com/shwehteteiwin"/>
        <SocialIcon name={faLinkedin} link="https://www.linkedin.com/in/shwehtet-ei-win-63b8a11b8/"/>
        <SocialIcon name={faFacebook} link="https://www.facebook.com/shwehtet.eiwin"/>

      </div>
      </div>
      <div id='right'>
        {/* <img className='w-sm'src={shwePhoto}></img> */}

      </div>
    </section>
  )
}

export default Home