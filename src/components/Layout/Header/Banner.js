import backdrop from "../../../assets/backdrop.jpg";

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          height: { xs: "50vh", md: "65vh", lg: "90vh", xl: "95vh" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          mt: {xs: "2.5rem", md: "1rem"}
        }}
      >
        <Typography
          variant="title"
          sx={{
            position: "relative",
            top: { sm: 0, md: 20, xl: 30 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.2rem", sm: "3rem", md: "4.5rem", lg: "6rem" },
            }}
          >
            Brownwood Art Association
          </Typography>
          <Typography variant="info">
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "3rem",
                  lg: "4rem",
                },
                fontWeight: 700,
              }}
            >
              215 Fisk Ave
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "3rem",
                  lg: "4rem",
                },
                fontWeight: 700,
              }}
            >
              Brownwood, TX 76804
            </Typography>
          </Typography>
          <Typography variant="info">
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "2rem",
                  lg: "3rem",
                },
                fontWeight: 700,
              }}
            >
              Open 2:00 pm - 6:00 pm Monday - Friday
            </Typography>
          </Typography>
          <Typography variant="info">
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.3rem",
                  md: "2rem",
                  lg: "3rem",
                },
                fontWeight: 700,
              }}
            >
              (325) 641-2916
            </Typography>
          </Typography>
        </Typography>
        {/* <Box sx={{
          backgroundColor: "white",
          marginTop: "1rem",
          border: "4px solid blue",
          padding: "0.5rem",
          fontWeight: "bold",
          fontSize: "1.1rem",
          maxSize: "80%"
        }}>The gallery will be closed September 5 for Labor Day</Box> */}

        {/* Button Group inside Banner */}
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              fontSize: { md: "1rem", lg: "1.8rem" },
              width: "20rem",
              marginBottom: { xs: "0.5rem", md: "0" },
            }}
          >
            <Link to="/event" style={{textDecoration: "none", color: "white"}}>Upcoming Events</Link>
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              fontSize: { md: "1rem", lg: "1.8rem" },
              width: "20rem",
              marginBottom: { xs: "0.5rem", md: "0" },
            }}
          >
            <Link to="/programs" style={{textDecoration: "none", color: "white"}}>View Our Programs</Link>
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Banner;
