import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";

import React, { useState } from "react";
import Link from '@mui/material/Link';

import CustomCard from "../../UI/CustomCard";

const CustomAcc = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
      <CustomCard
        title={props.title}
        maxWth={{ xs: "80%", md: "100%" }}
        body={
          <div>
            {props.events.map((event, i) => (
              <Accordion
                expanded={expanded === `panel${i + 1}`}
                onChange={handleChange(`panel${i + 1}`)}
                key={i}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${i + 1}bh-content`}
                  id={`panel${i + 1}bh-header`}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column-reverse", md: "row" },
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: "100%",
                    }}
                    component="div"
                  >
                    <Avatar
                      alt={props.events[i].title}
                      src={props.events[i].img}
                      sx={{
                        marginRight: { xs: "auto", md: "2rem" },
                        marginLeft: "auto",
                        width: { xs: "4rem", md: "6rem", lg: "7rem" },
                        height: { xs: "4rem", md: "6rem", lg: "7rem" },
                      }}
                    />
                    <Typography
                      sx={{
                        width: { xs: "100%", md: "25%" },
                        flexShrink: 0,
                        marginRight: "auto",
                        marginLeft: "auto",
                        fontWeight: 700,
                      }}
                      component="div"
                    >
                      <p className="text-center">{props.events[i].title}</p>
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        marginTop: "auto",
                        marginBottom: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "25%",
                      }}
                      component="div"
                    >
                      <Typography
                        sx={{
                          display: { xs: "none", md: "flex" },
                          flexDirection: "column",
                        }}
                      >
                        <span>{props.events[i].date}</span>
                        <span>{props.events[i].time}</span>
                      </Typography>
                    </Typography>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: "100%",
                    }}
                    component="div"
                  >
                    <p>{props.events[i].description}</p>
                    {props.events[i].price && (
                      <Typography
                        sx={{
                          marginTop: "1rem",
                        }}
                      >
                        Price: {props.events[i].price}
                      </Typography>
                    )}
                    {props.events[i].link && <Link href={props.events[i].link} color="#43a047">Click here to buy tickets!</Link>}
                    {props.events[i].instructor && (
                      <div className="flex flex-col justify-evenly items-center mt-4">
                        <p className="text-center">{`Contact ${props.events[i].instructor.name}`}</p>
                        <p>{props.events[i].instructor.phone}</p>
                        {/* <a
                          href={`mailto:${props.events[i].instructor.email}`}
                          className="text-blue-600 font-semibold text-lg border-2 border-solid border-blue-400 px-6 rounded-xl hover:bg-blue-400 hover:text-white"
                        >
                          Email
                        </a> */}
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        }
      />
  );
};

export default CustomAcc