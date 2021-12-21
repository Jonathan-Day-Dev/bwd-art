import styles from './Hamburger.module.css';

import { Link } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';

// import { pageActions } from '../../store/index';

const Hamburger = (props) => {

  // const dispatch = useDispatch();
  // const showMenu = useSelector((state) => state.page.showMenu);

  // const homeHandler = () => {
  //   dispatch(pageActions.home());
  //   props.onClick();
  // };

  // const aboutHandler = () => {
  //   dispatch(pageActions.about());
  //   props.onClick();
  // };

  // const donateHandler = () => {
  //   // dispatch(pageActions.donate());
  //   props.onClick();
  // };

  // const contactHandler = () => {
  //   dispatch(pageActions.contact());
  //   props.onClick();
  // };

  // const calendarHandler = () => {
  //   dispatch(pageActions.calendar());
  //   props.onClick();
  // };

  // const membershipHandler = () => {
  //   dispatch(pageActions.membership());
  //   props.onClick();
  // };

  // const contestHandler = () => {
  //   dispatch(pageActions.contest());
  //   props.onClick();
  // };

  // const videoHandler = () => {
  //   dispatch(pageActions.video());
  //   props.onClick();
  // };

  return (
    <ul
      className={`${styles["small-menu"]} ${
        props.isOpen ? styles.fit : styles.hide
      }`}
    >
      <li>
        <Link to="/home" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/calendar" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Calendar
        </Link>
      </li>
      <li>
        <Link to="https://linktr.ee/bwd_art" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Donate
        </Link>
      </li>
      <li>
        <Link
          to="/membership"
          className={styles["small-menu__btn"]}
          onClick={props.onToggle}
        >
          Membership
        </Link>
      </li>
      <li>
        <Link to="/contest" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          2022 Contest
        </Link>
      </li>
      <li>
        <Link to="/classes" onClick={props.onToggle} className={styles["small-menu__btn"]}>
          Videos
        </Link>
      </li>
    </ul>
  );
};

export default Hamburger;