import Typography from "@mui/material/Typography";

import Card from "../components/ui/card.component";
import Spacer from "../components/utility/spacer.component";

function Home() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        Put basic info here
      </Typography>
      <Typography variant="h3" color="text.primary">
        School, hobbies, current projects, &quot;tell me about yourself&quot;
        Links to job sites Handshake, LinkedIn, Indeed, Github
      </Typography>
      <Spacer side="top" size="xxl" />
    </div>
  );
}

export default Home;
