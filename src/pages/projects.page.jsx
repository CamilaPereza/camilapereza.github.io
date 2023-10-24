const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.project_name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsPage;
