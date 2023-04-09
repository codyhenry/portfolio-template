import Greeting from "../components/ui/greeting.component";
import Spacer from "../components/utility/spacer.component";
import Introductions from "../components/ui/intro.component";

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

export default function Home() {
  return (
    <>
      <Spacer side="top" size="xxl" />
      <Greeting />
      <Spacer side="top" size="xxl" />
      <Introductions />
    </>
  );
}
