import styles from "./Programs.module.css";
import painting from "../../assets/christine_painting.jpg";
import people from "../../assets/people_paint.jpg";

import { useState } from "react";

import Card from "../UI/Card";
import Info from "./components/Info";

const events = [
  {
    title: "People Painters",
    date: "Most Wednesdays",
    img: people,
    description:
      "Brownwood Art Association hosts a regular People Painter Group. Artists of all skill levels are welcome. The group works from either live models or a photograph on a monitor. This portrait was created in the People Painter's Group by Judy Kirksey.",
    benefit: false,
    instructor: {
      name: "Brenda Shaw",
      phone: "(325) 642-0417",
      isInstructor: true,
    },
    // price: 120,
  },
  {
    title: "Acrylics Class with Christine Brisley-Wade",
    date: "March 14 - 16",
    // time: "2 pm to 6 pm",
    img: painting,
    description:
      "A three day class on painting with acrylics, taught by Christine Brisley-Wade.",
    benefit: false,
    instructor: {
      name: "Christine Brisley-Wade",
      phone: "(512) 963-7032",
      email: "cbrisleyart@yahoo.com",
      isInstructor: true,
    },
    price: 120,
  },
];

const Program = (props) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventSelect = (index) => {
    setSelectedEvent(events[index]);
  };

  const clearEvents = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        {selectedEvent && (
          <Info
            title={selectedEvent.title}
            date={selectedEvent.date}
            time={selectedEvent.time}
            img={selectedEvent.img}
            price={selectedEvent.price}
            instructor={selectedEvent.instructor}
            desc={selectedEvent.description}
            supplies={selectedEvent.supplies}
            benefit={selectedEvent.benefit}
            onClear={clearEvents}
          />
        )}
        {!selectedEvent && (
          <ul>
            {events.map((event, i) => (
              <li key={event.title} className={styles["list-item"]}>
                <button className={styles.btn} onClick={() => eventSelect(i)}>
                  <div className={styles.coverImg}>
                    <img
                      src={event.img}
                      alt={event.title}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.info}>
                    <h2>{event.title}</h2>
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};

export default Program;
