import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";

import { useState } from "react";

import CustomCard from "../../UI/CustomCard";

const CustomAcc = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return <CustomCard
    title="Upcoming Events"
    maxWth={{ xs: "80%", md: "60%" }}
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
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", md: "row" },
                  justifyContent: { xs: "center", md: "space-evenly" },
                  alignItems: "center",
                }}
                component="div"
              >
                <Avatar
                  alt={props.events[i].title}
                  src={props.events[i].img}
                  sx={{
                    marginRight: { xs: "0", md: "2rem" },
                    width: { xs: "4rem", md: "6rem", lg: "7rem" },
                    height: { xs: "4rem", md: "6rem", lg: "7rem" },
                  }}
                />
                <Typography
                  sx={{
                    width: { xs: "90%", md: "33%" },
                    flexShrink: 0,
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginRight: { xs: "0", md: "1.5rem" },
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                  component="div"
                >
                  {props.events[i].title}
                </Typography>
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
              {props.events[i].price && (
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
                    sx={{ display: { xs: "none", md: "block" } }}
                  >{`Price: ${props.events[i].price}`}</Typography>
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
                <p>{props.events[i].description}</p>
                {props.events[i].price && (
                  <Typography
                    sx={{
                      display: { xs: "block", md: "none" },
                      marginTop: "1rem",
                    }}
                  >
                    Price: {props.events[i].price}
                  </Typography>
                )}
                {props.events[i].instructor && (
                  <div className="flex flex-col justify-evenly items-center">
                    <p>{`Contact ${props.events[i].instructor.name}`}</p>
                    <p>{props.events[i].instructor.phone}</p>
                    <a
                      href={`mailto:${props.events[i].instructor.email}`}
                      className="text-blue-600 font-semibold text-lg border-2 border-solid border-blue-400 px-6 rounded-xl hover:bg-blue-400 hover:text-white"
                    >
                      Email
                    </a>
                  </div>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    }
  />;
};

export default CustomAcc;
