import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  elevation: 0,
  height: 100,
  width: 100,
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: " 0px 5px 10px 0px rgba(41, 182, 246,0.7)",
  transition: "all 0.4s ease 0s",
  "&:hover": {
    transform: " scale(1.05)",
    boxShadow: " 0px 10px 20px 2px rgba(41, 182, 246,0.7)",
  },
}));

export default Card;
