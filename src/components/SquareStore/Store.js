import styles from "./Store.module.css";

import Card from "../UI/Card";

const Store = (props) => {
  return (
    <div className={styles.wrapper}>
      <a href="https://brownwood-art.square.site/" className={styles.link}>
        <Card className={styles.card}>
          <h3 className={styles.text}>
            For information on donating, buying tickets for upcoming events or
            becoming a member, visit the Brownwood Art Association's online
            store!
          </h3>
        </Card>
      </a>
    </div>
  );
};

export default Store;
