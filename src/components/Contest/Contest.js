import { useEffect } from "react";

import styles from "./Contest.module.css";
import guitarist from "../../assets/guitarist.jpg";

import Card from "../UI/Card";

const Contest = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Card className={styles.card}>
      <div className={styles.title}>
        <div>
          <img src={guitarist} alt="guitarist" className={styles.image} />
          <span className={styles.caption}>
            Portrait by Bob Stuth-Wade - Winner of 2021 Portrait Contest
          </span>
        </div>
        <div className={styles.info}>
          <h2>Brownwood Art Association, Inc</h2>
          <p>For more information</p>
          <a href="mailto:brownwoodart@gmail.com" className={styles.email}>
            Email Us
          </a>
          <a
            href="mailto:regency1298@gmail.com"
            className={styles["brenda-email"]}
          >
            Email Brenda Shaw
          </a>
          <h3 className={styles.full}>
            BAA 2nd ANNUAL VIRTUAL PORTRAIT COMPETITION
          </h3>
        </div>
      </div>
      <h3 className={styles.small}>
        BAA 2nd ANNUAL VIRTUAL PORTRAIT COMPETITION
      </h3>
      <div className={styles.body}>
        <p>
          Established in 1927, the Brownwood Art Association, Inc. became a
          recognized 501 (c)(3) in 2002, organized for charitable and
          educational purposes, seeking to enrich the local community through
          activities promoting visual art. The Association is supported by
          fundraising, public and private donations, and in part by the Arts
          Council of Brownwood.
        </p>
        <p>
          <span className={styles.bold}>Awards: </span>Best of Show – $1000,
          five Juror awards of $60
        </p>
        <p>
          <span className={styles.bold}>Entry Deadline: </span>Best of Show –
          $1000, five Juror awards of $60
        </p>
        <p>
          <span className={styles.bold}>Entry Fee: </span>$20 per portrait –
          minimum portrait entry…1, maximum portrait entry….5
        </p>
        <p>
          <span className={styles.bold}>Eligibility: </span>National, 18 years
          or above. All work must be original, not done under supervision and
          not be a copy of a published work. Works must be suitable for display
          to young students.
        </p>
        <p>
          <span className={styles.bold}>Size: </span>A virtual Competition, but
          works should be no larger than 48” in the longest dimensions and no
          smaller than 8” x 10”. Works no older then 3 years.
        </p>
        <p>
          <span className={styles.bold}>Media: </span>All 2D Media, except
          digital and photography
        </p>
        <p>
          <span className={styles.bold}>Entry Platforms: </span>Entry
          submissions through EntryThingy or www.brownwoodart.com
        </p>
        <p className={styles.bold}>
          The BAA encourages unique works demonstrating originality and
          attentive execution. Portraits and figurative works are eligible.
          Entering the exhibit includes permitting us to use your images for
          virtual exhibits or publishing purposes.
        </p>
      </div>
      <div className={styles.bottom}>
        <h3>JUROR: BOB STUTH-WADE</h3>
        <p>
          Renowned Texas artist, Bob Stuth-Wade, is a contemporary artist who
          was born in1953. He is known for his still life, portrait and
          landscape paintings, and takes much of his influence from Perry
          Nichols and Mary Sloan. Knowing his subject and painting from life is
          key to Bob’s painting whether he is painting the figure, still life or
          landscape. Career highlights include Artists Fellowship Programme, the
          Ballinglen Arts Foundation, Ballycastle, North County Mayo, Republic
          of Ireland, 2006 and Visiting Professor, Baylor University, Waco,
          Texas, 2011. His work has been featured in many exhibitions, key
          galleries and museums, including the Dallas Museum of Fine Art,
          Dallas, Texas, The Grace Museum, Abilene, Texas, and the San Angelo
          Museum of Art, San Angelo, Texas. Bob’s paintings can also be found in
          many Corporate and Private Collections.
        </p>
      </div>
    </Card>
  );
};

export default Contest;
