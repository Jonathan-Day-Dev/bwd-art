import styles from './Header.module.css';
import logo from '../../assets/logo.png'

const Header = props => {
    return <header className={styles.header}>
        <div className={styles.top}>
            <img src={logo} alt="logo" className={styles.logo} />
            <h1>Brownwood Art Association</h1>
        </div>
        <div className={styles.info}>
            <p>P.O. Box 782</p>
            <p>Brownwood, Texas 76804</p>
            <p>(325) 641-2916</p>
        </div>
    </header>
}

export default Header;