// import belli from "../../assets/new/belli.jpg";
// import boyd from "../../assets/boydharrisposter.jpg";
import enplein from "../../assets/enplein.jpg";

import React from "react";
import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      // maxWth="40%"
      maxWth={{ xs: "80%", lg: "50%", xl: "40%" }}
      title="En Plein Air"
      body={
        <img src={enplein} alt="Boyd Harris Exhibit" width="100%" />
      }
      // learn={true}
    />
  );
};

export default Board;
