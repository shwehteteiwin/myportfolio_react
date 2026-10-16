import Card from "./Card";
import Header_line from "./sections/Header_line";

type AboutCardProps = {
  education: string;
  quickTitle: string;
  career: string;
  interest: string;
};
const AboutCard = ({
  education,
  career,
  interest,
  quickTitle,
}: AboutCardProps) => {
  return (
    <div className=" mt-16 my-auto font-2xl text-zinc-100">
      {/* <div className="flex w-full ">
        <Header_line title={education}/>
     <Header_line title={career}/>
     </div> */}

      <div className="flex  gap-9">
        <div className="w-[50%]">
          <Header_line title={education} />
          <Card education="Computer University " />
        </div>

        <div className="w-[50%]">
          <Header_line title={career} />
          <Card career="Seeking internship opportunities where I can apply my software development knowledge, strengthen my technical skills, gain industry experience, and contribute to real-world projects while continuing to learn and grow as a developer." />
        </div>
      </div>

      <div className="mt-10 ">
        <Header_line title={quickTitle} />
        <div className="flex gap-5 items-center justify-between">
          <Card quickCard="Location" />
          <Card quickCard="Location" />
          <Card quickCard="Location" />
          <Card quickCard="Location" />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
