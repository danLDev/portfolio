import { css } from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";

export const RightSideBar: React.FC = () => {
  return (
    <>
      <div
        className={css({
          width: "3px",
          backgroundColor: "primary",
          height: "2vh",
        })}
      />
      <Link href={"/"} className={css({ py: "4" })}>
        <Image src={"logo.svg"} alt={"home"} width={40} height={40} />
      </Link>
      <div
        className={css({
          width: "3px",
          backgroundColor: "primary",
          height: "12vh",
        })}
      />
      <a
        href={"mailto:dan.lincoln.dev@gmail.com"}
        target="blank"
        className={css({
          pt: 12,
          fontWeight: "bold",
          color: "primary",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        })}
      >
        Dan.lincoln.dev@gmail.com
      </a>
    </>
  );
};
