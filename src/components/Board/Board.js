// import belli from "../../assets/new/belli.jpg";
import boyd from "../../assets/boydharrisposter.jpg";

import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      maxWth={{ xs: "80%", lg: "50%", xl: "40%" }}
      title="Boyd Harris Exhibit"
      body={
        <img src={boyd} alt="Boyd Harris Exhibit" />
      }
      learn={true}
    />
  );
};

export default Board;
