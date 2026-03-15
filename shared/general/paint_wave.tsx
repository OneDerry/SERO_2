interface PaintWaveProps {
  position: "top" | "bottom";
  color?:
    | "light"
    | "dark"
    | "primary"
    | "primary-semi-light"
    | "primary-light"
    | "half-light";
  gradient?: boolean;
  mirrored?: boolean;
  reversed?: boolean;
}

// Single broad wave — deep S-curve across full width
const wavePath =
  "M0,0 L0,50 C200,200 400,200 720,100 C1040,0 1240,0 1440,50 L1440,0 Z";

export function PaintWave({
  position,
  color = "dark",
  gradient = false,
  mirrored = false,
  reversed = false,
}: PaintWaveProps) {
  const fills: Record<string, string> = {
    dark: "#121212",
    light: "#ffffff",
    primary: "rgb(117, 211, 255)",
    "primary-semi-light": "#ace0ff",
    "primary-light": "#6dcbff",
    "half-light": "#D7EDFF",
  };
  const fill = gradient ? "url(#wave-gradient)" : fills[color];
  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-0 ${
        position === "top"
          ? "top-0 -translate-y-[98%]"
          : "bottom-0 translate-y-[98%]"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className={`block w-full h-[80px] md:h-[120px] ${
          position === "top" ? "rotate-180" : ""
        } ${mirrored ? "-scale-x-100" : ""} ${reversed ? "-scale-y-100" : ""}`}
      >
        {gradient && (
          <defs>
            <linearGradient
              id="wave-gradient"
              x1={mirrored ? "1" : "0"}
              y1="0"
              x2={mirrored ? "0" : "1"}
              y2="0"
            >
              <stop offset="0%" stopColor="#ace0ff" />
              <stop offset="100%" stopColor="#6dcbff" />
            </linearGradient>
          </defs>
        )}
        <path d={wavePath} fill={fill} />
      </svg>
    </div>
  );
}
