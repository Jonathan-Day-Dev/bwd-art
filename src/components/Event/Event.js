import styles from "./Event.module.css";
import marchExhibit from "../../assets/march_image.jpg";
import marchExhibit2 from "../../assets/march_image02.jpg";
import textile from "../../assets/textile_img.png";

import { useEffect, useState } from "react";

import Card from "../UI/Card";
import Info from "./components/Info";

const events = [
  {
    title: "Water Media Exhibit - Intake",
    date: "February 28, 2022",
    time: "2 pm to 6 pm",
    img: marchExhibit,
    description:
      "The Brownwood Art Association's March exhibit will feature works of water media done by Association members. Water media include watercolors, gouache, and acrylics on paper. Works submitted must be framed and wired to hang. There is no charge to submit your work into the show. Art may be offered for sale. The exhibit will remain open throughout March.",
    benefit: false,
    instructor: {
      name: "Brenda Shaw",
      phone: "(325) 642-0417",
      email: "regency1298@gmail.com",
      isInstructor: false,
    },
  },
  {
    title: "Water Media Exhibit - Reception",
    date: "March 3, 2022",
    time: "5 pm to 8 pm",
    img: marchExhibit2,
    description:
      "Browse artwork by BAA member artists while enjoying a glass of wine and hors d'oeuvres. The exhibit will remain open throughout March.",
    benefit: false,
  },
];

const Event = (props) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const eventSelect = (index) => {
    setSelectedEvent(events[index]);
  };

  const clearEvents = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={styles.container}>
      <Card className={styles['textile-card']}>
        <p className="text-2xl mb-0">Tuesday, March 8</p>
        <p>6:00 pm</p>
        <img src={textile} alt="textile artists" className={styles['textile-img']} />
        <p className="leading-tight">We are hosting an Organizational Meeting for the Fiber &amp; Textile Arts Guild at the Brownwood Art Association. Anyone who is interested in fiber &amp; texile art is encouraged to attend!</p>
      </Card>
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

export default Event;
