"use client";
import { css } from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";

export const LeftSideBar: React.FC = () => {
  return (
    <>
      <div
        className={css({
          width: "3px",
          backgroundColor: "primary",
          height: "20vh",
        })}
      />
      <Link
        href={"https://github.com/danLDev"}
        target="_blank"
        className={css({ py: "4" })}
      >
        <Image src={"github.svg"} alt={"github"} width={40} height={40} />
      </Link>
      <div
        className={css({
          width: "3px",
          backgroundColor: "primary",
          height: "2vh",
        })}
      />
      <Link
        href={"https://linkedin.com"}
        target="_blank"
        className={css({ py: "4" })}
      >
        <Image src={"linkedin.svg"} alt={"linkedin"} width={40} height={40} />
      </Link>

      {/* <Link href={"/"} className={css({ mb: "auto", py: "20" })}>
        <Image src={"logo.svg"} alt={"home"} width={40} height={40} />
      </Link> */}
    </>
  );
};
