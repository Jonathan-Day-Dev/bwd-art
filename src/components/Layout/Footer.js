import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>Brownwood Art Association</p>
        <p>P.O. Box 782</p>
        <p>Brownwood, Texas 76804</p>
        <p>(325) 641-2916</p>
      </div>
      <div className={styles.nav}>
        <NavLink
          to="/about"
          activeClassName={styles.isActive}
          className={styles.link}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName={styles.isActive}
          className={styles.link}
        >
          Contact
        </NavLink>
      </div>
      <img src={logo} alt="logo" className={styles.image} />
      <div className={styles.links}>
        <a href="https://checkout.square.site/merchant/3M8VC0T8TZ955/checkout/CGOPRSY5DJFUMQZHL5MXFQU4" className={styles.link}>
          Donate
        </a>
        <a href="https://checkout.square.site/merchant/3M8VC0T8TZ955/checkout/BRMFSPKMUFN3T3XT2SYEYPZ6" className={styles.link}>
          Membership
        </a>
      </div>
      <div className={styles.social}>
        <a href="https://www.facebook.com/brownwoodart">Facebook</a>
        <a
          href="https://www.instagram.com/brownwoodart/"
          className={styles.disabled}
        >
          Instagram
        </a>
        <a href="https://twitter.com/BrownwoodArt">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
