import { useDispatch } from 'react-redux';

import styles from './Footer.module.css';
import logo from '../../assets/logo.png';

import { pageActions } from '../../store/index';

const Footer = props => {
    const dispatch = useDispatch();

    const membershipHandler = () => {
        dispatch(pageActions.membership());
    }

    const donateHandler = () => {
        dispatch(pageActions.donate());
    }

    return <footer className={styles.footer}>
        <div className={styles.info}>
            <p>Brownwood Art Association</p>
            <p>P.O. Box 782</p>
            <p>Brownwood, Texas 76804</p>
            <p>(325) 641-2916</p>
        </div>
        <img src={logo} alt="logo" className={styles.image} />
        <div className={styles.links}>
            <button onClick={donateHandler} className={styles.link}>Donate</button>
            <button onClick={membershipHandler} className={styles.link}>Membership</button>
        </div>
        <div className={styles.social}>
            <a href="https://www.facebook.com/brownwoodart">Facebook</a>
            <a href="http://instagram.com" className={styles.disabled}>Instagram</a>
            <a href="https://twitter.com/BrownwoodArt">Twitter</a>
        </div>
    </footer>
}

export default Footer;
