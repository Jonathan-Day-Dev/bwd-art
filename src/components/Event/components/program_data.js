import painting from "../../../assets/christine_painting.jpg";
import people from "../../../assets/people_paint.jpg";

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
      title: "Acrylics Class with Christine Brisley-Wade",
      date: "March 14 - 16",
      // time: "2 pm to 6 pm",
      img: painting,
      description:
        "A three day class on painting with acrylics, taught by Christine Brisley-Wade.",
      benefit: false,
      instructor: {
        name: "Christine Brisley-Wade",
        phone: "(512) 963-7032",
        email: "cbrisleyart@yahoo.com",
        isInstructor: true,
      },
      price: 120,
    },
  ];

  export default events;