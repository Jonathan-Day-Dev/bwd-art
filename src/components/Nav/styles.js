import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
// import { Link } from "react-router-dom";

export const MyNav = styled("div")({
  backgroundColor: "primary",
  paddingTop: ".2rem",
  paddingBottom: ".2rem",
});

export const MyLogo = styled("img")({
  height: "fit",
  width: "5rem",
  borderRadius: "100%",
  padding: "0.25rem",
});

export const StyledType = styled(Typography)({
  fontWeight: "bolder",
  fontFamily: "Caveat",
  fontSize: "1.2rem",
  color: "black",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});
