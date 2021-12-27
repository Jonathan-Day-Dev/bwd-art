import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import portrait from '../../assets/portrait.jpg';

import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={styles.full}>
      <header className={styles.header}>
        <div className={styles.top}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div>
            <h1>Brownwood Art Association</h1>
            <div className={styles.info}>
              <p>P.O. Box 782</p>
              <p>Brownwood, Texas 76804</p>
              <p>(325) 641-2916</p>
            </div>
          </div>
        </div>
        <p className={styles.caption}>
          Mural by Christine Brisley-Wade and June Musick on the Art Center
          Building at 215 Fisk Ave.
        </p>
      </header>
      <div className={styles.upcoming}>
        <h2 className={styles['upcoming__title']}>Upcoming Events</h2>
        <div className={styles.event}>
          <h3>Portrait Workshop</h3>
          <img src={portrait} className={styles.portrait} alt={portrait} />
        </div>
        <Link to="/event" className={styles['event-link']}>See Details</Link>
      </div>
    </div>
  );
};

export default Header;
