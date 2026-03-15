import SeroDifferent from "./components/sero_different";
import SeroDrinker from "./components/sero_drinker";
import SodaHero from "./components/soda_hero";
import { VsHealthySoda } from "./components/vs_healthy_soda";
import { VsSero } from "./components/vs_sero";

export default function WhySero() {
  return (
    <div>
      <SodaHero />
      <SeroDifferent />
      <VsSero />
      <SeroDrinker />
      <VsHealthySoda />
    </div>
  );
}
