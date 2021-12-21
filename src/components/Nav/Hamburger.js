import styles from './Hamburger.module.css';

import { Link } from 'react-router-dom';

const Hamburger = (props) => {
  return (
    <ul
      className={`${styles["small-menu"]} ${
        props.isOpen ? styles.fit : styles.hide
      }`}
    >
      <li>
        <Link to="/home" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/calendar" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Calendar
        </Link>
      </li>
      <li>
        <Link to="https://brownwood-art.square.site/" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Donate
        </Link>
      </li>
      <li>
        <Link
          to="https://brownwood-art.square.site/"
          className={styles["small-menu__btn"]}
          onClick={props.onToggle}
        >
          Membership
        </Link>
      </li>
      <li>
        <Link to="/contest" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          2022 Contest
        </Link>
      </li>
      <li>
        <Link to="/classes" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Videos
        </Link>
      </li>
      <a href="https://brownwood-art.square.site" onClick={props.onToggle} className={styles["small-menu__btn"]}>
            Square Store
          </a>
    </ul>
  );
};

export default Hamburger;