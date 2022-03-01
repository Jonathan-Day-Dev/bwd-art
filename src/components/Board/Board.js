import styles from "./Board.module.css";

import CustomCard from "../UI/CustomCard";

const Board = () => {
  return (
    <CustomCard
      maxWth={{ xs:"80%", md:"60%" }}
      title="We Are Currently Looking For Board Members!"
      body={
        <div>
          <p>
            After the pandemic and the flood of 2021, The Brownwood Art
            Association is back on its feet and looking toward the future! Our
            plans - and potential - is exciting.
          </p>
          <br />
          <p>
            Annual elections for the BAA Board of Directors will be held April
            21, 6:30 p.m., at the Art Center, 215 Fisk Ave. The following
            offices will be elected:
          </p>
          <br />
          <ul>
            <li>President</li>
            <li>1st VP - Membership</li>
            <li>2nd VP - Demos &amp; Programs</li>
            <li>3rd VP - Exhibits</li>
            <li>Secretary</li>
            <li>Treasurer</li>
            <li>Reporter/Publicity</li>
            <li>Parliamentarian</li>
            <li>Auditor</li>
          </ul>
          <br />
          <p>
            The only requirement to serve is current membership in the Brownwood
            Art Association. Board meetings are usually held the 2nd Monday of
            each month, at 6 p.m., at the Art Center.
          </p>
          <br />
          <p>
            If you're interested in serving on the BAA Board of Directors, or in
            related committees, please contact the Nominating Committee:
          </p>
          <br />
          <ul className="text-center font-medium">
            <li>Mary Engle | (325) 203-2370</li>
            <li>
              Roger Levesque | (325) 998-3025 |{" "}
              <a
                href="mailto:rjlevesque@yourvisions.com"
                className={styles.email}
              >
                Email
              </a>
            </li>
            <li>Kit Timmins | (325) 646-7032</li>
          </ul>
        </div>
      }
    />
  );
};

export default Board;
