import styles from "./Programs.module.css";

import { 
  useEffect, useRef } from "react";

  import CustomAcc from "./components/CustomAcc";

  import events from "./components/program_data";

const Program = (props) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }, [])

  return (
    <div className={styles.container} ref={topRef}>
      <CustomAcc events={events} title="Our Programs" />
    </div>
  );
};

export default Program;
