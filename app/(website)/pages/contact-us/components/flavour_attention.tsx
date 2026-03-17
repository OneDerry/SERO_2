import Link from "next/link";
import { Button } from "@/shared/common";

// ── Starburst geometry ─────────────────────────────────────────────
const CX = 200;
const CY = 200;
const OUTER_R = 150;
const INNER_R = 120;
const POINTS = 20;

// SVG path (background starburst + shadow)
const starburstPath = (() => {
  const pts: string[] = [];
  for (let i = 0; i < POINTS * 2; i++) {
    const angle = (Math.PI * i) / POINTS - Math.PI / 2;
    const r = i % 2 === 0 ? OUTER_R : INNER_R;
    pts.push(`${CX + r * Math.cos(angle)},${CY + r * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
})();

// CSS polygon clip-path (percentage-based, clips the video)
const starburstClip = (() => {
  const pts: string[] = [];
  for (let i = 0; i < POINTS * 2; i++) {
    const angle = (Math.PI * i) / POINTS - Math.PI / 2;
    const r = i % 2 === 0 ? OUTER_R : INNER_R;
    const px = ((CX + r * Math.cos(angle)) / 400) * 100;
    const py = ((CY + r * Math.sin(angle)) / 400) * 100;
    pts.push(`${px}% ${py}%`);
  }
  return `polygon(${pts.join(", ")})`;
})();

export default function FlavourAttention() {
  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-[96%] flex-col items-center gap-12 px-6 md:flex-row">
        {/* Left — copy */}
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl font-black leading-tight tracking-tight text-sero-dark md:text-5xl">
            Let the Flavor Answer Your Questions.
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed md:mx-0">
            Not ready to send a message? That&apos;s cool. Start by cracking
            open your new favourite flavour. You don&apos;t need answers to
            enjoy great soda. <strong>Or maybe Sero is the answer.</strong>
          </p>
          <Button
            asChild
            className="font-black text-base shadow-[4px_4px_0_0_rgba(117,211,255,0.3)]"
          >
            <Link href="/collections/sodas">Browse All Flavors</Link>
          </Button>
        </div>

        {/* Right — video inside starburst */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Cyan shadow starburst (offset behind) */}
          <svg
            viewBox="0 0 400 400"
            className="absolute h-[280px] w-[280px] translate-x-2 translate-y-2 sm:h-[500px] sm:w-[500px] md:h-[840px] md:w-[840px] lg:h-[1100px] lg:w-[1100px]"
            aria-hidden="true"
          >
            <path d={starburstPath} fill="rgb(117, 211, 255)" />
          </svg>

          {/* Starburst container with video */}
          <div className="relative z-10 h-[260px] w-[260px] sm:h-[480px] sm:w-[480px] md:h-[800px] md:w-[800px] lg:h-[1090px] lg:w-[1090px]">
            {/* Yellow-green starburst background */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
            >
              <path d={starburstPath} fill="#D4E510" />
            </svg>

            {/* Video clipped to starburst shape via CSS clip-path */}
            <div
              className="absolute inset-0"
              style={{ clipPath: starburstClip }}
            >
              <video
                src="/flavor_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
