import styles from "./Event.module.css";
import marchExhibit from "../../assets/march_image.jpg";
import marchExhibit2 from "../../assets/march_image02.jpg";
import textile from "../../assets/textile_img.png";
import sailboat from "../../assets/sailboat.jpg";

import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";

import CustomCard from "../UI/CustomCard";

const events = [
  {
    title: "Water Media Exhibit - Intake",
    date: "February 28, 2022",
    time: "2 pm to 6 pm",
    img: marchExhibit,
    description:
      "The Brownwood Art Association's March exhibit will feature works of water media done by Association members. Water media include watercolors, gouache, and acrylics on paper. Works submitted must be framed and wired to hang. There is no charge to submit your work into the show. Art may be offered for sale. The exhibit will remain open throughout March.",
    benefit: false,
    instructor: {
      name: "Brenda Shaw",
      phone: "(325) 642-0417",
      email: "regency1298@gmail.com",
      isInstructor: false,
    },
    price: 200
  },
  {
    title: "Water Media Exhibit - Reception",
    date: "March 3, 2022",
    time: "5 pm to 8 pm",
    img: marchExhibit2,
    description:
      "Browse artwork by BAA member artists while enjoying a glass of wine and hors d'oeuvres. The exhibit will remain open throughout March.",
    benefit: false,
  },
  {
    title: "En Plein Air Brownwood Competition - Entry",
    date: "April 2, 2022",
    time: "7:30 am to 9 am",
    img: sailboat,
    description:
      'The event is open to all artists, age 18 and older. Registration will be at the Art Center. Blank canvases will be stamped at this time. Ending time and return to the Art Center will be at 4 pm the same day. One or two plein art artworks created during the event and one studio artwork created at any time of any subject except nudes may be entered in the competition by each artist for a total of 3 works. All works accepted must remain at The Art Center for exhibit and sale through April 23, 2022. Length and width of any frame may not exceed 26". All work must be sturdily framed or gallery wrapped and ready to hang. All work must be for sale. Artists will receive 70% of the sale price of the work, with BAA receieving 30%.',
    benefit: false,
    price: 20,
  },
  {
    title: "En Plein Air Brownwood Competition - Exhibit",
    date: "April 7, 2022",
    time: "5 pm to 8 pm",
    img: sailboat,
    description:
      "The award ceremony will begin at 6 pm and the exhibit will remain open from April 7 to April 22",
    benefit: false,
  },
];

