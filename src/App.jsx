import "./App.css";

import data from "../data/cv.json";

function App() {
  const { projects, contact_information } = data;

  return (
    <>
      <h2>Contacto</h2>
      <div></div>
      <ul>
        {contact_information.social_networks.map((network, index) => (
          <li key={index}>
            <a href={network.url} target="_blank" rel="noreferrer">
              {network.name}
            </a>
          </li>
        ))}
      </ul>

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
}

export default App;
