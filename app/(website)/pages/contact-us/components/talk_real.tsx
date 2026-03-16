import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

export default function TalkReal() {
  return (
    <main className="relative bg-primary-semilight p-8 mt-8 mb-96">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />

      <div className="space-y-4 max-w-7xl mx-auto text-center mt-6">
        <h1 className="text-5xl font-black">
          Talk to Real People. We Actually Reply.
        </h1>
        <p className="text-md mb-4 max-w-5xl mx-auto">
          Whether you&apos;ve got questions, feedback, flavour ideas, or just
          want to say what&apos;s up — we&apos;re here for it. We read every
          message and usually reply within 24 hours <br /> (sometimes way
          faster).
        </p>
        <p className="text-sm block">
          Not a robot. Not a black hole. Just Sero.
        </p>
      </div>
    </main>
  );
}
