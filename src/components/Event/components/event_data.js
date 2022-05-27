import maurine from "../../../assets/mauselfie.jpg";
import peoplepaint from "../../../assets/people_paint.jpg";
import memorial from "../../../assets/memorial.jpg";
import textile from "../../../assets/textile.jpg";
import colors2 from "../../../assets/colors2.jpg";
import bobsw from "../../../assets/bobsw.jpg";
import camera from "../../../assets/camera.jpg";
import chili from "../../../assets/chili.jpg";
import belli from "../../../assets/belli.jpg";
import boyd from "../../../assets/boyd.jpg";
import crafts from "../../../assets/crafts.jpg";

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
  // }
  {
    title: "Maurine Stewart Exhibit",
    date: "May 13 - May 27",
    img: maurine,
  },
  {
    title: "Art Center Closed for Memorial Day",
    date: "May 30",
    img: memorial,
  },
  {
    title: 'People Painters',
    date: 'June 1',
    time: '1 pm - 3 pm',
    img: peoplepaint,
    description: <Link to="/programs">View Program</Link>
  },
  {
    title: '"The Art of Fiber" Fiber & Textile Group Exhibit Reception',
    date: "June 2",
    time: "5 pm - 8 pm",
    img: textile,
    description: "We are looking forward to seeing the fruits of their labors since the Fiber Group is exhibiting their work in the BAA gallery for the month of June. The exhibit, called 'The Art of Fiber,' will be opening with a reception from 5 pm to 8 pm on June 2 in The Art Center gallery. We invite everyone to attend!"
  },
  {
    title: "Fiber & Textile Artist Group",
    date: "June 7",
    time: "2 pm",
    description: <Link to="/programs">View Program</Link>,
    img: textile
  },
  {
    title: 'People Painters',
    date: 'June 8',
    time: '1 pm - 3 pm',
    img: peoplepaint,
    description: <Link to="/programs">View Program</Link>
  },
  {
    title: 'People Painters',
    date: 'June 15',
    time: '1 pm - 3 pm',
    img: peoplepaint,
    description: <Link to="/programs">View Program</Link>
  },
  {
    title: "Fiber & Textile Artist Group",
    date: "June 7",
    time: "2 pm",
    description: <Link to="/programs">View Program</Link>,
    img: textile
  },
  {
    title: 'People Painters',
    date: 'June 22',
    time: '1 pm - 3 pm',
    img: peoplepaint,
    description: <Link to="/programs">View Program</Link>
  },
  {
    title: "Children's Summer Art Camp",
    date: "June 28 - 30",
    img: crafts
  },
  {
    title: 'People Painters',
    date: 'June 29',
    time: '1 pm - 3 pm',
    img: peoplepaint,
    description: <Link to="/programs">View Program</Link>
  },
  {
    title: '"For The Love of Color" Reception',
    date: "July 7",
    img: colors2,
  },
  {
    title: "Children's Summer Art Camp",
    date: "July 12 - 14",
    img: crafts
  },
  {
    title: "Children's Summer Art Camp",
    date: "July 26 - 28",
    img: crafts
  },
  {
    title: '"Scenes from Brown County" Exhibit Reception by Martin Belli',
    date: "August 4",
    time: "5 pm - 8 pm",
    img: belli,
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
