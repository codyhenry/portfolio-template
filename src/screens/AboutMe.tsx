import { styled } from "@mui/material/styles";

const ScrollableContainer = styled("div")`
  overflow-y: scroll;
`;

function AboutMe() {
  return (
    <ScrollableContainer>
      <h2>This container can scroll</h2>
    </ScrollableContainer>
  );
}
/**
 * Icon library is react icons, to find icons:
 * https://react-icons.github.io/react-icons
 * Tools and lanuages
 * Github
 * Small bio
 * Scroll transitions for tools and languages:
 * Make groups of up to 4
 */
export default AboutMe;
