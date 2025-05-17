"use client";
import { motion, MotionProps } from "framer-motion";
import clsx from "clsx";

const variants: MotionProps["variants"] = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 18 },
  },
};

interface AnimatedHeadingProps {
  className?: string;
  children: React.ReactNode;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  className,
  children,
}) => (
  <motion.h1
    className={clsx("text-white", className)}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.h1>
);
