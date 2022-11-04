// import belli from "../../assets/new/belli.jpg";
// import boyd from "../../assets/boydharrisposter.jpg";
// import enplein from "../../assets/enplein.jpg";
// import styles from "./Board.module.css";
import poster from "../../assets/chiliposter.jpg";

import React from "react";
// import Link from '@mui/material/Link';
import CustomCard from "../UI/CustomCard";
import Box from '@mui/material/Box'

const Board = () => {
  return (
    <CustomCard
      // maxWth="40%"
      maxWth={{ xs: "80%", lg: "50%", xl: "40%" }}
      // title="En Plein Air"
      body={
        <Box sx={{ border: "1px solid green"}}>
          {<img src={poster} alt="Chili Lunch Fundraiser" width="100%" />}
        </Box>
      }
      // learn={true}
    />
  );
};

export default Board;
