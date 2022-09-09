import styles from "./Programs.module.css";
import bowl from "../../assets/embre.jpg";

import React, { useEffect, useRef } from "react";
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
        maxWth={{ xs: "80%", md: "40%" }}
        title="The Art of Fiber"
        body={
          <div>
            <p className="leading-tight">
              BAA wants to promote artistic expression in all its forms, and has
              extended its media horizon to include fiber and textile arts.
              Anyone interested in fiber and textile arts in invited to join.
            </p>
            <p className="leading-tight">
              The new group includes traditional fiber arts such as embroidery,
              weaving, and macramé, but artistic expression is open to a wide
              range of media. Fiber and textiles are among the oldest artistic
              expressions known. This new group brings these ancient and
              traditional arts into a contemporary environment where they can
              inspire and grow in relation to our modern contemporary world.
            </p>
            <img src={bowl} alt="textile artists" className="mb-4 w-[50%] mr-auto ml-auto" />
            <p className="leading-tight">
              There are many textile artists in our community, and our goal is
              to bring them together and provide a forum that inspires and
              encourages others to try their artistic hand at textiles.
            </p>
            <p className="leading-tight">
              The only requirement for membership in the BAA Fiber and Textiles
              Arts group is membership in the art association. Cost of
              membership is only $25. For further information, call or text
              Engle at 325-203-2370.
            </p>
          </div>
        }
      />
      <CustomAcc events={events} title="Our Programs" />
    </Box>
  );
};

export default Program;
