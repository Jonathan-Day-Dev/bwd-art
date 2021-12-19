import { useEffect } from 'react';

import styles from "./Contest.module.css";

import Card from "../UI/Card";

const Contest = (props) => {
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
    <Card className={styles.card}>
      <h2>Contest page coming soon</h2>
    </Card>
  );
};

export default Contest;
