import styles from "./Daniel.module.css";
import daniel from "../../assets/daniel.jpg";

import Card from "../UI/Card";

const Daniel = () => {
  return (
    <Card className={styles.container}>
      <img src={daniel} alt="Daniel" className={styles.image} />
      <div className={styles.info}>
        <h2>Meet The Gallery Guy</h2>
        <p>
          Meet Daniel Graham, The Gallery Guy, who makes it possible to have The
          Art Center gallery open five days a week. Daniel is our new Gallery
          Attendant. In addition to being a gallery attendant, Daniel is a
          beekeeper, a drummer, and an environmentalist. He is a fire starter, a
          train lover, a garlic grower, a talker and a listener. We invite you
          to stop by The Art Center weekdays between 2 p.m. and 6 p.m. to meet
          him!
        </p>
        <p>
            This portrait was done by Sandra McSwain in The People Painters Group.
        </p>
      </div>
    </Card>
  );
};

export default Daniel;
