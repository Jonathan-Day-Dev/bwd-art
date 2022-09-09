import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

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

export const StyledButton = styled(Button)({
  fontWeight: "bolder",
  "&:hover": {
    textDecoration: "underline",
  },
});
