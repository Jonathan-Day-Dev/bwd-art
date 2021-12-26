import { useEffect } from "react";
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from "./Features.module.css";

// import vid from "../../assets/vid.png";
// import demos from "../../assets/demos.png";
// import galleries from "../../assets/galleries.jpg";

import Card from "../UI/Card";
import OnlineClasses from '../OnlineClasses/Classes';

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
      <Link to="/members" className={styles.button}><p className={styles['inner-card']}>CLICK HERE TO SEE OUR MEMBERS' ART GALLERIES!</p></Link>
      <OnlineClasses />
      {/* <Link to="/classes" className={styles.button}><img src={vid} alt="videos" /></Link> */}
      {/* <Link to="/contest" className={styles.button}><img src={demos} alt="videos" /></Link> */}
    </Card>
  );
};

export default Features;
