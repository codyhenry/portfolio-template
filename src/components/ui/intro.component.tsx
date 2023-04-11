import Typography from "@mui/material/Typography";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import AnimatedSubtitle from "./introSubtitle.component";

import { titleVariants, testVariants } from "../../assets/animations";

import introductions from "../bio/intro-statements";

const AnimatedTitle = motion(Typography);
AnimatedTitle.defaultProps = {
  variant: "h5",
  color: "primary",
  variants: titleVariants,
};

/* CODE FROM
 * https://brad-carter.medium.com/how-to-animate-a-text-reveal-effect-in-react-with-framer-motion-ae8ddd296f0d
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
          <AnimatedTitle key={intro.title}>
            {intro.title}
            <AnimatedSubtitle
              animControls={subtitleControls}
              sentence={intro.description}
            />
          </AnimatedTitle>
        );
      })}
    </motion.div>
  );
}
