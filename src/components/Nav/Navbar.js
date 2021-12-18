import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'; 

const Navbar = props => {
    return <nav className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <section className={styles.links}>
            <a href="http://localhost:3000" className={styles['link']}>Donate</a>
            <a href="http://localhost:3000" className={styles['link']}>Membership</a>
        </section>
        <section className={styles.links}>
            <a href="http://localhost:3000" className={styles['link']}>Home</a>
            <a href="http://localhost:3000" className={styles['link']}>About Us</a>
            <a href="http://localhost:3000" className={styles['link-toggle']}>2022 Virtual Portrait Contest</a>
            <a href="http://localhost:3000" className={styles['link-toggle']}>Online Art Demos</a>
        </section>
    </nav>
}

export default Navbar;