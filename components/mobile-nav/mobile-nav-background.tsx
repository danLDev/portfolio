"use client";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";

export const MobileNavBackground: React.FC<{ isOpen?: boolean }> = ({
  isOpen,
}) => {
  return (
    <div
      className={css({
        position: "absolute",
        overflow: "hidden",
        h: "100%",
        w: "100%",
      })}
    >
      <motion.div
        transition={{
          type: "spring",
          duration: 0.8,
          delay: isOpen ? 0 : 0.2,
        }}
        variants={{
          open: {
            scale: 50,
          },
          closed: {
            scale: 0,
          },
        }}
        className={css({
          backgroundColor: "primary",
          borderRadius: "9px 18px 9px 18px",
          position: "absolute",
          right: 20,
          bottom: 20,
          width: [50, 60, 70],
          height: [50, 60, 70],
        })}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      ></motion.div>
    </div>
  );
};
