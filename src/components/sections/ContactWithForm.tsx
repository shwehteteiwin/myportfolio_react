


import Header_line from "./Header_line";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-20 mb-20 px-4 sm:mt-16 sm:mb-16"
    >
  <Header_line
        className="text-[#2f3e46]"
        bigTitle="Contact"
      />

      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.2fr]">
       
        <div className="rounded-3xl bg-[#344e41] p-9 text-white sm:rounded-[20px] sm:p-6 min-[480px]:rounded-[15px] min-[480px]:p-5">
          <h3 className="mb-7 text-2xl font-semibold sm:mb-5 sm:text-xl min-[480px]:text-[1.2rem]">
            Let's Connect
          </h3>

          
          <div className="mb-6 flex gap-4 sm:gap-3 sm:mb-5">
            <FontAwesomeIcon
              icon={faPhone}
              className="mt-1 text-xl text-[#a4c3b2] sm:text-lg"
            />

            <div className="min-w-0">
              <h4 className="mb-1 font-semibold">Phone</h4>

              <a
                href="tel:+959452844220"
                className="mb-1 block break-words text-white no-underline"
              >
                +95 9452844220
              </a>

              <a
                href="tel:+959797151334"
                className="block break-words text-white no-underline"
              >
                +95 9797151334
              </a>
            </div>
          </div>

          
          <div className="mb-6 flex gap-4 sm:gap-3 sm:mb-5">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mt-1 text-xl text-[#a4c3b2] sm:text-lg"
            />

            <div className="min-w-0">
              <h4 className="mb-1 font-semibold">Email</h4>

              <a
                href="mailto:shwehtetei@gmail.com"
                className="break-words text-white no-underline"
              >
                shwehtetei@gmail.com
              </a>
            </div>
          </div>

         
          <div className="mb-6 flex gap-4 sm:gap-3 sm:mb-5">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mt-1 text-xl text-[#a4c3b2] sm:text-lg"
            />

            <div className="min-w-0">
              <h4 className="mb-1 font-semibold">Location</h4>

              <p className="m-0 break-words">
                Mandalay, Myanmar
              </p>
            </div>
          </div>

          
          <div className="flex gap-4 sm:gap-3">
            <FontAwesomeIcon
              icon={faGithub}
              className="mt-1 text-xl text-[#a4c3b2] sm:text-lg"
            />

            <div className="min-w-0">
              <h4 className="mb-1 font-semibold">GitHub</h4>

              <a
                href="https://github.com/shwehteteiwin"
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-white no-underline"
              >
                github.com/shwehteteiwin
              </a>
            </div>
          </div>
        </div>

        
        <div className="rounded-3xl bg-white p-9 shadow-[0_10px_25px_rgba(0,0,0,0.08)] sm:rounded-[20px] sm:p-6 min-[480px]:rounded-[15px] min-[480px]:p-5">
          <form className="flex flex-col gap-5 sm:gap-4">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border-2 border-[rgba(0,0,0,0.08)] p-[15px] text-base outline-none transition focus:border-[#344e41] sm:p-3 sm:text-[0.95rem]"
            />

           
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border-2 border-[rgba(0,0,0,0.08)] p-[15px] text-base outline-none transition focus:border-[#344e41] sm:p-3 sm:text-[0.95rem]"
            />

           
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border-2 border-[rgba(0,0,0,0.08)] p-[15px] text-base outline-none transition focus:border-[#344e41] sm:p-3 sm:text-[0.95rem]"
            />

           
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl border-none bg-[#344e41] p-[15px] text-base text-white transition duration-300 hover:opacity-90 sm:p-3 sm:text-[0.95rem]"
            >
              Send Message
            </button>
          </form>

          
          <p className="mt-4 font-medium"></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;