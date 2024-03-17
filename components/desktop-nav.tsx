import Link from "next/link";
import { hstack } from "@/styled-system/patterns";

export const DesktopNav: React.FC = () => {
  return (
    <nav
      className={hstack({
        background: "primary",
        height: "50px",
        padding: "8",
      })}
    >
      <div
        className={hstack({
          gap: "20",
          width: "100%",
          maxW: "breakpoint-4xl",
          mx: "auto",
        })}
      >
        <Link href={"/"}>About Me</Link>
        <Link href={"/skills"}>Skills</Link>
        <Link href={""}>Work</Link>
        <Link href={""}>Contact</Link>
      </div>
    </nav>
  );
};
