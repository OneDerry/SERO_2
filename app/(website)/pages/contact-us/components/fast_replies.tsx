import { ReviewsCarousel } from "@/app/products/[slug]/components/reviews_carousel";
import { TypographyH2 } from "@/shared/common/typography";
import { PaintSplash } from "@/shared/general/paint_splash";

export default function FastReplies() {
  return (
    <main className="relative bg-primary-semilight p-8 mt-8">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintSplash position="bottom" color="primary-semi-light" />

      <div className="space-y-4 max-w-4xl mx-auto text-center">
        <TypographyH2>Fast Replies. Zero Artificial Vibes.</TypographyH2>
        <ReviewsCarousel reviews={[]} />
      </div>
    </main>
  );
}
