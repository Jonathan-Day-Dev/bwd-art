// import belli from "../../assets/new/belli.jpg";
// import boyd from "../../assets/boydharrisposter.jpg";
import enplein from "../../assets/enplein.jpg";
// import styles from "./Board.module.css";

import React from "react";
import Link from '@mui/material/Link';
import CustomCard from "../UI/CustomCard";
import Box from '@mui/material/Box'

const Board = () => {
  return (
    <CustomCard
      // maxWth="40%"
      maxWth={{ xs: "80%", lg: "50%", xl: "40%" }}
      title="En Plein Air"
      body={
        <Box sx={{ border: "1px solid green"}}>
          <Link href="http://brownwoodart-245781.square.site/" color="#d32f2f">
            {<img src={enplein} alt="Boyd Harris Exhibit" width="100%" />}
          </Link>
        </Box>
      }
      // learn={true}
    />
  );
};

export default Board;
