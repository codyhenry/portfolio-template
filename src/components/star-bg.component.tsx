import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { dark } from "../infrastructure/theme/light-dark";

gsap.registerPlugin(TextPlugin);

/* CODE FROM 
 https://css-tricks.com/an-interactive-starry-backdrop-for-content/
*/

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  background: ${dark.bg.sky};
  z-index: -10;
  height: 100vh;
  width: 100vw;
  transition: background 0.5s linear;
  padding: 0;
  margin: 0;
`;

function Stars() {
  const canvasRef = useRef(Object(null));
  const contextRef = useRef(Object(null));
  const starsRef = useRef(Object(null));
  const vminRef = useRef(Object(null));
  const scaleRef = useRef(Object(null));
  const alphaRef = useRef(Object(null));

  const density = 2;
  const size = 3;
  const scale = 2;
  const proximity = 0.15;
  const defaultAlpha = 0.2;

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext("2d");

    const Load = () => {
      vminRef.current = Math.min(window.innerHeight, window.innerWidth);
      const numStars = Math.floor(vminRef.current * density);
      scaleRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximity,
        scale,
        1
      );
      alphaRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximity,
        1,
        defaultAlpha
      );
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      starsRef.current = [];
      for (let i = 0; i < numStars; i += 1) {
        starsRef.current[i] = {
          x: gsap.utils.random(0, window.innerWidth, 1),
          y: gsap.utils.random(0, window.innerHeight, 1),
          size: gsap.utils.random(1, size, 1),
          scale: 1,
          alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
        };
      }
    };

    const Render = () => {
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      starsRef.current.forEach(
        (star: { alpha: number; x: number; y: number; size: number }) => {
          contextRef.current.fillStyle = `rgba(${dark.bg.stars},${star.alpha})`;
          contextRef.current.beginPath();
          contextRef.current.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
          contextRef.current.fill();
        }
      );
    };

    const Update = ({ x, y }: { x: number; y: number }) => {
      starsRef.current.forEach(
        (star: { alpha: number; x: number; y: number; size: number }) => {
          const distance = Math.sqrt((star.x - x) ** 2 + (star.y - y) ** 2);
          gsap.to(star, {
            scale: scaleRef.current(
              Math.min(distance, vminRef.current * proximity)
            ),
            alpha: alphaRef.current(
              Math.min(distance, vminRef.current * proximity)
            ),
          });
        }
      );
    };

    const Exit = () => {
      gsap.to(starsRef.current, { scale: 1, alpha: defaultAlpha });
    };
    Load();
    gsap.ticker.add(Render);
    gsap.ticker.fps(30);

    window.addEventListener("resize", Load);
    document.addEventListener("pointermove", Update);
    document.addEventListener("pointerleave", Exit);
    return () => {
      window.removeEventListener("resize", Load);
      document.removeEventListener("pointermove", Update);
      document.removeEventListener("pointerleave", Update);
      gsap.ticker.remove(Render);
    };
  }, []);
  return <Canvas ref={canvasRef} />;
}

export default Stars;
