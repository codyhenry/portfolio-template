import { createTheme } from "@mui/material/styles";
import { blueGrey, lightBlue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[400],
    },
    text: {
      primary: blueGrey[50],
    },
    background: {
      default: "#00011B",
    },
  },
});

export default theme;
