// import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

// import { pageActions } from "../../store/index";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu(showMenu => !showMenu);
  }
  // const dispatch = useDispatch();
  // const showMenu = useSelector((state) => state.page.showMenu);
  // const page = useSelector((state) => state.page.page);

  // const toggleMenu = () => {
  //   dispatch(pageActions.toggleMenu());
  // };

  // const homeHandler = () => {
  //   dispatch(pageActions.home());
  // };

  // const aboutHandler = () => {
  //   dispatch(pageActions.about());
  // };

  // const donateHandler = () => {
  //   dispatch(pageActions.donate());
  // };

  // const contactHandler = () => {
  //   dispatch(pageActions.contact());
  // };

  // const calendarHandler = () => {
  //   dispatch(pageActions.calendar());
  // };

  // const membershipHandler = () => {
  //   dispatch(pageActions.membership());
  // };

  // const activeLink = pageName => {
  //   return `${styles.link} ${page === pageName ? styles['is-active'] : ""}`
  // }

  return (
    <nav className={styles.navbar}>
      <div className={styles["full-menu"]}>
        <img src={logo} alt="logo" className={styles.logo} />
        <section className={styles.links}>
          <Link to="/home" className={styles.link}>
            Home
          </Link>
          <Link to="/about" className={styles.link}>
            About Us
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
          <Link to="/calendar" className={styles.link}>
            Calendar
          </Link>
          <a href="https://linktr.ee/bwd_art" className={styles.link}>
            Donate
          </a>
          <Link to="/membership" className={styles.link}>
            Membership
          </Link>
        </section>
      </div>
      <div className={styles["hamburger-menu"]}>
        {/* <img src={logo} alt="logo" className={styles["logo-small"]} /> */}
        {!showMenu && (
          <FiMenu className={styles["burger-btn"]} onClick={toggleMenuHandler} />
        )}
        {showMenu && (
          <div>
            <MdClose className={styles["close-btn"]} onClick={toggleMenuHandler} />
            <Hamburger onToggle={toggleMenuHandler} isOpen={showMenu} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
