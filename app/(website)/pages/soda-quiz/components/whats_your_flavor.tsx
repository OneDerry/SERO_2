import { TypographyH2 } from "@/shared/common/typography";
import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

// 16-point starburst SVG path centered at 200,200
const starburstPath = (() => {
  const cx = 200;
  const cy = 200;
  const outerR = 150;
  const innerR = 120;
  const points = 20;
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
})();

export function WhatsYourFlavor() {
  return (
    <main className="relative bg-primary-semilight p-8 mt-8 mb-96">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />

      <div className="mx-auto max-w-[90%] px-6 flex flex-col md:flex-row items-center">
        <div className="relative flex-1 flex items-center justify-center">
          {/* Cyan shadow starburst (offset behind) */}
          <svg
            viewBox="0 0 400 400"
            className="absolute w-[840px] h-[840px] md:w-[800px] md:h-[800px] translate-x-2 translate-y-2"
            aria-hidden="true"
          >
            <path d={starburstPath} fill="rgb(117, 211, 255)" />
          </svg>

          {/* Yellow-green starburst with video clipped inside */}
          <svg
            viewBox="0 0 400 400"
            className="relative z-10 w-[800px] h-[800px] md:w-[790px] md:h-[790px]"
          >
            <defs>
              <clipPath id="starburst-clip">
                <path d={starburstPath} />
              </clipPath>
            </defs>
            {/* Starburst fill as background */}
            <path d={starburstPath} fill="#D4E510" />
            {/* Video clipped to starburst shape */}
            <foreignObject
              x="0"
              y="0"
              width="400"
              height="400"
              clipPath="url(#starburst-clip)"
            >
              <video
                src="/flavor_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </foreignObject>
          </svg>
        </div>
        <div>
          <TypographyH2 className="text-4xl font-bold">
            What&apos;s Your Flavour?
          </TypographyH2>
        </div>
      </div>
    </main>
  );
}
