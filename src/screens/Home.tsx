import Typography from "@mui/material/Typography";
import Card from "../components/ui/card.component";
import Spacer from "../components/spacer.component";

function Home() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        Hello World!
      </Typography>
      <Spacer side="top" size="xxl" />
      <Typography variant="h2" color="primary">
        Good Bye
      </Typography>
    </div>
  );
}

export default Home;
