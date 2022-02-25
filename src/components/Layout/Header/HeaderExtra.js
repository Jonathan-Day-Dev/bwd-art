import styles from "./HeaderExtra.module.css";

import artcenter from "../../../assets/artcenter02.jpg";

import Card from "../../UI/Card";

const HeaderExtra = (props) => {
  return (
    <Card className={styles.upcoming}>
      <h3 className={styles.title}>Our Gallery Hours!</h3>
      <div className={styles["sm-btm"]}>
        <img src={artcenter} alt="art-center" className={styles.image} />
        <div className={styles.time}>
          <p>Call or visit us</p>
          <p>Monday - Friday</p>
          <p>2:00 pm - 6:00 pm</p>
          <p>(325) 641-2916</p>
        </div>
      </div>
    </Card>
  );
};

export default HeaderExtra;
