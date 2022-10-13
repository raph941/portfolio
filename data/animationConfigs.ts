// Re-usable animation configs for framer-motion

export const fadeInCenter = {
  initial: { opacity: 0.1, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export const fadeInDown = ({
  delay = 0.4,
  duration = 0.4,
}: {
  delay?: number;
  duration?: number;
}) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 1 },
  transition: { duration, delay, type: "Spring" },
});

export const sectionAnimateIntoView = () => ({
  // TODO:Add animation config
});

export const portfolioFilterAnimate = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
  transition: { duration: 0.2 },
};
