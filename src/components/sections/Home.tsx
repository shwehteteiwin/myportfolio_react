
import shwePhoto from "../../assets/shwe.png";
// import cvFile from "/Shwe_Htet_Ei_Win_cv.pdf";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../SocialIcon";
import Button from "../Button";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-around mx-[5%] md:mx-[10%] gap-10 md:gap-12.5 mt-20 md:mt-14 text-center md:text-left">
      <div id="left" className="w-full md:w-auto">
        <div className="flex justify-center md:justify-start mb-6.25 gap-4">
          <SocialIcon name={faInstagram} link="https://www.instagram.com/shwehtetei/" />

          <SocialIcon name={faGithub} link="https://github.com/shwehteteiwin" />

          <SocialIcon name={faLinkedin} link="https://www.linkedin.com/in/shwehtet-ei-win-63b8a11b8/" />

          <SocialIcon name={faFacebook} link="https://www.facebook.com/shwehtet.eiwin" />
        </div>

        <h1 className="text-[#2f3e46] mb-3.75 font-bold text-[40px] sm:text-[46px] md:text-[52px]">
          Hi, I'm <br />
          <p className="text-[#344e41]">Shwe Htet Ei Win</p>
        </h1>

        <p className="text-[#2f3e46] leading-7 opacity-80 mb-7.5 max-w-full md:max-w-135.5 mx-auto md:mx-0">
          A Computer Science student who enjoys building software, working with
          data, and designing systems. Currently working as a Software
          Development Intern and expected to graduate in March 2027.
        </p>

        <div className="flex justify-center md:justify-start gap-3.75">
          {/* <Button
            className={`bg-[#344e41] text-white rounded-4xl border-[2px_solid] shadow-lg hover:-translate-y-1 hover:shadow-xl target= "_blank"`}
            iconName={faDownload}
            link={cvFile}
            buttonName="Download CV"
          /> */}
<Button
  className="bg-[#344e41] text-white rounded-4xl border-[2px_solid] shadow-lg hover:-translate-y-1 hover:shadow-xl"
  iconName={faDownload}
  link="/Shwe_Htet_Ei_Win_cv.pdf"
  target="_blank"
  buttonName="Download CV"
/>

          <Button
            className="text-[#344e41] border-2 rounded-4xl border-[#344e41] border-[2px_solid] shadow-lg hover:bg-[#344e41] hover:text-white hover:-translate-y-1 hover:shadow-xl"
            iconName={faEnvelope}
            link="#contact"
            buttonName="Contact Me"
          />
        </div>
      </div>

      <div id="right" className="relative">
        <img className="shrink-0 aspect-square w-[70vw] max-w-64 sm:w-80 sm:max-w-80 md:w-[38vw] md:max-w-112.5 lg:w-112.5 border-8 border-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] rounded-full object-cover" src={shwePhoto} alt="Shwe Htet Ei Win" />
      </div>
    </section>
  );
};

export default Home;
