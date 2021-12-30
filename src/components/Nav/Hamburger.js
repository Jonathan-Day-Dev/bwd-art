import styles from "./Hamburger.module.css";

import { Link } from "react-router-dom";

const Hamburger = (props) => {
  return (
    <ul
      className={`${styles["small-menu"]} ${
        props.isOpen ? styles.fit : styles.hide
      }`}
    >
      <li>
        <Link
          to="/home"
          onClick={props.onToggle}
          className={styles["small-menu__btn"]}
        >
          Home
        </Link>
      </li>
      <a
        href="https://brownwood-art.square.site/"
        onClick={props.onToggle}
        className={styles["small-menu__btn"]}
      >
        Events
      </a>
      <li>
        <Link
          to="/calendar"
          onClick={props.onToggle}
          className={styles["small-menu__btn"]}
        >
          Calendar
        </Link>
      </li>
      <li>
        <a
          href="https://square.link/u/nBLV2h9F"
          onClick={props.onToggle}
          className={styles["small-menu__btn"]}
        >
          Donate
        </a>
      </li>
      <li>
        <a
          href="https://square.link/u/ytQ3nnnH"
          className={styles["small-menu__btn"]}
          onClick={props.onToggle}
        >
          Membership
        </a>
      </li>
    </ul>
  );
};

export default Hamburger;
