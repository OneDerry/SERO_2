import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

export default function TalkHero() {
  return (
    <div className="flex relative items-center justify-center gap-8 bg-primary-semilight px-12 py-8 mt-10 mb-64">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />
      <div className="text-center max-w-7xl">
        <h1 className="text-7xl font-black">
          Want to carry Sero? Let&apos;s talk.
        </h1>
        <p className="">
          We&apos;re partnering with a select group of retailers, venues, and
          distributors to bring Sero&apos;s zero-sugar, full-flavor lineup to
          shelves across North America. If you believe in better beverages—and
          know your customers will too—we&apos;d love to hear from you.
        </p>
      </div>
    </div>
  );
}
