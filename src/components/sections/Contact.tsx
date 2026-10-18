
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
    <section id="contact" className="mt-20 py-10 px-14">

           <Header_line
        className="text-[#2f3e46]"
        bigTitle="Contact"
      />


      
      <div className="mx-auto grid grid-cols-1 mt-20 mb-24 overflow-hidden rounded-[25px] bg-[#344E41] text-white shadow-lg md:grid-cols-[0.8fr_1.5fr]">

       
        <div className="flex flex-col justify-center p-9 md:p-10">
          <h2 className="text-4xl font-semibold sm:text-3xl">
            Let's Connect
          </h2>

          <p className="mt-5 leading-7 text-white/80">
            Feel free to reach out if you would like to connect,
            discuss a project, or just say hello.
          </p>
        </div>

        
        <div className="bg-white p-9 text-[#344E41] md:p-10">

          <h3 className="mb-8 text-2xl font-semibold">
            Contact Information
          </h3>

         
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

           
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="mt-1 text-xl text-[#344E41]"
              />

              <div>
                <h4 className="mb-2 font-semibold">
                  Phone
                </h4>

                <a
                  href="tel:+959452844220"
                  className="mb-1 block text-[#344E41] transition hover:text-[#A4C3B2]"
                >
                  +95 9452844220
                </a>

                <a
                  href="tel:+959797151334"
                  className="block text-[#344E41] transition hover:text-[#A4C3B2]"
                >
                  +95 9797151334
                </a>
              </div>
            </div>

          
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mt-1 text-xl text-[#344E41]"
              />

              <div className="min-w-0">
                <h4 className="mb-2 font-semibold">
                  Email
                </h4>

                <a
                  href="mailto:shwehtetei@gmail.com"
                  className="wrap-break-word text-[#344E41] transition hover:text-[#A4C3B2]"
                >
                  shwehtetei@gmail.com
                </a>
              </div>
            </div>

            
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-xl text-[#344E41]"
              />

              <div>
                <h4 className="mb-2 font-semibold">
                  Location
                </h4>

                <p className="m-0">
                  Mandalay, Myanmar
                </p>
              </div>
            </div>

           
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faGithub}
                className="mt-1 text-xl text-[#344E41]"
              />

              <div className="min-w-0">
                <h4 className="mb-2 font-semibold">
                  GitHub
                </h4>

                <a
                  href="https://github.com/shwehteteiwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wrap-break-word text-[#344E41] transition hover:text-[#A4C3B2]"
                >
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
