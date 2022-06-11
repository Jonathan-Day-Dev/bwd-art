import poster from "../../assets/christine_poster.jpg";

import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      maxWth={{ xs: "80%", lg: "60%" }}
      title=""
      body={
        <img src={poster} alt="The Art of Fiber" />
      }
      learn={false}
    />
  );
};

export default Board;
