import styles from "./Programs.module.css";
import bowl from "../../assets/bowl_img.png";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";

import CustomAcc from "./components/CustomAcc";
import CustomCard from "../UI/CustomCard";

import events from "./components/program_data";

const Program = (props) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <Box
      component="div"
      ref={topRef}
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
          title="Tuesday, March 15"
          body={
            <div>
              <p className="text-center font-semibold text-lg mb-4">2:00 pm</p>
              <img src={bowl} alt="textile artists" className="mb-4" />
              <p className="leading-tight">
                The first meeting of our Fiber &amp; Textile group was a great
                success. More than 20 artists came, and shared their art and
                hopes for future skills. The group's next meeting will be next
                Tuesday, March 15, at 2:00 at The Art Center. Linda Morris, who
                created this piece, will be giving a demonstration for making
                shirred rugs. Everyone is invited to participate. There is no
                cost, the only requirement is to join the Brownwood Art
                Assn...only $25 for the year. Bring a project to work on, and
                invite other Textile artists. We are very excited about the
                group's future!
              </p>
            </div>
          }
        />
        <CustomAcc events={events} title="Our Programs" />
    </Box>
  );
};

export default Program;
