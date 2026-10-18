import AboutCard from "../AboutCard"
import Header_line from "./Header_line"


const About = () => {
  return (
    <section id="about"
      className="
        mt-28
        mx-4 sm:mx-6
        rounded-3xl
        px-5 sm:px-8 md:px-12 lg:px-17.5
        py-8 sm:py-10
        bg-[linear-gradient(135deg,#344e41,#436255)]
      "
    >
      <Header_line bigTitle="About Me" />

      <div className="w-full">
        <AboutCard
          education="Education"
          quickTitle="Quick Facts"
          career="Career Objectives"
          interest="Area of Interests"
        />
      </div>
    </section>
  );
};

export default About;