const Event = (props) => {
  const topRef = useRef();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className={styles.container} ref={topRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <CustomCard
          className={styles["textile-card"]}
          maxWth={{ xs: "80%", md: "30%" }}
          title="Tuesday, March 8"
          body={
            <div>
              <p className="text-center font-semibold text-lg mb-4">6:00 pm</p>
              <img src={textile} alt="textile artists" className="mb-4" />
              <p className="leading-tight">
                We are hosting an Organizational Meeting for the Fiber &amp;
                Textile Arts Guild at the Brownwood Art Association. Anyone who
                is interested in fiber &amp; texile art is encouraged to attend!
              </p>
            </div>
          }
        ></CustomCard>
        <CustomCard
          title="Upcoming Events"
          maxWth={{ xs: "80%", md: "60%" }}
          body={
            <div>
              {events[0] && (
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Avatar
                      alt={events[0].title}
                      src={events[0].img}
                      sx={{
                        marginRight: "2rem",
                        width: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                        height: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                      }}
                    />
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginRight: "1.5rem",
                      }}
                      component="div"
                    >
                      {events[0].title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        marginTop: "auto",
                        marginBottom: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <span>{events[0].date}</span>
                      <Typography sx={{ display: { xs: "none", md: "flex" } }}>
                        {events[0].time}
                      </Typography>
                    </Typography>
                    {events[0].price && (
                      <Typography
                        sx={{
                          color: "text.secondary",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "2rem",
                        }}
                        component="div"
                      >
                        <Typography
                          sx={{ display: { xs: "none", md: "block"} }}
                        >{`Price: $${events[0].price}`}</Typography>
                      </Typography>
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <p>{events[0].description}</p>
                      {events[0].price && <Typography sx={{
                        display: { xs: "block", md: "none"}
                      }}>
                        Price: ${events[0].price}
                      </Typography>}
                      {events[0].instructor && (
                        <div className="flex flex-col justify-evenly items-center">
                          <p>{`Contact ${events[0].instructor.name}`}</p>
                          <p>{events[0].instructor.phone}</p>
                          <a
                            href={`mailto:${events[0].instructor.email}`}
                            className="text-blue-600 font-semibold text-lg border-2 border-solid border-blue-400 px-6 rounded-xl hover:bg-blue-400 hover:text-white"
                          >
                            Email
                          </a>
                        </div>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
              {events[1] && (
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Avatar
                      alt={events[1].title}
                      src={events[1].img}
                      sx={{
                        marginRight: "2rem",
                        width: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                        height: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                      }}
                    />
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginRight: "1.5rem",
                      }}
                      component="div"
                    >
                      {events[1].title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        marginTop: "auto",
                        marginBottom: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <span>{events[1].date}</span>
                      <Typography sx={{ display: { xs: "none", md: "flex" } }}>
                        {events[1].time}
                      </Typography>
                    </Typography>
                    {events[1].price && (
                      <Typography
                        sx={{
                          color: "text.secondary",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "2rem",
                        }}
                        component="div"
                      >
                        <Typography
                          sx={{ display: { xs: "none", md: "block"} }}
                        >{`Price: $${events[1].price}`}</Typography>
                      </Typography>
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <p>{events[1].description}</p>
                      {events[1].price && <Typography sx={{
                        display: { xs: "block", md: "none"}
                      }}>
                        Price: ${events[1].price}
                      </Typography>}
                      {events[1].instructor && (
                        <div className="flex flex-col justify-evenly items-center">
                          <p>{`Contact ${events[1].instructor.name}`}</p>
                          <p>{events[1].instructor.phone}</p>
                          <a
                            href={`mailto:${events[1].instructor.email}`}
                            className="text-blue-600 font-semibold text-lg border-2 border-solid border-blue-400 px-6 rounded-xl hover:bg-blue-400 hover:text-white"
                          >
                            Email
                          </a>
                        </div>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
              {events[2] && (
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Avatar
                      alt={events[2].title}
                      src={events[2].img}
                      sx={{
                        marginRight: "2rem",
                        width: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                        height: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                      }}
                    />
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginRight: "1.5rem",
                      }}
                      component="div"
                    >
                      {events[2].title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        marginTop: "auto",
                        marginBottom: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <span>{events[2].date}</span>
                      <Typography sx={{ display: { xs: "none", md: "flex" } }}>
                        {events[2].time}
                      </Typography>
                    </Typography>
                    {events[2].price && (
                      <Typography
                        sx={{
                          color: "text.secondary",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "2rem",
                        }}
                        component="div"
                      >
                        <Typography
                          sx={{ display: { xs: "none", md: "block"} }}
                        >{`Price: $${events[2].price}`}</Typography>
                      </Typography>
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <p>{events[2].description}</p>
                      {events[2].price && <Typography sx={{
                        display: { xs: "block", md: "none"}
                      }}>
                        Price: ${events[2].price}
                      </Typography>}
                      {events[2].instructor && (
                        <div className="flex flex-col justify-evenly items-center">
                          <p>{`Contact ${events[2].instructor.name}`}</p>
                          <p>{events[0].instructor.phone}</p>
                          <a
                            href={`mailto:${events[2].instructor.email}`}
                            className="text-blue-600 font-semibold text-lg border-2 border-solid border-blue-400 px-6 rounded-xl hover:bg-blue-400 hover:text-white"
                          >
                            Email
                          </a>
                        </div>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
              {events[3] && (
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Avatar
                      alt={events[3].title}
                      src={events[3].img}
                      sx={{
                        marginRight: "2rem",
                        width: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                        height: { xs: "4.5rem", md: "6rem", lg: "7rem" },
                      }}
                    />
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginRight: "1.5rem",
                      }}
                      component="div"
                    >
                      {events[3].title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        marginTop: "auto",
                        marginBottom: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <span>{events[3].date}</span>
                      <Typography sx={{ display: { xs: "none", md: "flex" } }}>
                        {events[3].time}
                      </Typography>
                    </Typography>
                    {events[3].price && (
                      <Typography
                        sx={{
                          color: "text.secondary",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "2rem",
                        }}
                        component="div"
                      >
                        <Typography
                          sx={{ display: { xs: "none", md: "block"} }}
                        >{`Price: $${events[3].price}`}</Typography>
                      </Typography>
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                      component="div"
                    >
                      <p>{events[3].description}</p>
                      {events[3].price && <Typography sx={{
                        display: { xs: "block", md: "none"}
                      }}>
                        Price: ${events[3].price}
                      </Typography>}
                      {events[3].instructor && (
                        <div className="flex flex-col justify-evenly items-center">
                          <p>{`Contact ${events[3].instructor.name}`}</p>
                          <p>{events[3].instructor.phone}</p>
                          <a
                            href={`mailto:${events[3].instructor.email}`}
                            className="text-blue-600 font-semibold text-lg border-2 border-solid border-blue-400 px-6 rounded-xl hover:bg-blue-400 hover:text-white"
                          >
                            Email
                          </a>
                        </div>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
            </div>
          }
        />
      </Box>
    </div>
  );
};

export default Event;
