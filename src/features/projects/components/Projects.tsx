import { projects, projectsContent } from "../data/projects";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <header className="projects-header">
          <p className="projects-eyebrow">{projectsContent.eyebrow}</p>

          <h2 className="projects-title">{projectsContent.title}</h2>

          <p className="projects-description">{projectsContent.description}</p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
