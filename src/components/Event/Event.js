import styles from "./Event.module.css";
import marchExhibit from "../../assets/march_image.jpg";
import marchExhibit2 from "../../assets/march_image02.jpg";
import textile from "../../assets/textile_img.png";
import sailboat from "../../assets/sailboat.jpg";

import { useState } from "react";

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
  {
    title: "En Plein Air Brownwood Competition - Entry",
    date: "April 2, 2022",
    time: "7:30 am to 9 am",
    img: sailboat,
    description: 
      "The event is open to all artists, age 18 and older. Registration will be at the Art Center. Blank canvases will be stamped at this time. Ending time and return to the Art Center will be at 4 pm the same day. One or two plein art artworks created during the event and one studio artwork created at any time of any subject except nudes may be entered in the competition by each artist for a total of 3 works. All works accepted must remain at The Art Center for exhibit and sale through April 23, 2022. Length and width of any frame may not exceed 26\". All work must be sturdily framed or gallery wrapped and ready to hang. All work must be for sale. Artists will receive 70% of the sale price of the work, with BAA receieving 30%.",
    benefit: false,
    price: 20
  },
  {
    title: "En Plein Air Brownwood Competition - Exhibit",
    date: "April 7, 2022",
    time: "5 pm to 8 pm",
    img: sailboat,
    description: 
      "The award ceremony will begin at 6 pm and the exhibit will remain open from April 7 to April 22",
    benefit: false
  }
];

const Event = (props) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventSelect = (index) => {
    setSelectedEvent(events[index]);
  };

  const clearEvents = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={styles.container}>
      <Card className={styles['textile-card']}>
        <p className="mb-0 text-2xl">Tuesday, March 8</p>
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
