import styles from "./Hamburger.module.css";

import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Hamburger = (props) => {
  return (
    <CSSTransition>
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
            to="/members"
            onClick={props.onToggle}
            className={styles["small-menu__btn"]}
          >
            Members Galleries
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
    </CSSTransition>
  );
};

export default Hamburger;
