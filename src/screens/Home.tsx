import Greeting from "../components/ui/greeting.component";
import Spacer from "../components/utility/spacer.component";
import Introductions from "../components/ui/intro.component";
import IntroAboutMe from "../components/ui/intro-about.component";

/**
 * School, hobbies, current projects, "tell me about yourself"
 * Links to job sites Handshake, LinkedIn, Indeed, Github
 */

/**
 * Create Container to hold all components with display flex and use gap instead of spacer
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
      <Spacer side="top" size="xxl" />
      <IntroAboutMe />
    </>
  );
}
