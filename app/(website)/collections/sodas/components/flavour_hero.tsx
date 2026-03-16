import { TextsCarousel } from "@/app/(website)/pages/the-sero-story/components/carousel/texts_carousel";

export default function FlavourHero() {
  return (
    <div className="space-y-32">
      <div className="text-center mt-16 mb-24">
        <h1 className="text-4xl md:text-7xl font-black mb-4">
          All the Flavour. None of the Sugar.
        </h1>
        <p className="text-sm">
          Four crave-worthy sodas. Zero sugar. Nothing artificial. Just clean,
          fizzy perfection — ready to claim a spot in your fridge.
        </p>
      </div>
      <TextsCarousel />
    </div>
  );
}
