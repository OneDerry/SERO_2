interface PaintSplashProps {
  position: "top" | "bottom";
  color?:
    | "light"
    | "dark"
    | "primary"
    | "primary-semi-light"
    | "primary-light"
    | "half-light";
}

// Smooth, even sine-like wave across full width — 45 waves
const splashPath =
  "M0,0 L0,30 " +
  "C10,50 20,50 30,30 C40,10 50,10 60,30 " +
  "C70,50 80,50 90,30 C100,10 110,10 120,30 " +
  "C130,50 140,50 150,30 C160,10 170,10 180,30 " +
  "C190,50 200,50 210,30 C220,10 230,10 240,30 " +
  "C250,50 260,50 270,30 C280,10 290,10 300,30 " +
  "C310,50 320,50 330,30 C340,10 350,10 360,30 " +
  "C370,50 380,50 390,30 C400,10 410,10 420,30 " +
  "C430,50 440,50 450,30 C460,10 470,10 480,30 " +
  "C490,50 500,50 510,30 C520,10 530,10 540,30 " +
  "C550,50 560,50 570,30 C580,10 590,10 600,30 " +
  "C610,50 620,50 630,30 C640,10 650,10 660,30 " +
  "C670,50 680,50 690,30 C700,10 710,10 720,30 " +
  "C730,50 740,50 750,30 C760,10 770,10 780,30 " +
  "C790,50 800,50 810,30 C820,10 830,10 840,30 " +
  "C850,50 860,50 870,30 C880,10 890,10 900,30 " +
  "C910,50 920,50 930,30 C940,10 950,10 960,30 " +
  "C970,50 980,50 990,30 C1000,10 1010,10 1020,30 " +
  "C1030,50 1040,50 1050,30 C1060,10 1070,10 1080,30 " +
  "C1090,50 1100,50 1110,30 C1120,10 1130,10 1140,30 " +
  "C1150,50 1160,50 1170,30 C1180,10 1190,10 1200,30 " +
  "C1210,50 1220,50 1230,30 C1240,10 1250,10 1260,30 " +
  "C1270,50 1280,50 1290,30 C1300,10 1310,10 1320,30 " +
  "C1330,50 1340,50 1350,30 " +
  "L1350,0 Z";

export function PaintSplash({ position, color = "dark" }: PaintSplashProps) {
  const fills: Record<string, string> = {
    dark: "#121212",
    light: "#ffffff",
    primary: "rgb(117, 211, 255)",
    "primary-semi-light": "#ace0ff",
    "primary-light": "#6dcbff",
    "half-light": "#D7EDFF",
  };
  const fill = fills[color];
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
        viewBox="0 0 1350 50"
        preserveAspectRatio="none"
        className={`block w-full h-[30px] md:h-[20px] ${
          position === "bottom"
            ? "rotate-0"
            : position === "top"
              ? "rotate-180"
              : ""
        }`}
      >
        <path d={splashPath} fill={fill} />
      </svg>
    </div>
  );
}
