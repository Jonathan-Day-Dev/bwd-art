import styles from "./Features.module.css";

import Card from "../UI/Card";
import OnlineClasses from '../OnlineClasses/Classes';

const Features = (props) => {

  return (
    <Card className={styles.features}>
      <OnlineClasses />
    </Card>
  );
};

export default Features;
