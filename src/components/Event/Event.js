import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";

import events from "./components/event_data";

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
    <div ref={topRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-evenly",
          alignItems: "center",
          maxWidth: "90vw"
        }}
      >
        <CustomAcc events={events} title="Upcoming Events" />
      </Box>
    </div>
  );
};

export default Event;
