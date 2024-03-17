import { css } from "@/styled-system/css";
import { stack } from "@/styled-system/patterns";
import Link from "next/link";

export const HomepageHero: React.FC = () => {
  return (
    <div className={stack({ justify: "center", h: "100%", align: "start" })}>
      <h1 className={css({ color: "white", fontSize: "xxx-large" })}>
        Hey there, <br /> I&apos;m{" "}
        <span className={css({ color: "primary" })}>Dan.</span>
      </h1>
      <p className={css({ color: "primary", fontSize: "large" })}>
        A full-stack typescript developer
      </p>
      <p className={css({ color: "white", fontSize: "large" })}>
        Building scalable and robust applications <br />
        in React and NodeJS
      </p>

      <Link
        href={"/"}
        className={css({
          borderRadius: "12px 6px 12px 6px",
          padding: 12,
          backgroundColor: { base: "primary", _hover: "unset" },
          cursor: "pointer",
          color: "white",
          fontSize: "large",
        })}
      >
        Check out my work
      </Link>
    </div>
  );
};
