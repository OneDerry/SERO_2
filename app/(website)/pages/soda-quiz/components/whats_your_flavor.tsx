import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

// ── Starburst geometry (shared between SVG + CSS clip-path) ────────
const CX = 200;
const CY = 200;
const OUTER_R = 150;
const INNER_R = 120;
const POINTS = 20;

// SVG path (for the background starburst + shadow)
const starburstPath = (() => {
  const pts: string[] = [];
  for (let i = 0; i < POINTS * 2; i++) {
    const angle = (Math.PI * i) / POINTS - Math.PI / 2;
    const r = i % 2 === 0 ? OUTER_R : INNER_R;
    pts.push(`${CX + r * Math.cos(angle)},${CY + r * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
})();

// CSS polygon clip-path (percentage-based, for clipping the video)
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

export function WhatsYourFlavor() {
  return (
    <main className="relative bg-primary-semilight p-4 mt-8 mb-24 sm:p-8 lg:mb-96">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />

      <div className="mx-auto flex max-w-[96%] flex-col items-center px-2 sm:px-6 md:flex-row lg:px-10">
        <div className="relative flex flex-1 items-center justify-center">
          {/* Cyan shadow starburst (offset behind) */}
          <svg
            viewBox="0 0 400 400"
            className="absolute h-[280px] w-[280px] translate-x-2 translate-y-2 sm:h-[400px] sm:w-[400px] lg:h-[840px] lg:w-[840px]"
            aria-hidden="true"
          >
            <path d={starburstPath} fill="rgb(117, 211, 255)" />
          </svg>

          {/* Starburst container with video */}
          <div className="relative z-10 h-[260px] w-[260px] sm:h-[380px] sm:w-[380px] lg:h-[800px] lg:w-[800px]">
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

        <div className="mt-6 max-w-4xl space-y-4 text-center md:mt-0 md:text-left">
          <h1 className="text-3xl font-black sm:text-5xl lg:text-7xl">
            What&apos;s Your Flavour?
          </h1>
          <p className="max-w-xl text-sm sm:text-base">
            Take the quiz. Answer a few fun questions and we'll tell you which
            Sero soda is basically your soulmate. Zero sugar. Maximum vibe.
          </p>
        </div>
      </div>
    </main>
  );
}
