import { SoldOutCarousel } from "./carousel/sold_out_carousel";
import { TextsCarousel } from "./carousel/texts_carousel";

export default function GreatPeople() {
  return (
    <div className="w-full space-y-14">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-7xl font-black">
          Good People. Great Soda. Let&apos;s Go!
        </h1>
        <p className="">
          We&apos;re not some faceless brand hiding behind perfect stock photos.
          We show the behind-the-scenes. We drop unreleased flavours. We repost
          the DMs. Follow along. Crack a can. Be part of the Sero story.
        </p>
      </div>
      <section>
        <TextsCarousel />
      </section>
      <section>
        <SoldOutCarousel />
      </section>
    </div>
  );
}
