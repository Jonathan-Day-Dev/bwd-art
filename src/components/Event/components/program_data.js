import people from "../../../assets/people_paint.jpg";
import textile from "../../../assets/textile.jpg";

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
      img: textile,
      description:
      "BAA wants to promote artistic expression in all its forms, and has extended its media horizon to include fiber and texitle arts. Anyone interested in fiber and textile arts is invited to join. The only requirement for membership in the BAA Fiber and Textiles Arts group is membership in the Art Association. Cost of membership is only $25. For further information, call or text Mary Engle at 325-203-2370.",
      benefit: false,
      // instructor: {
      //   name: "Brenda Shaw",
      //   phone: "(325) 642-0417",
      //   isInstructor: true,
      // },
    },
  ];

  export default events;