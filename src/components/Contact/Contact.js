import { useEffect, useRef, useState } from "react";

import styles from "./Contact.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const Contact = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [commentArea, setCommentArea] = useState("");

  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [hasContacted, setHasContacted] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const commentRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const nameHandler = (e) => {
    const enteredName = e.target.value;
    if (enteredName.trim() !== "") {
      setInvalidName(false);
    }
    setUsername(enteredName);
  };

  const nameBlurHandler = (e) => {
    const enteredName = e.target.value;
    if (enteredName.trim() === "") {
      setInvalidName(true);
    }
  };

  const emailHandler = (e) => {
    const enteredEmail = e.target.value;
    if (enteredEmail.includes("@")) {
      setInvalidEmail(false);
    }
    setEmail(enteredEmail);
  };

  const emailBlurHandler = (e) => {
    const enteredEmail = e.target.value;
    if (!enteredEmail.includes("@")) {
      setInvalidEmail(true);
    }
  };

  const phoneHandler = (e) => {
    const enteredPhone = e.target.value;
    if (enteredPhone.trim() !== "") {
      setInvalidPhone(false);
    }
    setPhone(enteredPhone);
  };

  const phoneBlurHandler = (e) => {
    const enteredPhone = e.target.value;
    if (enteredPhone.trim() === "") {
      setInvalidPhone(true);
    }
  };

  const addressHandler = (e) => {
    const enteredAddress = e.target.value;
    if (enteredAddress.trim() !== "") {
      setInvalidAddress(false);
    }
    setAddress(enteredAddress);
  };

  const addressBlurHandler = (e) => {
    const enteredAddress = e.target.value;
    if (enteredAddress.trim() === "") {
      setInvalidAddress(true);
    }
  };

  const commentHandler = (e) => {
    setCommentArea(e.target.value);
  };

  const formCheck = () => {
    if (
      invalidName ||
      invalidEmail ||
      invalidPhone ||
      invalidAddress ||
      username.trim() === "" ||
      !email.includes("@") ||
      phone.trim() === "" ||
      address.trim() === ""
    ) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    formCheck();
    if (!formIsValid) {
      return;
    }
    console.log(`Form valid: ${formIsValid}`)
    await fetch(
      "https://art-association-982df-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify({
          comment: {
            name: username,
            email: email,
            phone: phone,
            address: address,
            comment: commentArea,
          },
        }),
      }
    );
    setUsername("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCommentArea("");
    setHasContacted(true);
  };

  return (
    <Card className={styles.card}>
      <h2>We Would Love To Hear From You</h2>
      <form onSubmit={submitHandler} method="POST" encType="text/plain">
        <div className={styles["first-line"]}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              value={username}
              onChange={nameHandler}
              onBlur={nameBlurHandler}
              className={invalidName ? styles.invalid : ""}
            />
            {invalidName && (
              <p className={styles["invalid-warning"]}>
                Please enter a valid name
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              value={email}
              onChange={emailHandler}
              onBlur={emailBlurHandler}
              className={invalidEmail ? styles.invalid : ""}
            />
            {invalidEmail && (
              <p className={styles["invalid-warning"]}>
                Please enter a valid email
              </p>
            )}
          </div>
        </div>
        <div className={styles["second-line"]}>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              ref={phoneRef}
              value={phone}
              onChange={phoneHandler}
              onBlur={phoneBlurHandler}
              className={invalidPhone ? styles.invalid : ""}
            />
            {invalidPhone && (
              <p className={styles["invalid-warning"]}>
                Please enter a valid phone number
              </p>
            )}
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              ref={addressRef}
              value={address}
              onChange={addressHandler}
              onBlur={addressBlurHandler}
              className={invalidAddress ? styles.invalid : ""}
            />
            {invalidAddress && (
              <p className={styles["invalid-warning"]}>
                Please enter a valid address
              </p>
            )}
          </div>
        </div>
        <div className={styles.comment}>
          <textarea
            cols={60}
            rows={12}
            ref={commentRef}
            value={commentArea}
            onChange={commentHandler}
          />
        </div>
        {hasContacted && (
          <p className={styles.submitted}>
            Thank you! Your comment has been submitted and we will get back to
            you as soon as possible!
          </p>
        )}
        <Button className={styles["submit-btn"]}>Submit</Button>
      </form>
    </Card>
  );
};

export default Contact;
