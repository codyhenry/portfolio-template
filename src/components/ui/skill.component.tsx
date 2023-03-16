import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { IconType } from "react-icons";

const SkillName = motion(Typography);

interface CardProps {
  isHidden: boolean;
  SkillIcon: IconType;
  skillName: string;
}

function Skill({ isHidden, SkillIcon, skillName }: CardProps) {
  return (
    <>
      <motion.div style={{ opacity: isHidden ? 1 : 0 }}>
        <SkillIcon />
      </motion.div>
      <SkillName sx={{ display: isHidden ? 0 : 1 }}>{skillName}</SkillName>
    </>
  );
}

export default Skill;
