import people from "../../../assets/people_paint.jpg";
import textileart from "../../../assets/textileart.jpg";
import photography from "../../../assets/photography.png";

const events = [
    {
      title: "People Painters",
      date: "Most Wednesdays",
      img: people,
      description:
        "Brownwood Art Association hosts a regular People Painter Group. Artists of all skill levels are welcome. The group works from either live models or a photograph on a monitor. This portrait was created in the People Painter's Group by Judy Kirksey.",
      benefit: false,
      instructor: {
        name: "Brenda Shaw",
        phone: "(325) 642-0417",
        isInstructor: true,
      },
    },
    {
      title: "Fiber & Textiles Artist Group",
      date: "June 2 - 28",
      img: textileart,
      description:
      "BAA wants to promote artistic expression in all its forms, and has extended its media horizon to include fiber and texitle arts. Anyone interested in fiber and textile arts is invited to join. The only requirement for membership in the BAA Fiber and Textiles Arts group is membership in the Art Association. Cost of membership is only $25.",
      benefit: false,
      instructor: {
        name: "Mary Engle",
        phone: "325-203-2370",
        isInstructor: true,
      },
    },
    {
      title: "Photography Group",
      date: "Every 2nd Thursday",
      img: photography,
      time: "6 pm",
      benefit: false,
      description: "Anyone interested in improving their photography skills is invited to attend.",
      instructor: {
        name: "Craig Seger",
        phone: "325-998-0084"
      }
    }
  ];

  export default events;