export const iconVariants = {
  initial: {
    opacity: 1,
    rotate: 0,
  },
  active: {
    rotate: [0, 0, -180, -180, 0],
    opacity: [1, 0.5, 0.2, 0, 0],
    scale: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
  finished: { display: "none" },
};

export const textVariants = {
  initial: {
    opacity: 0,
    display: "none",
  },
  active: {
    display: "block",
    opacity: [0, 0, 0.2, 0.5, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

export const cardVariants = {
  entering: { scale: 0 },
  entered: {
    scale: 1,
    rotate: 1,
    transition: { scale: { duration: 1, type: "spring" } },
  },
  "rotate-right": {
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
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
