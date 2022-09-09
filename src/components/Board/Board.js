// import belli from "../../assets/new/belli.jpg";
import boyd from "../../assets/boydharrisposter.jpg";

import React from "react";
import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      maxWidth={{ xs: "80%", lg: "50%", xl: "40%" }}
      title="Boyd Harris Exhibit"
      body={
        <img src={boyd} alt="Boyd Harris Exhibit" width="10%" />
      }
      learn={true}
    />
  );
};

export default Board;
