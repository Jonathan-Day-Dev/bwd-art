import CustomCard from "../UI/CustomCard";

import { useRef, useEffect } from "react";

const History = () => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <CustomCard
      title="About Us"
      body={
        <div ref={topRef}>
          <p>
            Whether you are new to the arts, just fooling around, or already a
            professional, we have a place for you! Join us in the joys of
            creativity and self-expression. Visit our gallery at The Art Center,
            become a member, exhibit your work, attend a class or workshop, or
            lead one yourself. You can help us offer more variety in our
            programs, and keep our group running smoothly. New energy keeps the
            Brownwood Art Association fresh and lively!
          </p>
          <p>The Art Center is also available to rent for your event.</p>
          <p>
            Right now, we have art lessons with Claudette West on Tuesday
            afternoons, a photo group that meets monthly, a People Painters
            group, and a new Fiber &amp; Textile Artists group. Gallery exhibits
            change monthly and generally feature our members’ work. But there is
            room for so much more...when YOU get involved! Together, we can make
            this the arts hub of our area.
          </p>
          <p>
            To find how you fit into the Brownwood Art Association and The Art
            Center stop by our gallery at 215 Fisk. For more information call
            325-641-2916 or email brownwoodart@gmail.com.
          </p>
          <p>Art can mean many things. Come share yours with us.</p>
          <p>
            <em> - Daniel Graham</em>
          </p>
        </div>
      }
    />
  );
};

export default History;
