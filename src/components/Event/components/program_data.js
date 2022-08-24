import people from "../../../assets/people_paint.jpg";
import textileart from "../../../assets/textileart.jpg";
import photography from "../../../assets/photography.png";
import artcenter from "../../../assets/new/artcenter.jpg";
import studio from "../../../assets/new/easel.jpg";

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
    date: "1st & 3rd Tuesdays",
    time: "2 pm",
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
    description:
      "Anyone interested in improving their photography skills is invited to attend.",
    instructor: {
      name: "Craig Seger",
      phone: "325-998-0084",
    },
  },
  {
    title: "2nd Sunday at the Art Center",
    time: "1 pm - 4 pm",
    img: artcenter,
    description:
      "The Art Center is open special hours on the 2nd Sunday of summer months. Stop by and enjoy the art and watch some of our artists at work!",
  },
  {
    title: "Independent Study Group",
    date: "Most Mondays",
    time: "10 am - 3 pm",
    img: studio,
    description:
      "BAA has a new program at the Art Center. Starting Monday, August 1, 2022, the Art Center will be open from 10 am to 3pm most Mondays for an Independent Study Group. Everyone is invited to come work and share ideas with other artists. This study will be self guided, independent of instructors, in any mediums/media and free at this stage. This will happen every Monday unless canceled for holidays or workshops. Gayle Massey…..817-233-2228",
    benefit: false,
  },
  {
    title: "Monthly Artist Demonstrations",
    date: "2nd Tuesday",
    time: "6 pm",
    img: studio,
    description:
      "All members and prospective members are invited to join us for a demonstration by an artist and a bit of comradery with other artist.",
    benefit: false,
  },
];

export default events;
