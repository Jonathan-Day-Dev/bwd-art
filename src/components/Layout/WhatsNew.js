import styles from './WhatsNew.module.css';
import hasBegun from '../../assets/hasBegun.png';
import backdrop from '../../assets/backdrop.jpg';

import Card from '../UI/Card';

const WhatsNew = props => {
    return <div>
    <Card className={styles.main}>
        <img src={backdrop} alt="art center" className={styles['art-center-img']} />
    </Card>
    <Card className={styles.main}>
        <img src={hasBegun} alt="logo" className={styles['logo-img']}/>
    </Card>
    </div>
}

export default WhatsNew;