import { useRef, useState } from "react";

import styles from "./Donate.module.css";

import Card from "../UI/Card";

const Donate = (props) => {
  const amountInput = useRef();
  const [amtToDonate, setAmtToDonate] = useState(0);

  const amountHandler = (e) => {
    setAmtToDonate(e.target.value);
  };

  const submitHandler = e => {
      e.preventDefault();
  }

  return (
    <Card className={styles.donate}>
      <p>
        The Brownwood Art Association welcomes any and all donations to help
        with operational costs, current and upcoming projects. Donations are tax
        deductible and can be made online.
      </p>
      <h2>Make A Donation to the Brownwood Art Association</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="amount">Donation Amount</label>
          <span>$</span>
          <input
            type="number"
            min="1"
            step="1"
            ref={amountInput}
            value={amtToDonate}
            onChange={amountHandler}
            className={styles.input}
          />
        </div>
        <button className={styles['donate-btn']}>Donate ${amtToDonate}</button>
      </form>
    </Card>
  );
};

export default Donate;
