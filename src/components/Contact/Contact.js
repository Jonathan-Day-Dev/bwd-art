import { useEffect, useRef, useState } from "react";

import styles from "./Contact.module.css";

import Card from "../UI/Card";
import Button from '../UI/Button';

const Contact = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [commentArea, setCommentArea] = useState('');

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

  const nameHandler = e => {
    setUsername(e.target.value)
  }

  const emailHandler = e => {
    setEmail(e.target.value)
  }

  const phoneHandler = e => {
    setPhone(e.target.value)
  }

  const addressHandler = e => {
    setAddress(e.target.value)
  }

  const commentHandler = e => {
    setCommentArea(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch("https://art-association-982df-default-rtdb.firebaseio.com/contact.json", {
      method: 'POST',
      body: JSON.stringify({
        comment: {
          name: username,
          email: email,
          phone: phone,
          address: address,
          comment: commentArea
        }
      })
    })
    setUsername('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCommentArea('');
    setHasContacted(true);
  };

  return (
    <Card className={styles.card}>
      <h2>We Would Love To Hear From You</h2>
      <form onSubmit={submitHandler} method="POST" encType="text/plain">
        <div className={styles["first-line"]}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameRef} value={username} onChange={nameHandler} />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input type="email" id="name" ref={emailRef} value={email} onChange={emailHandler} />
          </div>
        </div>
        <div className={styles["second-line"]}>
          <div>
            <label htmlFor="name">Phone Number</label>
            <input type="text" id="name" ref={phoneRef} value={phone} onChange={phoneHandler} />
          </div>
          <div>
            <label htmlFor="name">Address</label>
            <input type="text" id="name" ref={addressRef} value={address} onChange={addressHandler} />
          </div>
        </div>
        <div className={styles.comment}>
          <textarea cols={60} rows={12} ref={commentRef} value={commentArea} onChange={commentHandler} />
        </div>
        {hasContacted && <p className={styles.submitted}>Thank you! Your comment has been submitted and we will get back to you as soon as possible!</p>}
        <Button className={styles["submit-btn"]}>Submit</Button>
      </form>
    </Card>
  );
};

export default Contact;
