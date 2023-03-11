import { createTheme } from "@mui/material/styles";
import { blueGrey, lightBlue } from "@mui/material/colors";

/**
 * TODO: personalize your theme object
 * All options: https://mui.com/material-ui/customization/default-theme/
 */

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
      default: "rgb(0, 1, 27)",
    },
  },
});

export default theme;
