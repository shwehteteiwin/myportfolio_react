
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header_line from "./Header_line";

const Contact = () => {
  return (
    <section id="contact" className="mt-16 sm:mt-20 px-4 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-10">
      <Header_line className="text-[#2f3e46]" bigTitle="Contact" />

      <div
        className=" mx-auto mt-12 sm:mt-16 md:mt-20 mb-16 sm:mb-20 max-w-6xl overflow-hidden rounded-3xl bg-[#344E41] text-white shadow-lg grid grid-cols-1 md:grid-cols-[0.8fr_1.5fr]">
        <div
          className=" flex flex-col justify-center p-7 sm:p-9 md:p-10 md:min-h-95 ">
          

          <h2 className="text-3xl sm:text-4xl font-semibold">Contact Me</h2>

          <p className=" mt-4 max-w-md text-sm sm:text-base leading-7  text-white/75 " > Feel free to reach out if you would like to connect,discuss a project, or just say hello. </p>
        </div>

        <div className="  bg-white  p-7 sm:p-9 md:p-10 text-[#344E41] " >
          <h3 className="mb-7 text-xl sm:text-2xl font-semibold"> Contact Information </h3>

          <div
            className=" grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 ">
            <div className="flex gap-4">
              <div className="  flex h-10 w-10 shrink-0 items-center justify-center rounded-xl  bg-[#F6FFF8] " >
                <FontAwesomeIcon icon={faPhone} className="text-lg text-[#344E41]"/>
              </div>

              <div className="min-w-0">
                <h4 className="mb-1.5 font-semibold">
                  Phone
                </h4>

                <a href="tel:+959452844220" className=" block text-sm sm:text-base text-[#344E41] transition hover:text-[#A4C3B2] "> +95 9452844220 </a>

                <a href="tel:+959797151334" className=" block text-sm sm:text-base  text-[#344E41] transition hover:text-[#A4C3B2]  " > +95 9797151334 </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className=" flex h-10 w-10 shrink-0 items-center justify-center  rounded-xl bg-[#F6FFF8] " >
                <FontAwesomeIcon  icon={faEnvelope} className="text-lg text-[#344E41]" />
              </div>

              <div className="min-w-0">
                <h4 className="mb-1.5 font-semibold"> Email  </h4>

                <a href="mailto:shwehtetei@gmail.com"  className=" break-all  text-sm sm:text-base text-[#344E41] transition hover:text-[#A4C3B2] " >
                  shwehtetei@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className=" flex h-10 w-10 shrink-0 items-center justify-center rounded-xl   bg-[#F6FFF8]   " >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-lg text-[#344E41]"
                />
              </div>

              <div>
                <h4 className="mb-1.5 font-semibold"> Location </h4>

                <p className="m-0 text-sm sm:text-base">  Mandalay, Myanmar </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className=" flex h-10 w-10 shrink-0 items-center justify-center  rounded-xl bg-[#F6FFF8] "  >
                <FontAwesomeIcon icon={faGithub} className="text-lg text-[#344E41]" />
              </div>

              <div className="min-w-0">
                <h4 className="mb-1.5 font-semibold">  GitHub </h4>

                <a href="https://github.com/shwehteteiwin" target="_blank" rel="noopener noreferrer"
                  className=" break-all text-sm  sm:text-base text-[#344E41]   transition  hover:text-[#A4C3B2] " >
                  github.com/shwehteteiwin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
