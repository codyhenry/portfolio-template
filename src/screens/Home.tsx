import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";

import Greeting from "../components/ui/greeting.component";
import Spacer from "../components/utility/spacer.component";
import {
  titleVariants,
  testVariants,
  sentenceVariants,
  letterVariants,
} from "../assets/animations";

import introductions from "../components/bio/intro-statements";

/**
 * School, hobbies, current projects, "tell me about yourself"
 * Links to job sites Handshake, LinkedIn, Indeed, Github
 * UCF stuff
 * Graduated from: University of Central Florida
 * Developer at: Pro College Consulting
 * Interested in: Full stack development Embedded Systems
 */

/**
 * Fade in for the subtitle
 * Typewriter effect for the sentence
 * When sentence animation is finished call onAnimationComplete to change color of the subtitle
 */

// const Subtitle = styled(motion(Typography))({
//   color: "green",
// });

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

const line1 = "University of Central Florida";
const line2 = "Pro College Consulting";
const line3 = "Full stack development and embedded systems";

export default function Home() {
  return (
    <>
      <Spacer side="top" size="xxl" />
      <Greeting />
      <Spacer side="top" size="xxl" />
      <Container>
        <motion.div variants={testVariants} initial="start" animate="entered">
          <AnimTitle>Graduate of:</AnimTitle>
          <AnimSubtitle>
            {line1.split("").map((char) => {
              return (
                <motion.span key={char} variants={letterVariants}>
                  {char}
                </motion.span>
              );
            })}
          </AnimSubtitle>
          <AnimTitle>Developer at:</AnimTitle>
          <AnimSubtitle>
            {line2.split("").map((char) => {
              return (
                <motion.span key={char} variants={letterVariants}>
                  {char}
                </motion.span>
              );
            })}
          </AnimSubtitle>
          <AnimTitle>Interested in:</AnimTitle>
          <AnimSubtitle>
            {line3.split("").map((char) => {
              return (
                <motion.span key={char} variants={letterVariants}>
                  {char}
                </motion.span>
              );
            })}
          </AnimSubtitle>
        </motion.div>
      </Container>
    </>
  );
}
