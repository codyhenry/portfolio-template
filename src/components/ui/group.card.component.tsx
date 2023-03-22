import Container from "@mui/material/Container";
import { IconType } from "react-icons";
import { motion, useAnimation } from "framer-motion";
import { styled } from "@mui/material/styles";

import Card from "./card.component";
import { groupVariants } from "../../assets/animations";

const CardsContainer = styled(Container)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 5,
  width: 300,
  marginLeft: 0,
  marginBottom: 1000,
  minHeight: 250,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  position: "relative",
}));

const MotionContainer = motion(CardsContainer);
interface Props {
  name: string;
  icon: IconType;
}

interface GroupCardProps {
  items: Array<Props>;
}

// marginBottom of lastChild = 100
export default function GroupCard({ items }: GroupCardProps) {
  const randomStart = Math.floor(Math.random() * 81 + 10);
  const groupControls = useAnimation();

  return (
    <MotionContainer
      sx={{
        left: `clamp(10px, calc(${randomStart}% - 300px), calc(95%-300px))`,
      }}
      initial="start"
      variants={groupVariants}
      animate={groupControls}
      whileInView="entered"
      viewport={{ once: false, amount: 0.5 }}
    >
      {items.map((group) => (
        <Card key={group.name} name={group.name} icon={group.icon} />
      ))}
    </MotionContainer>
  );
}
