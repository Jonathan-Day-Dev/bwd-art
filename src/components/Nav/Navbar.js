import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import { pageActions } from "../../store/index";

const Hamburger = (props) => {
  const dispatch = useDispatch();

  const homeHandler = () => {
    dispatch(pageActions.home());
    props.onClick();
  };

  const aboutHandler = () => {
    dispatch(pageActions.about());
    props.onClick();
  };

  const donateHandler = () => {
    dispatch(pageActions.donate());
    props.onClick();
  };

  const contactHandler = () => {
    dispatch(pageActions.contact());
    props.onClick();
  };

  const calendarHandler = () => {
    dispatch(pageActions.calendar());
    props.onClick();
  };

  const membershipHandler = () => {
    dispatch(pageActions.membership());
    props.onClick();
  };

  return (
    <ul className={styles["small-menu"]}>
      <li>
        <button onClick={homeHandler} className={styles["small-menu__btn"]}>
          Home
        </button>
      </li>
      <li>
        <button onClick={aboutHandler} className={styles["small-menu__btn"]}>
          About Us
        </button>
      </li>
      <li>
        <button onClick={contactHandler} className={styles["small-menu__btn"]}>
          Contact
        </button>
      </li>
      <li>
        <button onClick={calendarHandler} className={styles["small-menu__btn"]}>
          Calendar
        </button>
      </li>
      <li>
        <button onClick={donateHandler} className={styles["small-menu__btn"]}>
          Donate
        </button>
      </li>
      <li>
        <button
          onClick={membershipHandler}
          className={styles["small-menu__btn"]}
        >
          Membership
        </button>
      </li>
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
  };

  const aboutHandler = () => {
    dispatch(pageActions.about());
  };

  const donateHandler = () => {
    dispatch(pageActions.donate());
  };

  const contactHandler = () => {
    dispatch(pageActions.contact());
  };

  const calendarHandler = () => {
    dispatch(pageActions.calendar());
  };

  const membershipHandler = () => {
    dispatch(pageActions.membership());
  };

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
          <button onClick={contactHandler} className={styles["link"]}>
            Contact
          </button>
          <button onClick={calendarHandler} className={styles["link"]}>
            Calendar
          </button>
          <button onClick={donateHandler} className={styles["link"]}>
            Donate
          </button>
          <button onClick={membershipHandler} className={styles["link"]}>
            Membership
          </button>
        </section>
        {/* <section className={styles.links}>
          <button className={styles["link-toggle"]}>
            2022 Virtual Portrait Contest
          </button>
          <button className={styles["link-toggle"]}>
            Online Art Demos
          </button>
        </section> */}
      </div>
      <div className={styles["hamburger-menu"]}>
        <img src={logo} alt="logo" className={styles["logo-small"]} />
        {!showMenu && (
          <FiMenu className={styles["burger-btn"]} onClick={toggleMenu} />
        )}
        {showMenu && (
          <div>
            <MdClose className={styles["close-btn"]} onClick={toggleMenu} />
            <Hamburger onClick={toggleMenu} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
