import styles from "./HeaderExtra.module.css";

import artcenter from "../../assets/artcenter02.jpg";

const HeaderExtra = (props) => {
  return (
    <div className={styles.upcoming}>
      <h3 className={styles.title}>We Have New Hours!</h3>
      <img src={artcenter} alt="art-center" />
      <div>
        <p>Monday - Friday</p>
        <p>2:00 pm - 6:00 pm</p>
      </div>
    </div>
  );
};

export default HeaderExtra;
