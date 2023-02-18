import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;

const glowing = keyframes`
0% { background-position: 0 0; }
50% { background-position: 400% 0; }
100% { background-position: 0 0; }
`;

const Spacer = styled.div`
  height: 40px;
`;

const Container = styled.div`
  position: relative;
  height: 25vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  background: black;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  border-radius: 1rem;

  &::before {
    content: "";
    height: 40vh;
    width: 35vw;
    background: linear-gradient(90deg, #4751ff, #00067a);
    position: absolute;
    z-index: 2;
    animation: ${gradientAnimation} 3.5s linear infinite;
    animation-play-state: paused;
  }

  &::after {
    content: "";
    height: 24.5vh;
    width: 19.5vw;
    background: black;
    position: absolute;
    z-index: 2;
    border-radius: 1rem;
  }

  &:hover::before {
    animation-play-state: running;
  }

  > span {
    color: white;
    z-index: 5;
  }
`;

/* Effect from:
 * https://codepen.io/leandrosimoes/pen/VqZxaG
 */

const Container2 = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid hsl(237, 100%, 24%);
  outline: none;
  color: #fff;
  background: #00011b;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 1s, height 1s;

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
    animation: ${glowing} 20s linear infinite;
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
    background: #00011b;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

function Card() {
  return (
    <div>
      <Container>
        <span>Test</span>
      </Container>
      <Spacer />
      <Container2>something</Container2>
    </div>
  );
}

export default Card;
