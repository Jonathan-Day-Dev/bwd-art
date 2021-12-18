import { useEffect } from "react";

import styles from "./Contact.module.css";

import Card from "../UI/Card";
import Button from '../UI/Button';

const Contact = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={styles.card}>
      <h2>We Would Love To Hear From You</h2>
      <form onClick={submitHandler} action="mailto:jonday@jonday.dev" method="POST" enctype="text/plain">
        <div className={styles["first-line"]}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input type="email" id="name" />
          </div>
        </div>
        <div className={styles["second-line"]}>
          <div>
            <label htmlFor="name">Phone Number</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="name">Address</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className={styles.comment}>
          <textarea cols={60} rows={12} />
        </div>
        <Button className={styles["submit-btn"]}>Submit</Button>
      </form>
    </Card>
  );
};

export default Contact;
