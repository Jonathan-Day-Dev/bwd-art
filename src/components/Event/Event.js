import styles from "./Event.module.css";
import portrait from "../../assets/portrait.jpg";

import { useEffect } from 'react';

import Card from "../UI/Card";

const Event = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth"
    });
  };

  useEffect(() => {
      scrollToTop();
  }, [])
  return (
    <Card className={styles.card}>
      {/* <p className={styles.disclaimer}>
        This workshop is being postponed until February due to the high rate of
        Covid-19 in Brown County, at this point. Stay tuned for exact dates.
        Again... NOT cancelled, only postponed.
      </p> */}
      <img src={portrait} alt={portrait} className={styles.image} />
      <h2>Portrait Workshop</h2>
      <div className={styles.info}>
        <div>
          <p>
            <em>benefiting the Brownwood Art Association</em>
          </p>
          <p>The Art Center, 215 Fisk Avenue</p>
          <p>Brownwood, TX</p>
          <p>February 21-23, 2022</p>
          <p>9:30 am to 3:00 pm</p>
          <p>$95 signup</p>
        </div>
        <div>
          <p>Instructor - Brenda Shaw</p>
          <p>(325) 642-0417</p>
          <a href="mailto:regency1298@gmail.com" className={styles.email}>
            Email
          </a>
        </div>
        <p className={styles.desc}>
          The workshop will be an introduction to painting the portrait in oil
          paint. The oil portrait training will focus on painting the face in
          one session using the Zorn palette in a traditional manner.
        </p>
        <div>
          <h4>Supplies</h4>
          <ul>
            <li>
              <p>Zorn limited palette for oil</p>
              <p>Black, White, Yellow Ochre, Cadmium Red Light</p>
            </li>
            <li>
              <p>12"x12" the Fine Touch canvas, available at Hobby Lobby</p>
            </li>
            <li>
              <p>Master's Touch brush for Oil & Acrylic</p>
              <p>#10 -filbert #8 flat #4 flat</p>
              <p>
                <em>If you have these items, bring your own</em>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Event;
