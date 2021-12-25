import styles from './Footer.module.css';
import logo from '../../assets/logo.png';

const Footer = props => {
    return <footer className={styles.footer}>
        <div className={styles.info}>
            <p>Brownwood Art Association</p>
            <p>P.O. Box 782</p>
            <p>Brownwood, Texas 76804</p>
            <p>(325) 641-2916</p>
        </div>
        <img src={logo} alt="logo" className={styles.image} />
        <div className={styles.links}>
            <a href="https://square.link/u/nBLV2h9F" className={styles.link}>Donate</a>
            <a href="https://square.link/u/ytQ3nnnH" className={styles.link}>Membership</a>
        </div>
        <div className={styles.social}>
            <a href="https://www.facebook.com/brownwoodart">Facebook</a>
            <a href="https://www.instagram.com/brownwoodart/" className={styles.disabled}>Instagram</a>
            <a href="https://twitter.com/BrownwoodArt">Twitter</a>
        </div>
    </footer>
}

export default Footer;
