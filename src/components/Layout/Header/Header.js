import styles from "./Header.module.css";

import HeaderMain from './HeaderMain';
import HeaderExtra from './HeaderExtra';

const Header = (props) => {
  return (
    <div className={styles.full}>
      <HeaderMain />
      <HeaderExtra />
    </div>
  );
};

export default Header;
