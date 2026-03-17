"use client";

export function BotAvatar({ size = "sm" }: { size?: "sm" | "lg" }) {
  const dim = size === "sm" ? 40 : 56;

  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Antenna */}
      <line
        x1="40"
        y1="8"
        x2="40"
        y2="18"
        stroke="rgb(117, 211, 255)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="40"
        cy="6"
        r="4"
        fill="rgb(117, 211, 255)"
        className="origin-center"
        style={{ animation: "sero-bot-glow 2s ease-in-out infinite" }}
      />

      {/* Body */}
      <rect
        x="16"
        y="18"
        width="48"
        height="44"
        rx="14"
        fill="rgb(117, 211, 255)"
      />

      {/* Face plate */}
      <rect x="22" y="24" width="36" height="26" rx="8" fill="white" />

      {/* Eyes */}
      <circle
        cx="33"
        cy="37"
        r="5"
        fill="rgb(18, 18, 18)"
        style={{ animation: "sero-bot-blink 5s ease-in-out infinite" }}
      />
      <circle
        cx="47"
        cy="37"
        r="5"
        fill="rgb(18, 18, 18)"
        style={{ animation: "sero-bot-blink 5s ease-in-out infinite" }}
      />

      {/* Eye highlights */}
      <circle cx="35" cy="35" r="1.5" fill="white" />
      <circle cx="49" cy="35" r="1.5" fill="white" />

      {/* Smile */}
      <path
        d="M33 44 Q40 50 47 44"
        stroke="rgb(18, 18, 18)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ears */}
      <rect x="8" y="30" width="8" height="16" rx="4" fill="rgb(109, 203, 247)" />
      <rect x="64" y="30" width="8" height="16" rx="4" fill="rgb(109, 203, 247)" />

      {/* Feet */}
      <rect x="24" y="62" width="12" height="8" rx="4" fill="rgb(109, 203, 247)" />
      <rect x="44" y="62" width="12" height="8" rx="4" fill="rgb(109, 203, 247)" />
    </svg>
  );
}
