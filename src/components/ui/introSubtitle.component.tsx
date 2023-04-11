import Typography from "@mui/material/Typography";
import { AnimationControls, motion } from "framer-motion";

interface AnimSubtitleProps {
  sentence: string;
  animControls: AnimationControls;
}

export default function AnimatedSubtitle({
  sentence,
  animControls,
}: AnimSubtitleProps) {
  const sentenceVariants = {
    entered: {
      transition: { delay: 0.5, staggerChildren: 2 / sentence.length },
    },
  };

  const letterVariants = {
    start: { opacity: 0, y: 50 },
    entered: { opacity: 1, y: 0 },
  };

  const Subtitle = motion(Typography);
  Subtitle.defaultProps = {
    variant: "body1",
    color: "text.primary",
    initial: "start",
    animate: animControls,
    variants: sentenceVariants,
  };

  return (
    <Subtitle>
      {sentence.split("").map((char, index) => {
        return (
          <motion.span
            // eslint-disable-next-line react/no-array-index-key
            key={`${char}:${index}`}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        );
      })}
    </Subtitle>
  );
}
