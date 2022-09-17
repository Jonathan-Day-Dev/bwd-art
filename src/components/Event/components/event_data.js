import bobsw from "../../../assets/bobsw.jpg";
import camera from "../../../assets/camera.jpg";
import chili from "../../../assets/chili.jpg";
import jserna from "../../../assets/jsernaart.jpg";
import charlotte from "../../../assets/charlotte.jpg";
import powwow from "../../../assets/pow_wow.jpg";
import stepart from "../../../assets/susan_step.jpg";
// import {Link} from "react-router-dom";

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
  // {
  //   title: "Demonstration - Scott Coers",
  //   description:
  //     "Scott will be demonstrating how to edit and post personal videos online using free apps",
  //   date: "September 13",
  //   time: "6 pm",
  //   // img: boyd,
  // },
  {
    title: "Comanche County Pow Wow Art Exhibit & Sale",
    description: "The exhibit will be held at 100 Indian Creek Drive, at the Comanche Community Center. Registration will be Thursday, September 22 from noon to 6 pm at the Community Center. Limit 5 entries per exhibitor. Entries may be no larger than 30\"*40\" or 140 linear inches. Checkout will be on Sunday, from 4 pm - 5 pm. There will be several cash awards - Best of Show ($300), Best of Professional ($100), Best of Advanced ($100), Best of Novice ($100), & Best of Show for Youth ($50)",
    date: "September 24 & 25",
    time: "10 am - 4 pm",
    price: "Adults: $10 / Grades 12 & under: $3",
    instructor: {
      name: "Paula Vaughn / Susan Step",
      phone: "325-356-5324 / 254-842-4676",
      isInstructor: false
    },
    img: powwow
  },
  {
    title: "Drawing With Susan Step",
    description: "Want to learn to draw? Or do you draw and want to improve your skills? Join Susan Step in her weekly drawing classes at the Art Center! The only supplies that you'll need are a sketch pad and a pencil. We encourage students to preregister by calling the Art Center, though it isn't necessary.",
    date: "September 28",
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
    title: "Drawing With Susan Step",
    description: "Want to learn to draw? Or do you draw and want to improve your skills? Join Susan Step in her weekly drawing classes at the Art Center! The only supplies that you'll need are a sketch pad and a pencil. We encourage students to preregister by calling the Art Center, though it isn't necessary.",
    date: "October 5",
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
    title: "Bob Stuth-Wade Exhibit Reception",
    date: "October 6",
    img: bobsw,
  },
  {
    title: "Demonstration - Jeremy Serna",
    // description: "Scott will be demonstrating how to edit and post personal videos online using free apps",
    date: "October 11",
    time: "6 pm",
    img: jserna,
  },
  {
    title: "Drawing With Susan Step",
    description: "Want to learn to draw? Or do you draw and want to improve your skills? Join Susan Step in her weekly drawing classes at the Art Center! The only supplies that you'll need are a sketch pad and a pencil. We encourage students to preregister by calling the Art Center, though it isn't necessary.",
    date: "October 12",
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
    title: "Drawing With Susan Step",
    description: "Want to learn to draw? Or do you draw and want to improve your skills? Join Susan Step in her weekly drawing classes at the Art Center! The only supplies that you'll need are a sketch pad and a pencil. We encourage students to preregister by calling the Art Center, though it isn't necessary.",
    date: "October 19",
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
  {
    title: "BAA Chili Lunch and Silent Auction Fundraiser",
    date: "December 1",
    img: chili,
  },
];

export default events;
