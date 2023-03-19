import { forwardRef, useImperativeHandle } from "react";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import Typography from "@mui/material/Typography";
import { IconType } from "react-icons";
import { iconVariants, textVariants } from "../../assets/animations";

const SkillText = motion(Typography);

interface CardProps {
  cardControls: AnimationControls;
  SkillIcon: IconType;
  skillName: string;
}

// show name sets to true it will shake
function Skill({ cardControls, SkillIcon, skillName }: CardProps) {
  const iconControls = useAnimation();
  const textControls = useAnimation();
  const changeCard = async () => {
    cardControls.start("rotate-right");
    iconControls.start("active").then(await iconControls.start("finished"));

    textControls.start("active");
  };
  return (
    <motion.div
      style={{
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onHoverStart={changeCard}
      onHoverEnd={() => {
        cardControls.start("shake");
      }}
    >
      <motion.div
        variants={iconVariants}
        initial="inital"
        animate={iconControls}
      >
        <SkillIcon style={{ fontSize: "clamp(40px,80px,100px)" }} />
      </motion.div>
      <SkillText
        style={{ backgroundColor: "green" }}
        initial="initial"
        animate={textControls}
        variants={textVariants}
      >
        {skillName}
      </SkillText>
    </motion.div>
  );
}

export default Skill;
