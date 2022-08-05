import bobsw from "../../../assets/bobsw.jpg";
import camera from "../../../assets/camera.jpg";
import chili from "../../../assets/chili.jpg";
// import belli from "../../../assets/belli.jpg";
import boyd from "../../../assets/boyd.jpg";
import textileart from "../../../assets/textileart.jpg";

import {Link} from "react-router-dom";

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
  //   title: '"Scenes from Brown County" Exhibit Reception by Martin Belli',
  //   date: "August 4",
  //   time: "5 pm - 8 pm",
  //   img: belli,
  //   description: "Martin Belli moved to Brownwood from New York in 1994. He is currently the Medical Director and Chief Pathologist at Hendrick Medical Center in Brownwood. \"Scenes from Brown County\" is Dr. Belli's first solo exhibit. Much of his photography is shot at his Brown County ranch."
  // },
    {
    title: "Fiber & Textile Artist Group - Theme is \"The Artist's Interpretaion of Recycling\"",
    date: "August 19",
    time: "2 pm",
    description: <Link to="/programs">View Program</Link>,
    img: textileart
  },
  {
    title: "The Eclectic World of Boyd Harris Exhibit Reception",
    date: "September 1",
    time: "5 pm - 8 pm",
    img: boyd,
  },
  {
    title: "Bob Stuth-Wade Exhibit Reception",
    date: "October 6",
    img: bobsw,
  },
  {
    title: "BAA Photo Group Exhibit Reception",
    date: "November 3",
    img: camera,
  },
  {
    title: "BAA Chili Lunch and Silent Auction Fundraiser",
    date: "December 1",
    img: chili,
  },
  
];

export default events;
