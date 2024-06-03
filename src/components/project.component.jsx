import LaunchIcon from "@mui/icons-material/Launch";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import defaultImage from "../assets/img/project_images/default.jpg";
import { primaryColor } from "../common/constants";

const ProjectComponent = ({ project }) => {
  return (
    <Card
      sx={{
        minWidth: "300px",
        textAlign: "justify",
        border: `2px solid ${primaryColor}`,
        backgroundColor: "transparent",
        color: primaryColor,
      }}
    >
      <CardMedia
        sx={{ height: "100px" }}
        image={project.url_image || defaultImage}
        title={`${project.project_name} image`}
      />
      <CardHeader
        title={project.project_name}
        subheader={
          <>
            <Typography>{project.rol}</Typography>
            <Typography>
              {project.start_date} - {project.end_date || "Actualidad"}
            </Typography>
          </>
        }
        action={
          <IconButton color="inherit" href={project.url} target="_blank">
            <LaunchIcon />
          </IconButton>
        }
        sx={{ textAlign: "left" }}
        color="primary"
      />
      <CardContent>{project.description}</CardContent>
    </Card>
  );
};

export default ProjectComponent;
