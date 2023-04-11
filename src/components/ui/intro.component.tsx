import Typography from "@mui/material/Typography";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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
 * Titles come one at a time, subtitles all start at once - normalized speed, color change all at once
 */

export default function Introductions() {
  const testControls = useAnimation();
  const subtitleControls = useAnimation();

  useEffect(() => {
    async function animateText() {
      await testControls.start("entered");
      await subtitleControls.start("entered");
      testControls.start("colorflip");
    }
    animateText();
  }, [subtitleControls, testControls]);

  return (
    <motion.div variants={testVariants} initial="start" animate={testControls}>
      {introductions.map((intro) => {
        return (
          <AnimTitle key={intro.title}>
            {intro.title}
            <AnimSubtitle initial="start" animate={subtitleControls}>
              {intro.description.split("").map((char, index) => {
                return (
                  <motion.span
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${intro.title}:${char}:${index}`}
                    variants={letterVariants}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </AnimSubtitle>
          </AnimTitle>
        );
      })}
    </motion.div>
  );
}
