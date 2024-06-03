import { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact.page";
import ProjectsPage from "./pages/projects.page";

import data from "../data/cv.json";
import "./App.css";
import LandingPage from "./pages/landing/landing.page";
import { backgroundColor, primaryColor } from "./common/constants";

const defaultTheme = createTheme({
  palette: {
    primary: { main: primaryColor },
    background: { default: backgroundColor },
  },
  typography: {
    allVariants: { color: primaryColor },
  },
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

const drawerWidth = 240;

function App() {
  const [itemSelected, setItemSelected] = useState(navItems[0]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: primaryColor,
        height: "100%",
      }}
    >
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        Menú
      </Typography>
      <Divider /> */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={`#${item.href}`} sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.name}
                color={backgroundColor}
                disableTypography
              />
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
              color="inherit"
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

        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <LandingPage contactInformation={contact_information} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
