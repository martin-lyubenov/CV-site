import { useEffect, useState } from "react";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import Section from "../UI/Section";

const ProjectCard = ({ project, index }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <Section index={index}>
      <Heading projectName={project.name} index={index} />
      <div className=" w-10/12 mx-auto gap-5 grid md:grid-cols-2">
        <div>
          <a href={project.href} target="”_blank" className=" block relative">
            <div className=" absolute w-full h-full bg-blue-600 opacity-0 hover:opacity-30"></div>
            <Button text="Click me!" animation="animate-bounce" />
            <img
              src={project.imageUrl}
              alt={project.alt}
              className=" w-full h-full"
            />
          </a>
        </div>
        <div>
          <h2
            className={`${
              index % 2 === 0 ? "text-white" : "text-black"
            } text-center text-xl md:text-2xl lg:text-3xl p-5`}
          >
            Description
          </h2>
          <p
            className={`${
              index % 2 === 0 ? "text-white" : "text-black"
            } ${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out mx-auto mt-3 md:text-xl lg:text-2xl`}
          >
            {project.desc}
          </p>
        </div>
      </div>
    </Section>
  );
};

function Projects({projects}) {
  return projects.map((project, i) => (
    <ProjectCard key={i} project={project} index={i} />
  ));
}

export default Projects;
