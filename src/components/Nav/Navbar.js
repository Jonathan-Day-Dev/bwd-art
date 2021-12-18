import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import { pageActions } from '../../store/index';

const Hamburger = (props) => {
  return (
    <ul className={styles["small-menu"]}>
      <li>Home</li>
      <li>About Us</li>
      <li>Donate</li>
      <li>Membership</li>
      <li>2022 Virtual Portrait Contest</li>
      <li>Online Art Demos</li>
    </ul>
  );
};

const Navbar = (props) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const homeHandler = () => {
    dispatch(pageActions.home());
  }

  const aboutHandler = () => {
    dispatch(pageActions.about())
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles["full-menu"]}>
        <img src={logo} alt="logo" className={styles.logo} />
        <section className={styles.links}>
          <button onClick={homeHandler} className={styles["link"]}>
            Home
          </button>
          <button onClick={aboutHandler} className={styles["link"]}>
            About Us
          </button>
          <a href="http://localhost:3000" className={styles["link"]}>
            Donate
          </a>
          <a href="http://localhost:3000" className={styles["link"]}>
            Membership
          </a>
        </section>
        <section className={styles.links}>
          <a href="http://localhost:3000" className={styles["link-toggle"]}>
            2022 Virtual Portrait Contest
          </a>
          <a href="http://localhost:3000" className={styles["link-toggle"]}>
            Online Art Demos
          </a>
        </section>
      </div>
      <div className={styles["hamburger-menu"]}>
        <img src={logo} alt="logo" className={styles["logo-small"]} />
        {!showMenu && (
          <FiMenu className={styles["burger-btn"]} onClick={toggleMenu} />
        )}
        {showMenu && (
          <div>
            <MdClose className={styles["close-btn"]} onClick={toggleMenu} />
            <Hamburger />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
