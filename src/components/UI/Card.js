import styles from './Card.module.css';
import React from "react";

const Card = props => {
    return <section className={`${styles.card} ${props.className}`}>
        {props.children}
    </section>
}

export default Card;