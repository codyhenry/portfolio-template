import styled, { css, DefaultTheme, keyframes } from "styled-components";

const defaultCardStyles = (theme: DefaultTheme) => `
  background-color: ${theme.colors.ui.primary};
`;

const basic = (theme: DefaultTheme) => ``;

/* Effect from:
 * https://codepen.io/leandrosimoes/pen/VqZxaG
 */

const glowingAnimation = keyframes`
0% { background-position: 0 0; }
50% { background-position: 400% 0; }
100% { background-position: 0 0; }
`;

const glow = () => css`
  ${glowingAnimation};
`;

const animated = (theme: DefaultTheme) => `
  width: 100px;
  height: 100px;
  border: 2px solid hsl(237, 100%, 24%);
  outline: none;
  color: #fff;
  background: ${theme.colors.bg.sky};
  position: relative;
  z-index: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 1s, height 1s, background 0.5s linear;

  &::before {
    content: "";
    background: linear-gradient(45deg, #4751ff, #00067a, #4751ff);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glow} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:hover {
    width: 110px;
    height: 110px;
    border: 2px solid hsl(237, 100%, 50%);
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.bg.sky};
    left: 0;
    top: 0;
    border-radius: 10px;
    transition: background 0.5s linear;
  }
`;

const variants = {
  basic,
  animated,
};

interface CardProps {
  variant: string;
}

const Card = styled.div<CardProps>`
  ${({ theme }) => defaultCardStyles(theme)}
  ${({ variant, theme }) => variants[variant as keyof typeof variants](theme)}
`;

export default Card;