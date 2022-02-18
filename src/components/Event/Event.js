import styles from "./Event.module.css";
import portrait from "../../assets/portrait.jpg";
import marchExhibit from "../../assets/march_image.jpg";

import { useEffect, useState } from "react";

import Card from "../UI/Card";
import Info from "./components/Info";

const events = [
  {
    title: "Portrait Workshop",
    date: "February 21-23, 2022",
    time: "9:30 am to 3:00 pm",
    img: portrait,
    price: 95,
    instructor: {
      name: "Brenda Shaw",
      phone: "(325) 642-0417",
      email: "regency1298@gmail.com",
    },
    description:
      "The workshop will be an introduction to painting the portrait in oil paint. The oil portrait training will focus on painting the face in one session using the Zorn palette in a traditional manner.",
    supplies: [
      "Zorn limited palette for oil",
      "Black, White, Yellow Ochre, Cadmium Red Light",
      "12\"x12\" the Fine Touch canvas, avaliable at Hobby Lobby",
      "Master's Touch brush for Oil & Acrylic",
      "#10 -filber #8 flat #4 flat"
    ]
  },
  {
    title: "March Water Color Exhibit",
    date: "February 28, 2022",
    time: "2 pm to 6 pm",
    img: marchExhibit,
    description:
      "The Brownwood Art Association's March exhibit will feature works of water media done by Association members. Water media include watercolors, gouache, and acrylics on paper. Works submitted must be framed and wired to hang. There is no charge to submit your work into the show. Art may be offered for sale. ",
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
  }

  return (
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
          onClear={clearEvents}
        />
      )}
      {!selectedEvent && (
        <ul>
          {events.map((event, i) => (
            <li key={event.title}>
              <button className={styles.btn} onClick={() => eventSelect(i)}>
                <h2>{event.title}</h2>
                <span>{event.date}</span>
                <span>{event.time}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Event;
