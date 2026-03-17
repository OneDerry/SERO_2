import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

export default function TalkReal() {
  return (
    <main className="relative bg-primary-semilight p-4 mt-8 mb-24 sm:p-8 lg:mb-96">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />

      <div className="mx-auto mt-6 max-w-7xl space-y-4 text-center">
        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
          Talk to Real People. We Actually Reply.
        </h1>
        <p className="mx-auto max-w-5xl text-sm sm:text-base">
          Whether you&apos;ve got questions, feedback, flavour ideas, or just
          want to say what&apos;s up — we&apos;re here for it. We read every
          message and usually reply within 24 hours <br /> (sometimes way
          faster).
        </p>
        <p className="block text-sm">
          Not a robot. Not a black hole. Just Sero.
        </p>
      </div>
    </main>
  );
}
