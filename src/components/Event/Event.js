import styles from "./Event.module.css";
import textile from "../../assets/textile_img.png";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";

import events from "./components/event_data";

import CustomCard from "../UI/CustomCard";
import CustomAcc from "./components/CustomAcc";

const Event = (props) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className={styles.container} ref={topRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <CustomCard
          className={styles["textile-card"]}
          maxWth={{ xs: "80%", md: "30%" }}
          title="Tuesday, March 8"
          body={
            <div>
              <p className="text-center font-semibold text-lg mb-4">6:00 pm</p>
              <img src={textile} alt="textile artists" className="mb-4" />
              <p className="leading-tight">
                We are hosting an Organizational Meeting for the Fiber &amp;
                Textile Arts Guild at the Brownwood Art Association. Anyone who
                is interested in fiber &amp; texile art is encouraged to attend!
              </p>
            </div>
          }
        ></CustomCard>
        <CustomAcc events={events} />
      </Box>
    </div>
  );
};

export default Event;
