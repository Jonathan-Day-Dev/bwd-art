import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CustomCard = (props) => {
  return (
    <Card
      sx={{
        minWidth: 300,
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
      {props.imgPath && (
        <CardMedia
          component="img"
          image={props.imgPath}
          alt={props.imgPath}
          sx={{ height: "70vh" }}
        />
      )}
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
