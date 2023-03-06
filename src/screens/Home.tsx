import Typography from "@mui/material/Typography";

import Card from "../components/ui/card.component";
import Spacer from "../components/spacer.component";

function Home() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        Hello World!
      </Typography>
      <Card />
      <Spacer side="top" size="xxl" />
      <Card />
      <Typography variant="h1" color="primary">
        Hello World!
      </Typography>
    </div>
  );
}

export default Home;
