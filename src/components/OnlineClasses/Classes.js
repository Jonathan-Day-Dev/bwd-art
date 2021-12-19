import { useEffect } from 'react';

import styles from "./Classes.module.css";

import Card from "../UI/Card";

const Classes = (props) => {
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
      <h1>Classes page coming soon</h1>
    </Card>
  );
};

export default Classes;
