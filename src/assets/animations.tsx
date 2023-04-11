export const iconVariants = {
  initial: {
    opacity: 1,
    rotate: 0,
  },
  leave: {
    rotate: [0, 0, 30, 180, 0],
    opacity: [1, 0.5, 0.5, 0.2, 0],
    scale: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0, 0.5, 0.8, 1],
    },
  },
  finished: { display: "none" },
  enter: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const textVariants = {
  initial: {
    opacity: 0,
    rotate: 0,
    display: "none",
  },
  enter: {
    display: "block",
    rotate: [-180, -180, -270, -360],
    opacity: [0, 0.2, 0.4, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.5, 0.8, 1],
    },
  },
};

export const cardVariants = {
  start: { scale: 0 },
  entered: {
    scale: 1,
    rotate: 0,
    borderRadius: "5px",
    transition: {
      delay: 0.3,
      scale: { duration: 1.5, type: "spring" },
    },
  },
  reset: {
    scale: 1,
    rotate: 0,
    borderRadius: "5px",
    transition: { scale: { duration: 1.5, type: "spring" } },
  },
  "shape-shift": {
    rotate: [0, 0, 180, 180, 0],
    borderRadius: [5, 5, 50, 50, 5],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
  shake: {
    rotate: [-10, 10, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};

export const cardGroupVariants = {
  start: { scale: 0 },
  entered: {
    scale: 1,
    transition: {
      scale: { duration: 1, type: "spring" },
    },
  },
};

export const testVariants = {
  start: { opacity: 0 },
  entered: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.7 },
  },
  colorflip: {},
};

export const titleVariants = {
  start: { y: "100vw", color: "#eceff1" },
  entered: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
    },
  },
  colorflip: { color: "#29b6f6" },
};

export const sentenceVariants = {
  entered: { transition: { delay: 0.5, staggerChildren: 0.1 } },
};

export const letterVariants = {
  start: { opacity: 0, y: 50 },
  entered: { opacity: 1, y: 0 },
};
