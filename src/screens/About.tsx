import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import tools from "../components/skills/tool-group.component";
import languages from "../components/skills/language-group.component";
import GroupCard from "../components/ui/group.card.component";

const SectionLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

// IMPORTANT: add progress bar for scroll distance make sectionlinks sticky so they scroll too
// IMPORTANT: add animated arrows pointing down
// IMPORTANT: center the typography
export default function About() {
  return (
    <>
      <Typography variant="h1">My Skills</Typography>
      <Typography variant="h4">
        Snippet explaining stuff about skills
      </Typography>
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
