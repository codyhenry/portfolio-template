import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useState } from "react";

import tools from "../components/skills/tool-group.component";
import GroupCard from "../components/skills/group.card.component";

const ScrollableContainer = styled("div")`
  overflow-y: scroll;
`;

/**
 * Get object list of tech with icons
 * Each group will have 2-4 motion cards
 * iterate through object and create group
 * each group will create motion cards
 * On hover the cards will show the name + icon
 * The cards will have a random starting location + rotation
 */

// randomize the card coming from top or bottom

function AboutMe() {
  // Jump to sections
  // Iterate through tech

  // Iterate through tools

  return tools.map((subGrouping) => (
    <GroupCard items={subGrouping} key={subGrouping[0].name} />
  ));
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
