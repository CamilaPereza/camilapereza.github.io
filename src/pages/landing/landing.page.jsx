import { Box, Typography } from "@mui/material";

import "./landing.css";

const LandingPage = ({ contactInformation }) => {
  return (
    <>
      <Box className="welcome-section">
        <Typography color={"primary"}>Camila Pérez León</Typography>
        <Typography color={"primary"}>
          Comunicadora social y periodista
        </Typography>
      </Box>
      <Box className="welcome-section" id="about">
        <Typography>Sobre mi</Typography>
        <Typography>Comunicadora social y periodista</Typography>
      </Box>
      <Box className="welcome-section" id="projects">
        <Typography>Proyectos</Typography>
        <Typography>Comunicadora social y periodista</Typography>
      </Box>
      <Box className="welcome-section" id="contact">
        <>
          <h2>Contacto</h2>
          <div></div>
          <ul>
            {contactInformation.social_networks.map((network, index) => (
              <li key={index}>
                <a href={network.url} target="_blank" rel="noreferrer">
                  {network.name}
                </a>
              </li>
            ))}
          </ul>
        </>{" "}
      </Box>
    </>
  );
};

export default LandingPage;
