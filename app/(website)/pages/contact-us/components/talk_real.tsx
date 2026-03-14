import { TypographyH2, TypographySmall } from "@/shared/common/typography";
import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

export default function TalkReal() {
  return (
    <main className="relative bg-primary-light p-8 mt-8 mb-96">
      <PaintSplash position="top" color="primary-light" />
      <PaintStrides position="bottom" color="primary-light" />

      <div className="space-y-4 max-w-7xl mx-auto text-center">
        <TypographyH2 className="text-4xl font-bold">
          Talk to Real People. We Actually Reply.
        </TypographyH2>
        <TypographySmall className="text-xs mb-4 leading-0">
          Whether you&apos;ve got questions, feedback, flavour ideas, or just
          want to say what&apos;s up — we&apos;re here for it. We read every
          message and usually reply within 24 hours <br /> (sometimes way
          faster).
        </TypographySmall>
        <TypographySmall className="text-xs block">
          Not a robot. Not a black hole. Just Sero.
        </TypographySmall>
      </div>
    </main>
  );
}
