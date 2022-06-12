import { createTheme } from "@mui/material/styles";

const baaGray = "#94a3b8";
const arcOrange = "#FFBA60";

const Theme = createTheme({
  palette: {
    common: {
      blue: `${baaGray}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${baaGray}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    social: {
      main: "#4267B2"
    }
  },
  typography: {
    div: {
      fontWeight: 500
    },
    title: {
      backgroundColor: `${baaGray}`,
      opacity: 0.7,
      borderRadius: "15px",
      border: "2px solid black",
      width: "80vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    h1: {
      fontFamily: "Caveat",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      fontWeight: 700,
      marginTop: "1rem",
    },
    info: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      marginTop: "0.6rem",
      marginBottom: "0.6rem",
    },
    h2: {
      fontFamily: "Caveat"
    },
    h3: {
      fontFamily: "Caveat",
    },
    h5: {
      textAlign: "center",
      fontWeight: 600,
      marginBottom: "1rem",
      marginTop: "1rem"
    },
    h6: {
      fontWeight: 600,
      fontSize: "0.9rem",
      fontFamily: 'Prata',
      textAlign: "center",
      display: "list-item"
    },
    p: {
      marginBottom: "1rem"
    },
    caption: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.4rem",
      paddingTop: "0.4rem"
    },
    button: {
      borderRadius: "20px",
      fontFamily: "Caveat",
    },
    social: {
      fontSize: "36px"
    },
    li: {
      textAlign: "center"
    }
  },
});

export default Theme;
