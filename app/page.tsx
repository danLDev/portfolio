import { css } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";
import { LeftSideBar } from "./left-sidebar";
import { RightSideBar } from "./right-sidebar";
import { HomepageHero } from "./homepage-hero";
import { PopIn, PopInDirection } from "@/components/pop-in";

const Home: React.FC = () => {
  return (
    <>
      <div
        className={container({
          maxW: "breakpoint-4xl",
          h: "100%",
          position: "relative",
        })}
      >
        <PopIn
          className={css({
            position: "absolute",
            left: "8",
            bottom: 0,
            height: "100%",
            display: "flex",
            flexDir: "column-reverse",
            alignItems: "center",
          })}
        >
          <LeftSideBar />
        </PopIn>

        <PopIn
          className={container({
            maxW: [
              "breakpoint-sm",
              undefined,
              undefined,
              undefined,
              "breakpoint-xl",
              "breakpoint-2xl",
              "breakpoint-3xl",
            ],
            h: "100%",
          })}
        >
          <HomepageHero />
        </PopIn>

        <PopIn
          direction={"down" as PopInDirection}
          className={css({
            position: "absolute",
            right: "8",
            height: "100%",
            display: "flex",
            flexDir: "column",

            alignItems: "center",
            bottom: 0,
          })}
        >
          <RightSideBar />
        </PopIn>
      </div>
    </>
  );
};

export default Home;
