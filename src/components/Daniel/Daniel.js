import daniel from "../../assets/daniel.jpg";

import CustomCard from "../UI/CustomCard";

const Daniel = () => {
  return (
    <CustomCard
      maxWth={{ xs:"80%", md:"30%" }}
      title="Meet The Gallery Guy"
      body={
        <div>
          <p>
            Meet Daniel Graham, The Gallery Guy, who makes it possible to have
            The Art Center gallery open five days a week. Daniel is our new
            Gallery Attendant. In addition to being a gallery attendant, Daniel
            is a beekeeper, a drummer, and an environmentalist. He is a fire
            starter, a train lover, a garlic grower, a talker and a listener. We
            invite you to stop by The Art Center weekdays between 2 p.m. and 6
            p.m. to meet him!
          </p>
          <p>
            This portrait was done by Sandra McSwain in The People Painters
            Group.
          </p>
        </div>
      }
      imgPath={daniel}
    >
    </CustomCard>
  );
};

export default Daniel;
