import Spacer from "../components/spacer.component";
import Card from "../components/ui/card.component";

function Home() {
  return (
    <div>
      <h1 style={{ color: "white" }}>Hello World</h1>
      <Spacer side="top" size="none" />
      <h1 style={{ color: "white" }}>Underneath</h1>
      <Card variant="animated" />
    </div>
  );
}

export default Home;
