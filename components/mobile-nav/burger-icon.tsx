"use client";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";

export const BurgerIcon: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  return (
    <>
      <motion.span
        className={css({
          backgroundColor: "white",
          position: "absolute",
          top: "40%",
          left: "35%",
          width: "30%",
          height: 3,
        })}
        variants={{
          open: {
            rotate: 45,
            y: 8,
          },
          closed: {},
        }}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      />

      <motion.span
        className={css({
          backgroundColor: "white",
          position: "absolute",
          top: "50%",
          left: "35%",
          width: "30%",
          height: 3,
        })}
        variants={{
          open: {
            scale: 0,
          },
          closed: {
            scale: 1,
          },
        }}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      />

      <motion.span
        className={css({
          backgroundColor: "white",
          position: "absolute",
          top: "60%",
          left: "35%",
          width: "30%",
          height: 3,
        })}
        variants={{
          open: {
            rotate: -45,
            y: -8,
          },
          closed: {},
        }}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      />
    </>
  );
};
