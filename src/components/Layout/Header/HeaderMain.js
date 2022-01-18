import styles from "./HeaderMain.module.css";

import logo from "../../../assets/logo.png";

import { Link } from 'react-router-dom';

const HeaderMain = (props) => {
  return (
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
      <Link to="/event" className={styles["event-btn"]}>
        View Upcoming Events
      </Link>
    </header>
  );
};

export default HeaderMain;
