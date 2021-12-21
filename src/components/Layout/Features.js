import { useEffect } from "react";
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from "./Features.module.css";

import vid from "../../assets/vid.png";
import demos from "../../assets/demos.png";

import Card from "../UI/Card";

// import { pageActions } from '../../store/index';

const Features = (props) => {
  // const dispatch = useDispatch();

  // const videoHandler = () => {
  //   dispatch(pageActions.video())
  // }

  // const contestHandler = () => {
  //   dispatch(pageActions.contest())
  // }

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
      <Link to="/classes" className={styles.button}><img src={vid} alt="videos" /></Link>
      <Link to="/contest" className={styles.button}><img src={demos} alt="videos" /></Link>
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
