import styles from "./Classes.module.css";
import React from "react";

import Card from "../UI/Card";

const Classes = (props) => {

  return (
    <Card className={styles.card}>
      <h2 className={styles.welcome}>Welcome to your next inspiration!</h2>
      <h2 className={styles.learn}>Come learn with us!</h2>
      <div className={styles["block-one"]}>
        <h4 className={styles["block-title"]}>
          Palette Knife Demo 1 & 2 - Christine Brisley
        </h4>
        <div className={styles.vids}>
          <iframe
            width="200"
            height="180"
            src="https://www.youtube.com/embed/Wte3rdje2q0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="200"
            height="180"
            src="https://www.youtube.com/embed/lKkZkKW5Irg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Card>
  );
};

export default Classes;
