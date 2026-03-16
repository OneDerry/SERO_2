import FlavourHero from "./components/flavour_hero";
import Sodas from "./components/sodas";
import { SodasCarousel } from "./components/sodas_carousel";
import { sharedReviews } from "@/data/products";

export default function SodasPage() {
  return (
    <main>
      <FlavourHero />
      <Sodas />
      <SodasCarousel reviews={sharedReviews} />
    </main>
  );
}
