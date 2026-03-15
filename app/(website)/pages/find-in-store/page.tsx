import ButForNow from "./components/but_for_now";
import { NextCard } from "./components/next_card";
import StoreHero from "./components/store_hero";

export default function FindInStorePage() {
  return (
    <main>
      <StoreHero />
      <NextCard />
      <ButForNow />
    </main>
  );
}
