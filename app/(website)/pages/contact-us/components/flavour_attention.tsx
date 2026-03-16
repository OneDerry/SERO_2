import Link from "next/link";
import { Button } from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";

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

export default function FlavourAttention() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[96%] px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left — copy */}
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-sero-dark">
            Let the Flavor Answer Your Questions.
          </h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            Not ready to send a message? That&apos;s cool. Start by cracking
            open your new favourite flavour. You don&apos;t need answers to
            enjoy great soda. <strong>Or maybe Sero is the answer.</strong>
          </p>
          <Button
            asChild
            className="shadow-[4px_4px_0_0_rgba(117,211,255,0.3)] font-black text-base"
          >
            <Link href="/collections/sodas">Browse All Flavors</Link>
          </Button>
        </div>

        {/* Right — video inside starburst */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Cyan shadow starburst (offset behind) */}
          <svg
            viewBox="0 0 400 400"
            className="absolute w-[840px] h-[840px] md:w-[1100px] md:h-[1100px] translate-x-2 translate-y-2"
            aria-hidden="true"
          >
            <path d={starburstPath} fill="rgb(117, 211, 255)" />
          </svg>

          {/* Yellow-green starburst with video clipped inside */}
          <svg
            viewBox="0 0 400 400"
            className="relative z-10 w-[800px] h-[800px] md:w-[1090px] md:h-[1090px]"
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
      </div>
    </section>
  );
}
