import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import {Link} from "react-router-dom";
import { Link } from "@mui/material";

const CustomCard = (props) => {
  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: props.maxWth,
        backgroundColor: "#94a3b8",
        marginTop: "1rem",
        marginBottom: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        borderRadius: "12px",
        border: "3px solid black",
        height: "90%",
      }}
      raised
    >
      
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography
          sx={{ marginLeft: "1rem", marginRight: "1rem" }}
          color="text.secondary"
          component="div"
          variant="div"
        >
          {props.body}
        </Typography>
      </CardContent>
      {props.imgPath && (
        <CardMedia
          component="img"
          image={props.imgPath}
          alt={props.imgPath}
          sx={{ height: "70vh" }}
        />
      )}
      {props.learn && (
        <CardActions>
          {/* <Button size="small" color="info">Learn More</Button> */}
          <Link
            href="/event"
            underline="hover"
            color="info"
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "1.5rem",
              border: "2px solid black",
              marginLeft: "2rem",
              marginRight: "2rem",
              marginBottom: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderRadius: "20px",
            }}
          >
            Learn More
          </Link>
          {/* <Typography
            variant={Link}
            href="/programs"
            underline="hover"
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "1.5rem",
              border: "2px solid black",
              marginLeft: "2rem",
              marginRight: "2rem",
              marginBottom: "1rem",
              borderRadius: "20px"
            }}
          >
            Learn More
          </Typography> */}
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;
