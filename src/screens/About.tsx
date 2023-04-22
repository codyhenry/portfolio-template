import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { SlArrowDown } from "react-icons/sl";

import GroupCard from "../components/ui/group.card.component";
import tools from "../components/bio/tool-group.component";
import languages from "../components/bio/language-group.component";

const SectionLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

const ArrowsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "red",
});

// IMPORTANT: add progress bar for scroll distance make sectionlinks sticky so they scroll too
// IMPORTANT: add animated arrows pointing down
// TODO: change section links to "top" and "bottom"
export default function About() {
  return (
    <>
      <Typography variant="h3">My Skills</Typography>
      <Typography variant="subtitle1">
        Snippet explaining stuff about skills
      </Typography>
      <ArrowsContainer>
        <Typography variant="h4">Take a Look!</Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SlArrowDown />
          <SlArrowDown />
        </div>
      </ArrowsContainer>
      {/* Jump to sections */}
      <SectionLink href="#languages-section">Languages</SectionLink>
      <SectionLink href="#tools-section">Tools</SectionLink>
      {/* Iterate through languages */}
      <div id="languages-section">
        {languages.map((subGrouping) => (
          <GroupCard items={subGrouping} key={subGrouping[0].name} />
        ))}
      </div>
      <div id="tools-section">
        {/* Iterate through tools */}
        {tools.map((subGrouping) => (
          <GroupCard items={subGrouping} key={subGrouping[0].name} />
        ))}
      </div>
    </>
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
