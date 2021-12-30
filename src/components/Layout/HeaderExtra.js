import styles from './HeaderExtra.module.css';
import portrait from '../../assets/portrait.jpg';

import { Link } from 'react-router-dom';

const HeaderExtra = (props) => {
  return (
    <div className={styles.upcoming}>
      <h2 className={styles["upcoming__title"]}>Upcoming Events</h2>
      <div className={styles.event}>
        <h3>Portrait Workshop</h3>
        <img src={portrait} className={styles.portrait} alt={portrait} />
      </div>
      <Link to="/event" className={styles["event-link"]}>
        See Details
      </Link>
    </div>
  );
};

export default HeaderExtra;
