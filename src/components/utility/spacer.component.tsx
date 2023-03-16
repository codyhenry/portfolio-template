import { Theme, styled } from "@mui/material/styles";
/**
 * EXAMPLE : push an element to the right by 16px
 * <Spacer side="right" size="md" />
 */
const sideVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

/**
 * TODO: Customize spacing if necessary
 * MUI multiplies the value by 8px. EX md: 2 = 2*8px = 16px
 * https://mui.com/material-ui/customization/spacing/
 */
const sizeVariant = {
  xs: 0.5,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 8,
};

interface SpacerProps {
  side: string;
  size: string;
}

const getVariant = (side: string, size: string, theme: Theme) => {
  const marginSize = theme.spacing(
    sizeVariant[size as unknown as keyof typeof sizeVariant]
  );
  const sidePosition = sideVariant[side as keyof typeof sideVariant];
  return { [sidePosition]: marginSize };
};

const Spacer = styled("div")<SpacerProps>(({ side, size, theme }) =>
  getVariant(side, size, theme)
);

export default Spacer;
