
import Card from "../Card"
import Header_line from "./Header_line"


const Skill = () => {
  return (
        <section className="mt-28 mx-6  rounded-3xl px-17.5 py-10]" >
      <Header_line bigTitle="Skills"/>
      <div className="flex">
         <div className="w-full mt-14 my-auto font-2xl text-zinc-100">
          <Header_line title="Technology & Tools"/>
         <Card/>
         <Header_line title="Technology & Tools"/>
        <Card/>
        </div>
  
        <div className="w-full mt-14 my-auto font-2xl text-zinc-100">
          <Header_line title="Technology & Tools"/>
        <Card/>
         <Header_line title="Technology & Tools"/>
        <Card/>
        </div>
      </div>
       
        
    </section>
  )
}

export default Skill