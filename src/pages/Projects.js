import Projects from "../components/Projects";
import { info } from "../info/info";

function ProjectsPage(params) {
  const projects = info.projects;

  return <Projects projects={projects} />;
}

export default ProjectsPage;
