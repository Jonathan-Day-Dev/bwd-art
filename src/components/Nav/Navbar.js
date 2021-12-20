import { useDispatch, useSelector } from "react-redux";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

import Hamburger from './Hamburger';

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import { pageActions } from "../../store/index";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.page.showMenu);

  const toggleMenu = () => {
    dispatch(pageActions.toggleMenu());
  };

  const homeHandler = () => {
    dispatch(pageActions.home());
  };

  const aboutHandler = () => {
    dispatch(pageActions.about());
  };

  // const donateHandler = () => {
  //   dispatch(pageActions.donate());
  // };

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
          <a href="https://linktr.ee/bwd_art" className={styles["link"]}>
            Donate
          </a>
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
        {/* <img src={logo} alt="logo" className={styles["logo-small"]} /> */}
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
