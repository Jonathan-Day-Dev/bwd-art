import styles from './Calendar.module.css';

import Card from "../UI/Card";

const Calendar = props => {
    return <Card className={styles.calendar}>
        <iframe className={styles.iframe} title="calendar" src="https://calendar.google.com/calendar/embed?src=gsoihrrad14tjsaoio05glnag0%40group.calendar.google.com&ctz=America%2FChicago" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </Card>
}

export default Calendar;