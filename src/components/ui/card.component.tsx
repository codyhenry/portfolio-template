import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { motion, useAnimation } from "framer-motion";
import { IconType } from "react-icons";

import Skill from "./skill.component";
import { cardVariants } from "../../assets/animations";

const CardComponent = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  elevation: 0,
  height: 100,
  width: 100,
  border: `2px solid ${theme.palette.primary.main}`,
}));

const MotionCard = motion(CardComponent);

interface Props {
  name: string;
  icon: IconType;
}

function Card({ name, icon }: Props) {
  const cardControls = useAnimation();

  return (
    <MotionCard
      variants={cardVariants}
      animate={cardControls}
      initial="start"
      whileInView="entered"
      viewport={{ once: false, amount: 0.1 }}
    >
      <Skill cardControls={cardControls} SkillIcon={icon} skillName={name} />
    </MotionCard>
  );
}

export default Card;
