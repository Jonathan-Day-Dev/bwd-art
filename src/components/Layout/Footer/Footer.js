import { styled } from "@mui/system";
import React from "react";

import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Link } from "react-router-dom";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#2F4F4F",
  width: "100%",
  paddingLeft: "10rem",
  paddingRight: "10rem",
  paddingTop: "3rem",
  paddingBottom: "3rem",
}));

const StyledGrid = styled(Grid)({
  color: "white",
  fontFamily: "Arial",
  fontSize: "1rem",
  fontWeight: "bold",
});

const Footer = () => {
  return (
    <StyledFooter>
      <Grid
        container
        justifyContent="center"
        spacing={8}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <StyledGrid item>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" sx={{ textDecoration: "none", color: "white" }}>
              Home
            </Grid>
          </Grid>
        </StyledGrid>
        <StyledGrid item>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="//checkout.square.site/merchant/3M8VC0T8TZ955/checkout/CGOPRSY5DJFUMQZHL5MXFQU4"
              sx={{ textDecoration: "none", color: "white" }}
            >
              Donate
            </Grid>
            <Grid item component={Link} to="/about" sx={{ textDecoration: "none", color: "white" }}>
              About Us
            </Grid>
            <Grid item component={Link} to="/history" sx={{ textDecoration: "none", color: "white" }}>
              Our History
            </Grid>
            <Grid
              item
              component={Link}
              to="//checkout.square.site/merchant/3M8VC0T8TZ955/checkout/BRMFSPKMUFN3T3XT2SYEYPZ6"
              sx={{ textDecoration: "none", color: "white" }}
            >
              Membership
            </Grid>
          </Grid>
        </StyledGrid>
        <StyledGrid item>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/members" sx={{ textDecoration: "none", color: "white" }}>
              Galleries
            </Grid>
            <Grid item component={Link} to="/event" sx={{ textDecoration: "none", color: "white" }}>
              Upcoming Events
            </Grid>
            <Grid item component={Link} to="/programs" sx={{ textDecoration: "none", color: "white" }}>
              Our Programs
            </Grid>
          </Grid>
        </StyledGrid>
        <StyledGrid item>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/contact" sx={{ textDecoration: "none", color: "white" }}>
              Contact Us
            </Grid>
          </Grid>
        </StyledGrid>
      </Grid>

      <Grid
        container
        sx={{ justifyContent: { xs: "center", md: "flex-end" }, flexWrap: "nowrap" }}
        spacing={4}
      >
        <Grid item>
          <a
            href="https://www.facebook.com/brownwoodart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ fontSize: { xs: "3rem", md: "4rem"} }} color="social" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.twitter.com/BrownwoodArt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ fontSize: { xs: "3rem", md: "4rem"} }} color="social" />
          </a>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
