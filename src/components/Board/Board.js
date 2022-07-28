// import poster from "../../assets/christine_poster.jpg";
import belli from "../../assets/new/belli.jpg";

import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      maxWth={{ xs: "80%", lg: "50%", xl: "40%" }}
      title="Martin Belli Exhibit"
      body={
        <img src={belli} alt="The Art of Fiber" />
      }
      learn={false}
    />
  );
};

export default Board;
