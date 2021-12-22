import { useState } from 'react';

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

import { NavLink } from 'react-router-dom';

import Hamburger from './Hamburger';

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";


const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu(showMenu => !showMenu);
  }
  
  return (
    <nav className={styles.navbar}>
      <div className={styles["full-menu"]}>
        <img src={logo} alt="logo" className={styles.logo} />
        <section className={styles.links}>
          <NavLink to="/home" activeClassName={styles.isActive} className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName={styles.isActive} className={styles.link}>
            About Us
          </NavLink>
          <NavLink to="/contact" activeClassName={styles.isActive} className={styles.link}>
            Contact
          </NavLink>
          <NavLink to="/calendar" activeClassName={styles.isActive} className={styles.link}>
            Calendar
          </NavLink>
          {/* <a href="https://brownwood-art.square.site/" className={styles.link}>
            Donate
          </a>
          <a href="https://brownwood-art.square.site/" activeClassName={styles.isActive} className={styles.link}>
            Membership
          </a>
          <a href="https://brownwood-art.square.site" className={styles.link}>
            Square Store
          </a> */}
        </section>
      </div>
      <div className={styles["hamburger-menu"]}>
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
