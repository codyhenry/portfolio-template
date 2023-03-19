import Container from "@mui/material/Container";
import { IconType } from "react-icons";

import Card from "../ui/card.component";

interface Props {
  name: string;
  icon: IconType;
}

interface GroupCardProps {
  items: Array<Props>;
}

// Implement grid
function GroupCard({ items }: GroupCardProps) {
  return (
    <Container>
      {items.map((group) => (
        <Card key={group.name} name={group.name} icon={group.icon} />
      ))}
    </Container>
  );
}

export default GroupCard;
