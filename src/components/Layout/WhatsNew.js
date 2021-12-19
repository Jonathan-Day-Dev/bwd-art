import styles from './WhatsNew.module.css';
import bannerLogo from '../../assets/logo_banner.jpg';
import backdrop from '../../assets/backdrop.jpg';

import Card from '../UI/Card';

const WhatsNew = props => {
    return <Card className={styles.main}>
        <img src={bannerLogo} alt="logo" className={styles['logo-img']}/>
        <h2>WHAT'S NEW AT THE BROWNWOOD ART ASSOCIATION</h2>
        <img src={backdrop} alt="art center" className={styles['art-center-img']} />
    </Card>
}

export default WhatsNew;