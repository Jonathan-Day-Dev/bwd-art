import styles from "./Member.module.css";
import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";
import React from "react";

const Member = (props) => {
  return (
    <div className={styles.card}>
      {props.link && (
        <div>
          <h1 className={styles.header}>{props.name}</h1>
          <Link to={{ pathname: props.link }}>
            <p className={styles.link}>Click Here To View {props.name}'s Website</p>
          </Link>
        </div>
      )}
      {!props.link && <h1 className={styles.header}>{props.name}</h1>}
      <div className={styles.images}>
        {props.art.map((pic) => (
          <img src={pic} alt={pic} key={pic} />
        ))}
      </div>
    </div>
  );
};

export default Member;
