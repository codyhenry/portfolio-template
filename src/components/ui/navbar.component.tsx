import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MdMenu } from "react-icons/md";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const NavBarLink = styled(Link)`
  text-decoration: none;
`;

/* CODE REFERENCE
 * https://mui.com/material-ui/react-app-bar/#DrawerAppBar.tsx
 */

const pages = ["Home", "About", "Projects", "Resume"];
const drawerWidth = 240;

function NavBar({ themeChanger }: any) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItemButton key={item}>
            <Link to={item === "Home" ? "/" : item} />
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
      <Button onClick={themeChanger} sx={{ color: "#fff" }}>
        Switch Theme
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MdMenu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((item) => (
              <NavBarLink key={item} to={item === "Home" ? "/" : item}>
                <Button sx={{ color: "#fff" }}>{item}</Button>
              </NavBarLink>
            ))}
            <Button onClick={themeChanger} sx={{ color: "#fff" }}>
              Switch Theme
            </Button>
          </Box>
          <Typography
            variant="h6"
            component="div"
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
export default NavBar;
