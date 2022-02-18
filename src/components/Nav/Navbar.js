import { useState } from "react";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

import { NavLink } from "react-router-dom";

import Hamburger from "./Hamburger";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["full-menu"]}>
        <NavLink to="/home" className={styles['logo-link']}>
          <img src={logo} alt="logo" className={styles.logo} />
        </NavLink>
        <section className={styles.links}>
          <NavLink
            to="/home"
            activeClassName={styles.isActive}
            className={styles.link}
          >
            Home
          </NavLink>

          <NavLink
            to="/calendar"
            activeClassName={styles.isActive}
            className={styles.link}
          >
            Calendar
          </NavLink>
          <NavLink to="/members" activeClassName={styles.isActive} className={styles.link}>
            Members Galleries
          </NavLink>
          <a href="https://checkout.square.site/merchant/3M8VC0T8TZ955/checkout/CGOPRSY5DJFUMQZHL5MXFQU4" className={styles.link}>
            Donations
          </a>
          <a href="https://checkout.square.site/merchant/3M8VC0T8TZ955/checkout/BRMFSPKMUFN3T3XT2SYEYPZ6" className={styles.link}>
            Membership
          </a>
        </section>
      </div>
      <div className={styles["hamburger-menu"]}>
        {!showMenu && (
          <FiMenu
            className={styles["burger-btn"]}
            onClick={toggleMenuHandler}
          />
        )}
        {showMenu && (
          <div>
            <MdClose
              className={styles["close-btn"]}
              onClick={toggleMenuHandler}
            />
            <Hamburger onToggle={toggleMenuHandler} isOpen={showMenu} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
