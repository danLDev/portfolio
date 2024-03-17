import { css } from "@/styled-system/css";
import { stack } from "@/styled-system/patterns";
import Link from "next/link";

export const HomepageHero: React.FC = () => {
  return (
    <div className={stack({ justify: "center", h: "100%", align: "start" })}>
      <h1
        className={css({
          color: "white",
          fontSize: ["xx-large", undefined, undefined, "xxx-large"],
        })}
      >
        Hey there, <br /> I&apos;m{" "}
        <span className={css({ color: "primary" })}>Dan.</span>
      </h1>

      <p
        className={css({
          color: "primary",
          fontSize: ["medium", undefined, "large"],
        })}
      >
        A full-stack typescript developer
      </p>

      <p
        className={css({
          color: "white",
          fontSize: ["medium", undefined, "large"],
        })}
      >
        Building scalable and robust applications <br />
        in React and NodeJS
      </p>

      <Link
        href={"/"}
        className={css({
          borderRadius: {
            _hover: "12px 6px 12px 6px",
            base: "6px 12px 6px 12px",
          },
          py: 12,
          px: [8, 12, 14, 18],
          backgroundColor: { base: "primary", _hover: "unset" },
          border: { base: "solid {colors.primary} 2px" },
          cursor: "pointer",
          color: "white",
          fontSize: ["medium", undefined, "large"],
          transition: ".1s ease-in-out",
        })}
      >
        Check out my work
      </Link>
    </div>
  );
};
