import { css } from "@/styled-system/css";

const SIZE = 40;
const ROWS = 10;
const COLS = 7;
const SPACING = 8;

export const HomepageGraphic: React.FC = () => {
  return (
    <svg className={css({ width: "100%", height: "100%" })}>
      {Array.from({ length: ROWS }).map((_, row) => (
        <>
          {Array.from({ length: COLS }).map((_, col) => {
            const offset = row * (SIZE / 2 + SPACING);

            return (
              <rect
                style={{
                  animation: `inlineOutline infinite 10s -${Math.floor(Math.random() * 10)}s`,
                }}
                key={`${row} ${col}`}
                className={css({
                  transform: "rotate(45deg)",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                })}
                x={(SIZE + SPACING * 2) * col + offset}
                y={SIZE * (ROWS - row)}
                rx={12}
                opacity={`0.${col + row}`}
                width={SIZE}
                height={SIZE}
              />
            );
          })}
        </>
      ))}
    </svg>
  );
};
