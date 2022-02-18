import styles from "./Info.module.css";
import portrait from "../../../assets/portrait.jpg";

import { Fragment } from "react";

const Info = (props) => {
  return (
    <Fragment>
      <div className="relative w-full">
        <button className={styles["back-btn"]} onClick={props.onClear}>X</button>
        <h2 className="text-center">{props.title}</h2>
      </div>
      <img src={props.img} alt={portrait} className={styles.image} />
      <div className={styles.info}>
        <div>
          {props.benefit && <p>
            <em>benefiting the Brownwood Art Association</em>
          </p>}
          <p>The Art Center, 215 Fisk Avenue</p>
          <p>Brownwood, TX</p>
          <p>{props.date}</p>
          <p>{props.time}</p>
          {props.price && <p>$95 signup</p>}
        </div>
        {props.instructor && (
          <div>
            <p>Instructor - {props.instructor.name}</p>
            <p>{props.instructor.phone}</p>
            <a
              href={`mailto:${props.instructor.email}`}
              className={styles.email}
            >
              Email
            </a>
          </div>
        )}
      </div>
      <p className={styles.desc}>{props.desc}</p>
      {props.supplies && (
        <div>
          <h4 className="mt-4 text-xl font-semibold">Supplies</h4>
          <ul>
            {props.supplies.map((item) => (
              <li key={item} className={styles["list-item"]}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Info;
