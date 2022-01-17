import styles from "./HeaderExtra.module.css";
// import portrait from '../../assets/portrait.jpg';

import artcenter from "../../assets/artcenter02.jpg";

// import { Link } from 'react-router-dom';

const HeaderExtra = (props) => {
  return (
    <div className={styles.upcoming}>
      {/* <h2 className={styles["upcoming__title"]}>Upcoming Events</h2>
      <div className={styles.event}>
        <h3>Portrait Workshop</h3>
        <img src={portrait} className={styles.portrait} alt={portrait} />
      </div>
      <Link to="/event" className={styles["event-link"]}>
        See Details
      </Link> */}
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
