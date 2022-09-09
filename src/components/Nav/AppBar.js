import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import pages from "./tab_data";
import { MyLogo, MyNav, StyledType } from "./styles";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ opacity: 0.9 }}>
      <MyNav>
        <Container sx={{ height: "5rem" }}>
          <Toolbar disableGutters sx={{ height: "100%" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                height: "100%",
              }}
            >
              <MyLogo src={logo} alt={logo} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="button">
                      <Typography
                        component={Link}
                        to={page.path || { pathname: page.link }}
                        sx={{ textDecoration: "none" }}
                      >
                        {page.name}
                      </Typography>
                      {/* <Link to={page.path || { pathname: page.link }}>
                        {page.name}
                      </Link> */}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              BAA Offical Site
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "black",
                    display: "block",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Typography
                    component={Link}
                    to={page.path || { pathname: page.link }}
                    sx={{
                      textDecoration: "none",
                      // fontFamily: "Caveat",
                      // fontSize: "1.2rem",
                      // color: "black",
                    }}
                  >
                    <StyledType>{page.hide ? null : page.name}</StyledType>
                  </Typography>
                  {/* <Link to={page.path || { pathname: page.link }}>
                    {page.hide ? null : page.name}
                  </Link> */}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </MyNav>
    </AppBar>
  );
};
export default ResponsiveAppBar;
