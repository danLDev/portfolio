"use client";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

export enum PopInDirection {
  UP = "up",
  DOWN = "down",
}

export const PopIn: React.FC<{
  children: React.ReactNode;
  direction?: PopInDirection;
  className?: string;
}> = ({ children, className, direction = PopInDirection.UP }) => {
  const key = usePathname();

  return (
    <motion.div
      key={key}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 40,
      }}
      className={className ?? ""}
      initial={{ y: direction === PopInDirection.UP ? 50 : -50, opacity: 0 }}
      exit={{ y: direction === PopInDirection.UP ? 50 : -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};
