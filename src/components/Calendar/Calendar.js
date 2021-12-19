import styles from './Calendar.module.css';

import Card from "../UI/Card";

const Calendar = props => {
    return <Card className={styles.calendar}>
        <iframe className={styles.iframe} title="calendar" src="https://calendar.google.com/calendar/embed?src=jonnybio8219%40gmail.com&ctz=America%2FChicago" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no" preview></iframe>
    </Card>
}

export default Calendar;