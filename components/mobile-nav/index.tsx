"use client";
import { useBoolean } from "@/hooks/use-boolean";
import { css } from "@/styled-system/css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNavBackground } from "./mobile-nav-background";
import { AnimatePresence } from "framer-motion";
import { BurgerIcon } from "./burger-icon";
import { MobileNavMenu } from "./mobile-nav-menu";

export const MobileNav: React.FC = () => {
  const [navIsOpen, { off: closeNav, toggle: toggleNavIsOpen }] =
    useBoolean(false);
  const pathname = usePathname();

  useEffect(() => {
    closeNav();
  }, [pathname, closeNav]);

  return (
    <>
      <button
        className={css({
          position: "absolute",
          right: 20,
          bottom: 20,
          color: "white",
          width: [50, 60, 70],
          boxShadow: "0px 0px 0px 8px {colors.primary/40}",
          background: navIsOpen ? "gray" : "primary",
          height: [50, 60, 70],
          cursor: "pointer",
          pointerEvents: "all",
          zIndex: 2,
          fontSize: "xx-large",
          borderRadius: navIsOpen ? "18px 9px 18px 9px" : "9px 18px 9px 18px",
          transition: "border-radius .2s ease-in-out",
        })}
        onClick={toggleNavIsOpen}
      >
        <BurgerIcon isOpen={navIsOpen} />
      </button>

      <MobileNavBackground isOpen={navIsOpen} />
      <MobileNavMenu isOpen={navIsOpen} />
    </>
  );
};
