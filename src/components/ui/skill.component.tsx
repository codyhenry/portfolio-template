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

export default function Skill({
  cardControls,
  SkillIcon,
  skillName,
}: CardProps) {
  const iconControls = useAnimation();
  const textControls = useAnimation();

  const changeCard = async () => {
    cardControls.start("shape-shift");
    await iconControls.start("leave");
    iconControls.start("finished");
    textControls.start("enter");
  };
  const cancelAnimation = async () => {
    iconControls.stop();
    textControls.stop();
    cardControls.start("reset");
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
        cancelAnimation();
        cardControls.start("shake");
        textControls.start("initial");
        iconControls.start("enter");
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
        initial="initial"
        animate={textControls}
        variants={textVariants}
      >
        {skillName}
      </SkillText>
    </motion.div>
  );
}
