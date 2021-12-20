import styles from './Hamburger.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { pageActions } from '../../store/index';

const Hamburger = (props) => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.page.showMenu);

  const homeHandler = () => {
    dispatch(pageActions.home());
    props.onClick();
  };

  const aboutHandler = () => {
    dispatch(pageActions.about());
    props.onClick();
  };

  const donateHandler = () => {
    // dispatch(pageActions.donate());
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

  const contestHandler = () => {
    dispatch(pageActions.contest());
    props.onClick();
  };

  const videoHandler = () => {
    dispatch(pageActions.video());
    props.onClick();
  };

  return (
    <ul
      className={`${styles["small-menu"]} ${
        showMenu ? styles.fit : styles.hide
      }`}
    >
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
        <a href="https://linktr.ee/bwd_art" onClick={donateHandler} className={styles["small-menu__btn"]}>
          Donate
        </a>
      </li>
      <li>
        <button
          onClick={membershipHandler}
          className={styles["small-menu__btn"]}
        >
          Membership
        </button>
      </li>
      <li>
        <button onClick={contestHandler} className={styles["small-menu__btn"]}>
          2022 Contest
        </button>
      </li>
      <li>
        <button onClick={videoHandler} className={styles["small-menu__btn"]}>
          Videos
        </button>
      </li>
    </ul>
  );
};

export default Hamburger;