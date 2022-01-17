import { useEffect } from "react";

import styles from "./Features.module.css";

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
      <OnlineClasses />
    </Card>
  );
};

export default Features;
