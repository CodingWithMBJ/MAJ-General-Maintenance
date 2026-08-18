import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-card__image"
      />

      <div className="project-card__overlay">
        <p className="project-card__category">{project.category}</p>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
