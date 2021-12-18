import { useEffect } from "react";

import styles from "./Donate.module.css";

import Card from "../UI/Card";

const Donate = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
      scrollToTop();
  }, [])

  return (
    <Card className={styles.donate}>
      <iframe allowpaymentrequest src="https://square.link/u/nBLV2h9F" title="order-form" className={styles.iform}/>
    </Card>
  );
};

export default Donate;
