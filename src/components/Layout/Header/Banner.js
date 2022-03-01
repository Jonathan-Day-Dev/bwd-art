import backdrop from "../../../assets/backdrop.jpg";

import { Fragment } from "react";
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
        }}
      >
        <Typography variant="title" sx={{
          position: "relative",
          top: { sm: 0, md: 20, xl: 30},
        }}>
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
              }}
            >
              PO Box 782
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
              }}
            >
              (325) 641-2916
            </Typography>
          </Typography>
        </Typography>

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
            <Link to="/event">Upcoming Events</Link>
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
            <Link to="/programs">View Our Programs</Link>
          </Button>
        </Box>
      </Box>

      {/* Caption about mural at the bottom of banner */}
      <Box
        sx={{
          width: "100vw",
          height: "3rem",
          backgroundColor: "white",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Typography variant="caption">
          Mural by Christine Brisley-Wade and June Musick on the Art Center
          Building at 215 Fisk Ave.
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Banner;
