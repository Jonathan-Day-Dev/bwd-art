import styles from './Footer.module.css';
import logo from '../../assets/logo.png'

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
            <a href="http://localhost:3000" className={styles.link}>Donate</a>
            <a href="http://localhost:3000" className={styles.link}>Membership</a>
        </div>
        <div className={styles.social}>
            <a href="http://facebook.com">Facebook</a>
            <a href="http://instagram.com">Instagram</a>
            <a href="http://twitter.com">Twitter</a>
        </div>
    </footer>
}

export default Footer;

/**
 * Brownwood Art Association
P.O. Box 782
Brownwood, Texas 76804
(325) 641-2916
 */