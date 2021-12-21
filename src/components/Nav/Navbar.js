import { useState } from 'react';

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

import { Link } from 'react-router-dom';

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
