import { createTheme } from "@mui/material/styles";
import { blueGrey, lightBlue } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[400],
    },
    text: {
      primary: blueGrey[50],
    },
  },
});

export default defaultTheme;
