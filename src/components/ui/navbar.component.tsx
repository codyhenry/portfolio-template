import { useState } from "react";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MdMenu } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const NavBarButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const DrawerLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(2),
  width: "100%",
  height: 30,
}));

/* CODE REFERENCE
 * https://mui.com/material-ui/react-app-bar/#DrawerAppBar.tsx
 */

const pages = ["Home", "About", "Projects", "Resume"];
const drawerWidth = 240;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // FIX: make styled components & links
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "rgba(0,1,27,0.4)", height: "100%" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <List>
        {pages.map((item) => (
          <DrawerLink key={item} to={item === "Home" ? "/" : item}>
            {item}
          </DrawerLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        enableColorOnDark
        sx={{ bgcolor: "rgba(0,1,27,0.4)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "text.primary" }}
          >
            <MdMenu />
          </IconButton>
          <Typography
            variant="h6"
            color="text.primary"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : item}
                style={{ textDecoration: "none" }}
              >
                <NavBarButton>{item}</NavBarButton>
              </Link>
            ))}
          </Box>
          <Typography
            variant="h6"
            component="div"
            color="text.primary"
            sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
          >
            MUI
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
      </Box>
    </>
  );
}
