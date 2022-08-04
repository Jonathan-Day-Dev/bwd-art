import styles from "./MemberArt.module.css";
import { useEffect, useRef } from "react";

import Card from "../UI/Card";
import Member from "./Member";

import belli_01 from "../../assets/new/belli2.jpg";
import belli_02 from "../../assets/new/sunset.jpg";

import christine_01 from "../../assets/new/christine1.jpg";
import christine_02 from "../../assets/new/christine2.jpg";

import judy_01 from "../../assets/judy_kirksey/01.jpg";
import judy_02 from "../../assets/judy_kirksey/02.jpg";

import julie_01 from "../../assets/julie_mize/01.jpg";
import julie_02 from "../../assets/julie_mize/02.jpg";
import julie_03 from "../../assets/julie_mize/03.jpg";
import julie_04 from "../../assets/julie_mize/04.jpg";

import kit_01 from "../../assets/kit_timmins/01.jpg";
import kit_02 from "../../assets/kit_timmins/02.jpg";
import kit_03 from "../../assets/kit_timmins/03.jpg";
import kit_04 from "../../assets/kit_timmins/04.jpg";
import kit_05 from "../../assets/kit_timmins/05.jpg";

const MemberArt = (props) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const memberArt = [
    {name: "Martin Belli", id: "01", art: [belli_01, belli_02]},
    {name: "Christine Brisley", id: "02", art: [christine_01, christine_02], link: "//cbrisleyart.faso.com/"},
    {name: "Judy Kirksey", id: "03", art: [judy_01, judy_02] },
    {
      name: "Julie Mize",
      id: "04",
      art: [julie_01, julie_02, julie_03, julie_04],
    },
    {
      name: "Kit Timmins",
      id: "05",
      art: [kit_01, kit_02, kit_03, kit_04, kit_05],
    },
  ];

  return (
    <div ref={topRef}>
      <Card className={styles.card}>
        <h2>Member Art</h2>
        <div className={styles.list}>
          {memberArt.map((member) => (
            <Member name={member.name} art={member.art} key={member.id} link={member.link} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MemberArt;
