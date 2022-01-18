import { useEffect } from 'react';

import styles from "./AboutUs.module.css";
import donated from "../../assets/donated.jpg";

import Card from "../UI/Card";

const AboutUs = (props) => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth"
    });
  };

  useEffect(() => {
      scrollToTop();
  }, [])

  return (
    <Card className={styles.about}>
      <h2>Our History</h2>
      <article>
        <img src={donated} alt="donated by" className={styles.image} />
        <p className={styles.p1}>
          On February 22, 1927, Mrs. W.R. Roberts called area artists together
          to organize the Brownwood Art League, which later became the Brownwood
          Art Association. At the time, few small towns in Texas had developed
          any organized interest in art or artists. In Brownwood, artists of
          national reputation – Adele Brunet, Harry Anthony DeYoung, Xavier
          Gonzales and Dwight Holmes – came to conduct classes on a regular
          basis. Soon visitors were amazed at the quality of art produced by the
          local artists. Others responsible for this early art climate were
          Pearl Stephens Stallings and B.C. McClean.
        </p>
        <p>
          During the Depression years McClean, a young photographer, added a
          complete line of art supplies to his business by providing framing
          services and later invited the BAA to host shows in the building. In
          1938, he began publishing a small magazine called “The Brush and
          Palette News” that gave details of the group’s projects and featured a
          local artist in each issue. The teachers, Fannie Tabor Camp and her
          daughter Francis Camp Bell, were both outstanding artists of the
          period, as were Dorothy Mayes, Rosalie Beadel, and Rita Bettis in
          later years.
        </p>
        <p>
          From the late 1940s through the 1980’s, Charles and Maurine Stewart
          lead the Howard Payne University Art Department where Eloise Trigg
          also taught. The BAA met there for many years. Other fine area art
          teachers were Gene and Wynona Pierson, Lovena Forbess, and Gaitha
          Browning. Browning’s interest in art took him to many states and
          countries, but he is probably best remembered as the designer of the
          western relief figures on the Brownwood Coliseum, built in the 1960s.
          The City Council turned the project over to Browning, and he and nine
          other artists completed it. In 1981, BAA president Ima Gem Queen
          started the publication known as “The Palette Rag” to highlight member
          and group projects. During this time, Richard Goetz and William Henry
          Earle were conducting workshops while visiting Brownwood.
        </p>
        <p>
          Today, the BAA provides scholarship funds to area college students who
          are majoring in art. The association has donated art related books to
          the public library as memorials along with providing various
          demonstrations for the community. Many members donate their time to
          organize and put on the annual Stars of Texas Juried Art Exhibit and
          student exhibitions, as well as the Association’s member exhibits.
        </p>
        <p>
          The BAA received their non-profit status in June 2002 and members hope
          to increase their contribution to the community by providing
          continuous exhibits for both members and non-member artists, workshops
          for adults and summer art camps for children.
        </p>
        <p>
          The granddaughter of Pearl Stephens Stallings, Nancy Lee, donated the
          building, located at 215 Fisk Avenue, to the BAA to serve as the first
          Visual Arts Center in Brownwood. The BAA uses the facility for
          exhibits, classes and BAA meetings.
        </p>
      </article>
    </Card>
  );
};

export default AboutUs;
