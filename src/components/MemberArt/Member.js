import styles from "./Member.module.css";

const Member = (props) => {
  return (
    <div className={styles.card}>
      {props.link && <a href="http://cbrisleyart.faso.com/" target="_blank" rel="noreferrer"><h1 className={styles.header}>{props.name}</h1></a>}
      {!props.link && <h1 className={styles.header}>{props.name}</h1>}
      <div className={styles.images}>
        {props.art.map((pic) => (
          <img src={pic} alt={pic} key={pic} />
        ))}
      </div>
    </div>
  );
};

export default Member;
