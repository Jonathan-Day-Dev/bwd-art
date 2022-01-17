import styles from "./Salon.module.css";

import Card from "../UI/Card";

import salon from "../../assets/salon.jpg";

const Salon = (props) => {
  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>Salon des Refusés</h3>
      <img src={salon} alt="Salon" className={styles.image} />
      <p>
        The first Salon des Refusés took place in Paris in 1855. It translates
        to mean “exhibition of rejects” and was filled with works not accepted
        into the Paris Salon, which was considered exclusive and political. The
        first Salon des Refusés included works by brilliant artists such as
        Manet and Whistler.
      </p>
      <p>
        While the first Salon contained works not hung at Palais de l’Industrie,
        Brownwood Art Association (BAA) Salon des Refusés will exhibit works not
        accepted for the Stars of Texas Juried Art Show. They won’t have a Manet
        or a Whistler but will be exhibiting incredible works by talented
        artists from around the state.
      </p>
      <p>
        The BAA gallery isn’t quite as elegant as the Palais, pictured here, but
        the gallery at The Art Center, 215 Fisk, is pleased to invite artists of
        works not accepted for Stars to exhibit their work in Salon des Refusés.
        There is no cost to exhibiting artists. Works to exhibit should be
        brought to The Art Center on January 29 as soon as they are picked up
        from Stars, between 4 p.m. and 5:30 p.m.
      </p>
      <p>
        The BAA gallery will be open to the public daily February 6-19 for this
        special show. Gallery will be open 9:00 a.m. to 6:00 p.m. Monday through
        Friday, 9:00 a.m. to 5:00 p.m. Saturday, and 1:00 a.m. to 4:00 p.m. on
        Sunday. There is no entrance fee, and all are invited.
      </p>
    </Card>
  );
};

export default Salon;
