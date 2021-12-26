import { useEffect } from "react";

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
      <h2>Welcome to your next inspiration!</h2>
      {/* <h3>
        Our new video series will feature a well-curated selection of artists
        and mediums. ​Highlighting a lifetime’s worth of skill in a short,
        enjoyable format. We will be adding new content often with some of the
        demos becoming in-person workshops and classes!
      </h3> */}
      <h2>Come learn with us!</h2>
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
