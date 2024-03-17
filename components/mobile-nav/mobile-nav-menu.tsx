"use client";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";
import Link from "next/link";

const MOBILE_NAV_LINKS = [
  { href: "/", label: "About Me" },
  { href: "/skills", label: "Skills" },
  { href: "/", label: "Work" },
  { href: "/", label: "Contact" },
];
export const MobileNavMenu: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  return (
    <ul
      className={css({
        zIndex: 1,
        position: "absolute",
        p: "4",
        pointerEvents: "all",
        overflow: "hidden",
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        h: "100%",
        w: "100%",
      })}
    >
      {MOBILE_NAV_LINKS.map((l, i) => (
        <motion.li
          transition={{ delay: isOpen ? 0.2 + i * 0.05 : i * 0.05 }}
          variants={{
            open: {
              opacity: 1,
              x: 0,
            },
            closed: {
              opacity: 0,
              x: -10,
            },
          }}
          initial={"closed"}
          animate={isOpen ? "open" : "closed"}
        >
          <Link
            href={l.href}
            className={css({
              fontSize: "xx-large",
            })}
          >
            {l.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};
