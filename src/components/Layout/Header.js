import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.top}>
        <h1>Brownwood Art Association</h1>
        <div className={styles.info}>
          <p>P.O. Box 782</p>
          <p>215 Fisk Ave</p>
          <p>Brownwood, Texas 76804</p>
          <p>(325) 641-2916</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
