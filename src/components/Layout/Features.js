import styles from "./Features.module.css";

import React, { useRef, useEffect } from "react";

import Card from "../UI/Card";
import OnlineClasses from '../OnlineClasses/Classes';

const Features = (props) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div ref={topRef}>
    <Card className={styles.features}>
      <OnlineClasses />
    </Card>
    </div>
  );
};

export default Features;
