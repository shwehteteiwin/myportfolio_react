import AboutCard from "./AboutCard"

const About = () => {
  return (
    <section className="mt-28 mx-6  rounded-3xl px-17.5 py-10 bg-[linear-gradient(135deg,#344e41,#436255)]" >
        <h1 className="text-center text-white text-5xl font-bold">About Me</h1>
        <div className="w-20 h-1 mx-auto my-3.75 rounded-2xl bg-[#a4c3b2]"></div>
        <div className="flex gap-7.5 justify-between w-full">
            <AboutCard/>
            <AboutCard/>
        </div>
    </section>
  )
}

export default About