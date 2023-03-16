import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

import Skill from "./skill.component";

const CardComponent = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  elevation: 0,
  height: 100,
  width: 100,
  border: `2px solid ${theme.palette.primary.main}`,
}));

const MotionCard = motion(CardComponent);

interface Props {
  Content: any;
}

function Card({ Content }: Props) {
  const [isHovered, setisHovered] = useState(false);
  return (
    <MotionCard
      onHoverStart={() => setisHovered(false)}
      onHoverEnd={() => setisHovered(true)}
      whileHover={{
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        transition: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        },
      }}
      animate={{ rotate: isHovered ? [-10, 10, -10, 10, -10, 10, 0] : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Skill isHidden={isHovered} SkillIcon={} SkillName={""} /> */}
    </MotionCard>
  );
}

// when the card is hovered over - perform animation
// interface CardProps {}

// function Card({ content }) {
//   const [isHidden, setisHidden] = useState(false);
// }

// State that changes on hover
export default Card;
