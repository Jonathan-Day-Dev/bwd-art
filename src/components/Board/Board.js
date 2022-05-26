import fiber from "../../assets/fiber.jpg"

import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      maxWth={{ xs: "80%", lg: "60%" }}
      title=""
      body={
        <img src={fiber} alt="The Art of Fiber" />
      }
    />
  );
};

export default Board;
