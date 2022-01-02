import styles from "./Calendar.module.css";

import Card from "../UI/Card";

const Calendar = (props) => {
  return (
    <Card>
      <div className={styles.calendar}>
        <iframe
          className={styles.iframe}
          title="calendar"
          src="https://calendar.google.com/calendar/embed?src=gsoihrrad14tjsaoio05glnag0%40group.calendar.google.com&ctz=America%2FChicago&mode=AGENDA"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Card>
  );
};

export default Calendar;
