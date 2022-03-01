import { createTheme } from "@mui/material/styles";

const arcBlue = "#94a3b8";
const arcOrange = "#FFBA60";

const Theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 600,
      fontSize: 20,
      fontFamily: 'Prata'
    },
  },
});

export default Theme;
