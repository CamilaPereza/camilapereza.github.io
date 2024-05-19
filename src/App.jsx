import { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact.page";
import ProjectsPage from "./pages/projects.page";

import data from "../data/cv.json";
import "./App.css";
import LandingPage from "./pages/landing/landing.page";

const defaultTheme = createTheme({
  palette: {
    primary: { main: "#fb7d00" },
    background: { default: "#000" },
  },
  // typography: {
  //   allVariants: {
  //     color: "#fb7d00",
  //   },
  // },
});

// const navItems = ["Inicio", "Sobre mi", "Contacto", "Proyectos"];

const { projects, contact_information } = data;

const navItems = [
  { name: "Inicio", href: "", component: <HomePage /> },
  {
    name: "Sobre mi",
    href: "about",
    component: <ProjectsPage projects={projects} />,
  },
  {
    name: "Proyectos",
    href: "projects",
    component: <ProjectsPage projects={projects} />,
  },
  {
    name: "Contacto",
    href: "contact",
    component: <ContactPage contactInformation={contact_information} />,
  },
];

function App() {
  const [itemSelected, setItemSelected] = useState(navItems[0]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={item} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth={false} disableGutters>
        <CssBaseline />

        {/* <GlobalStyles styles={{ body: { backgroundColor: "cyan" } }} /> */}

        <AppBar component="nav" color="primary" elevation={0}>
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  href={`#${item.href}`}
                  // color="secondary"
                  sx={{ color: "black", fontWeight: "bold" }}
                  onClick={() => setItemSelected(item)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <LandingPage contactInformation={contact_information} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
