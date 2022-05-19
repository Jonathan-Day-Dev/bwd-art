// import styles from "./Board.module.css";
import selfie from "../../assets/mauselfie.jpg";
import back from "../../assets/maurinestew.jpg";
import styles from "./Board.module.css";

import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      maxWth={{ xs: "80%", lg: "60%" }}
      title="Maurine Stewart Exhibit"
      body={
        <div className={styles.main}>
          <div className={styles.imgblock}>
            <img
              src={selfie}
              alt="Maurine Stewart Selfie"
              className={styles.img}
            />
            <caption>
              Above is a self-portrait of Maurine Stewart painted in 1947. It is
              on loan to BAA from HPU. An interesting tidbit is that if you
              remove it from the wall and turn it over, the painting below is on
              the back.
            </caption>
            <img src={back} alt="Back of Painting" className={styles.img} />
          </div>
          <div className="mt-12">
            <p>
              We are happy to present 17 works by Maurine Stewart (1921-1995), a
              Brownwood native who was an integral part of the local art scene
              for decades.
            </p>
            <p>
              Together with her husband, Charles, she co-founded the Art
              Department at Howard Payne University in 1947.
            </p>
            <p>
              She was also President of the Brownwood Art Association three
              times, in the 1950s, 1960s and 1970s, and Artist of the Year in
              1987.
            </p>
            <p>
              This show features some recently re-discovered pastel portraits
              that have likely not been exhibited before.
            </p>
            <p>
              Plan to visit soon, since this exhibit is for two weeks only,
              through May 27.
            </p>
            <p className={styles.cap}>
              <em>- Daniel Graham - The Gallery Guy</em>
            </p>
          </div>
        </div>
      }
    />
  );
};

export default Board;
