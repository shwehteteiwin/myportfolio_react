import AboutCard from "../AboutCard"
import Header_line from "./Header_line"

const About = () => {
  return (
    <section className="mt-28 mx-6  rounded-3xl px-17.5 py-10 bg-[linear-gradient(135deg,#344e41,#436255)]" >
        {/* <h1 className="text-center text-white text-5xl font-bold">About Me</h1>
        <div className="w-20 h-1 mx-auto my-3.75 rounded-2xl bg-[#a4c3b2]"></div> */}
        <Header_line bigTitle="About Me"/>
        
        <div className="flex gap-7.5 justify-between w-full">
            <AboutCard education='Eduction' quickTitle="Quick Facts" career="Career Objectives" interest="Area of Interests" />
            {/* <AboutCard title='Career Objective' quickTitle="Areas Of Interest"/> */}
        </div>
    </section>
  )
}

export default About