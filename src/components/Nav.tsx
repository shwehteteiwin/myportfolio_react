// const Nav = () => {
//   return (

//         <nav className="flex gap-7.5 w-fit bg-white rounded-4xl py-3.5 px-6 m-auto text-center">
//             <div className=" font-bold text-zinc-800 text-lg">Portfolio.</div>
//             <ul className="flex gap-7.5 text-zinc-500 font-semibold text-[15px] py-0.5">
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Skills</li>
//                 <li>Projects</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>

//   )
// }

// export default Nav



import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    const nav = document.querySelector("nav");

    const navHeight = nav?.getBoundingClientRect().height ?? 0;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - navHeight - 24,
      behavior: "smooth",
    });
  }

  setMenuOpen(false);
};

  return (
<nav
  className="
    w-[calc(100%-2rem)] md:w-fit
    mx-auto
    bg-white
    rounded-4xl
    py-3.5
    px-5 md:px-6
    shadow-[0_10px_25px_rgba(0,0,0,0.06)]
  "
>

  
      <div className="flex items-center justify-between gap-7.5">
        <div className="font-bold text-zinc-800 text-lg">Portfolio.</div>

        <ul
          className="
          hidden md:flex
          gap-7.5
          text-zinc-500
          font-semibold
          text-[15px]
          py-0.5
        "
        >
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >Home</li>
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >About</li>
          <li
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer"
          >Skills</li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer"
          >Projects</li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>

        
        <button
          className="md:hidden text-zinc-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {menuOpen && (
        <ul
          className="
          md:hidden
          flex flex-col
          items-center
          gap-4
          pt-5
          text-zinc-500
          font-semibold
          text-[15px]
        "
        >
                   <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >Home</li>
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >About</li>
          <li
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer"
          >Skills</li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer"
          >Projects</li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
