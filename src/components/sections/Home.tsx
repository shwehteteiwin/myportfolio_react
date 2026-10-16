import shwePhoto from '../../assets/shwe.png'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from '../SocialIcon'
import Button from '../Button'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <section className='items-center flex justify-around mx-[10%] gap-12.5 mt-13.5'>
      <div id='left'>

        {/* //social Icons */}
        <div className='flex mb-6.25 gap-4' >
          <SocialIcon name={faInstagram} link="https://www.instagram.com/shwehtetei/" />
          <SocialIcon name={faGithub} link="https://github.com/shwehteteiwin" />
          <SocialIcon name={faLinkedin} link="https://www.linkedin.com/in/shwehtet-ei-win-63b8a11b8/" />
          <SocialIcon name={faFacebook} link="https://www.facebook.com/shwehtet.eiwin" />
        </div>

        <h1 className='text-[#2f3e46] mb-3.75 font-bold text-[52px]'>Hi, I'm <br /> <span className='text-[#344e41]'>Shwe Htet Ei Win</span></h1>
        <p className='text-[#2f3e46] leading-7 opacity-80 mb-7.5 max-w-135.5'>A Computer Science student who enjoys building software, working with data, and designing systems.Currently working as a Software Development Intern and expected to graduate in March 2027.</p>
        
        {/* //buttons */}
        <div className='flex gap-3.75'>
          <Button className='bg-[#344e41] text-white' iconName={faDownload} link="./file/Shwe_Htet_Ei_Win_cv.pdf" buttonName="Download CV" />

          <Button className='text-[#344e41] border-2 border-[#344e41]' iconName={faEnvelope} link="#" buttonName='Contact me' />

        </div>

      </div>

      <div id='right' className=' relative'>
        {/* <div className='absolute inset-0 -m-2  rounded-full border-[6px] border-transparent border-t-[#40bdff]  border-r-[#40bdff] animate-[spin_4s_linear_infinite]' ></div> */}
        {/* <div className='absolute inset-2.5 rounded-full overflow-hidden bg-white'> */}
        <img className=' border-8 border-[solid] border-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] w-112.5 h-112.5 object-center rounded-full object-cover' src={shwePhoto}></img>
        {/* </div> */}






      </div>
    </section>
  )
}

export default Home