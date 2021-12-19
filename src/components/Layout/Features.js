import { useEffect } from "react";

import styles from "./Features.module.css";

import vid from "../../assets/vid.png";
import demos from "../../assets/demos.png";
// import hasBegun from "../../assets/hasBegun.png";
// import merlot from "../../assets/merlot.png";
// import anniversary from "../../assets/anniversary.jpg";
// import galleries from "../../assets/galleries.jpg";

import Card from "../UI/Card";

const Features = (props) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Card className={styles.features}>
      <button><img src={vid} alt="videos" /></button>
      <button><img src={demos} alt="videos" /></button>
      {/* <img src={vid} alt="videos" />
      <img src={demos} alt="videos" />
      <img src={hasBegun} alt="videos" />
      <img src={merlot} alt="videos" />
      <img src={anniversary} alt="videos" />
      <img src={galleries} alt="videos" /> */}
    </Card>
  );
};

export default Features;
