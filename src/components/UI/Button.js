import styles from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return <button className={`${props.className} ${styles.btn}`}>{props.children}</button>;
};

export default Button;