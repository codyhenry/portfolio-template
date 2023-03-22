import Button from "@mui/material/Button";
import tools from "../components/skills/tool-group.component";
import languages from "../components/skills/language-group.component";
import GroupCard from "../components/ui/group.card.component";

export default function About() {
  // Jump to sections
  return (
    <>
      <a href="#tools-section">
        <Button sx={{ color: "#fff" }}>Tools</Button>
      </a>
      {/* Iterate through languages */}
      {languages.map((subGrouping) => (
        <GroupCard items={subGrouping} key={subGrouping[0].name} />
      ))}
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
