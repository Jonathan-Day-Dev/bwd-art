import camera from "../../../assets/camera.jpg";
import chili from "../../../assets/chili.jpg";
import charlotte from "../../../assets/charlotte.jpg";
import stepart from "../../../assets/susan_step.jpg";
// import enplein from "../../../assets/enplein02.jpg";

const events = [
  // {
  //   title: "",
  //   date: "",
  //   time: "",
  //   img: ,
  //   description: "",
  //   benefit: false,
  //   price: "",
  //   instructor: {
  //     name: "",
  //     phone: "",
  //     isInstructor: true,
  //   },
  {
    title: "Drawing With Susan Step",
    description: "Want to learn to draw? Or do you draw and want to improve your skills? Join Susan Step in her weekly drawing classes at the Art Center! The only supplies that you'll need are a sketch pad and a pencil. We encourage students to preregister by calling the Art Center, though it isn't necessary.",
    date: "October 26",
    time: "10 am - 11:30 am",
    price: "$20 per session",
    instructor: {
      name: "Susan Step",
      phone: "254-842-4676",
      isInstructor: true
    },
    img: stepart
  },
  {
    title: "BAA Photo Group Exhibit Reception",
    date: "November 3",
    img: camera,
  },
  {
    title: "Demonstration - Charlotte Garrett Cooper",
    description: "I have been an assemblage artist that works with 3D art since 2007. I started designing artistic pocket watches as a form of grief therapy. I now work with a variety of mediums.  Each of my designs are one of a kind. Many hours go into each piece from finding the perfect antique items to complete an idea in my head to hours of design work. I prefer to create with outdated, broken items to give them new purpose. Some pieces of work come easily, others may take years to complete. My work is designed to be passed down through generations.",
    date: "November 8",
    time: "6 pm",
    img: charlotte,
  },
  // {
  //   title: "En Plein Air Workshop",
  //   description: "Painting outdoors with the world as your model.",
  //   date: "November 12",
  //   time: "10 am - noon / 1 pm - 3pm",
  //   img: enplein,
  //   price: "$75/session",
  //   link: "http://brownwoodart-245781.square.site/"
  // },
  {
    title: "BAA Chili Lunch and Silent Auction Fundraiser",
    date: "December 1",
    img: chili,
  },
];

export default events;
