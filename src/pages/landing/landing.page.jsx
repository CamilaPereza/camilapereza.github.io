import { Box, Grid, Link, Typography } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeleteIcon from "@mui/icons-material/Delete";

import ProjectComponent from "../../components/project.component";

import data from "../../../data/cv.json";
import "./landing.css";

const { projects, contact_information: contactInformation } = data;

const LandingPage = () => {
  const icons = [
    { name: "Instagram", icon: <InstagramIcon fontSize="inherit" /> },
    { name: "LinkedIn", icon: <LinkedInIcon fontSize="inherit" /> },
    // TODO: check another social networks
    // { name: "Twitter", icon: <InstagramIcon /> },
    // { name: "Github", icon: LinkedInIcon },
  ];

  const contactInformationComponentList =
    contactInformation.social_networks.map((network) => ({
      ...network,
      icon: icons.find((icon) => icon.name === network.name)?.icon,
    }));

  return (
    <>
      <Box className="welcome-section">
        <Typography variant="h4" color={"primary"} my={3} fontWeight={"bold"}>
          Camila Pérez León
        </Typography>
        <Typography variant="body1" color={"primary"}>
          Comunicadora social y periodista
        </Typography>
      </Box>

      <Box className="welcome-section" id="about">
        <Typography>Sobre mi</Typography>
        <Typography>Comunicadora social y periodista</Typography>
      </Box>

      <Box className="welcome-section" id="projects">
        <Typography variant="h4" color={"primary"} my={3} fontWeight={"bold"}>
          Algunos de mis proyectos
        </Typography>
        <Grid container spacing={2} justifyContent={"center"}>
          {projects.map((project, index) => (
            <Grid item key={index}>
              <ProjectComponent project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <footer id="footer">
        <Box className="welcome-section" id="contact" color={"primary"}>
          <Typography
            variant="h2"
            color={"primary"}
            fontWeight={"bold"}
            my={10}
          >
            Let´s work together
          </Typography>

          <Grid container className="contact-container" rowSpacing={4}>
            {contactInformationComponentList.map((network, index) => (
              <Grid item key={index} xs={12} sm={"auto"}>
                <Link
                  className="contact-details"
                  component="a"
                  href={network.url}
                  underline="none"
                  target="_blank"
                  rel="noreferrer"
                >
                  {network?.icon}
                  {network.name}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </footer>
    </>
  );
};

export default LandingPage;
