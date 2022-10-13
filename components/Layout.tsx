import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { AnimatedDiv } from "./StyledElements";

interface LayoutProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <AnimatedDiv
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "linear" }}
  >
    {children}
  </AnimatedDiv>
);

export { Layout };
