import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import {
  titleVariants,
  testVariants,
  sentenceVariants,
  letterVariants,
} from "../../assets/animations";

import introductions from "../bio/intro-statements";

const AnimTitle = motion(Typography);
AnimTitle.defaultProps = {
  variant: "h5",
  color: "primary",
  variants: titleVariants,
};

const AnimSubtitle = motion(Typography);
AnimSubtitle.defaultProps = {
  variant: "body1",
  color: "text.primary",
  variants: sentenceVariants,
};

/* CODE FROM
 * https://brad-carter.medium.com/how-to-animate-a-text-reveal-effect-in-react-with-framer-motion-ae8ddd296f0d
 */

/**
 * set up animations like skill component
 * When all titles appear then run description animations
 * When description animations are done, change title color
 */

export default function Introductions() {
  return (
    <motion.div variants={testVariants} initial="start" animate="entered">
      {introductions.map((intro) => {
        return (
          <>
            <AnimTitle>{intro.title}</AnimTitle>
            <AnimSubtitle>
              {intro.description.split("").map((char) => {
                return (
                  <motion.span key={char} variants={letterVariants}>
                    {char}
                  </motion.span>
                );
              })}
            </AnimSubtitle>
          </>
        );
      })}
    </motion.div>
  );
}
