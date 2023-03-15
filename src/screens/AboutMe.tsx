import { styled } from "@mui/material/styles";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

import Card from "../components/ui/card.component";

const ScrollableContainer = styled("div")`
  overflow-y: scroll;
`;

/**
 * Get object list of tech with icons
 * Each group will have 2-4 motion cards
 * iterate through object and create group
 * each group will create motion cards
 */

// randomize the card coming from top or bottom
// const cardVariants: Variants = {
//   offscreen: {
//     y: -500,
//   },
//   onscreen: {
//     y: 0,
//     transition: {
//       damping: 25,
//       stiffness: 500,
//     },
//   },
// };

function AboutMe() {
  const [move, setMove] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <motion.div
        style={{
          height: 100,
          width: 100,
          backgroundColor: "white",
          borderRadius: 15,
        }}
        animate={{ x: move ? 200 : -200 }}
        initial={false}
        transition={{ type: "spring" }}
        onClick={() => {
          setMove(!move);
        }}
      />
    </div>
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
