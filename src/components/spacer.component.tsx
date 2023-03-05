// const sideVariant = {
//   top: "margin-top",
//   left: "margin-left",
//   right: "margin-right",
//   bottom: "margin-bottom",
// };

// interface SpacerProps {
//   side: string;
//   size: string;
// }

// // translate input values into spacing.js indices
// const getVariant = (side: string, size: string, theme: DefaultTheme) => {
//   const marginSize = theme.spacing[size as keyof typeof theme.spacing];
//   return `${sideVariant[side as keyof typeof sideVariant]}:${marginSize}`;
// };

// const Spacer = styled.div<SpacerProps>`
//   ${({ side, size, theme }) => getVariant(side, size, theme)}
// `;

// export default Spacer;

export {};
