import SeroDifferent from "./components/sero_different";
import SeroDrinker from "./components/sero_drinker";
import SodaHero from "./components/soda_hero";
import { LookingTable } from "./components/table";
import { VsHealthySoda } from "./components/vs_healthy_soda";
import { VsDietSoda } from "./components/vs_diet_soda";
import { VsSero } from "./components/vs_sero";
import SodaQs from "./components/soda_qs";

export default function WhySero() {
  return (
    <div>
      <SodaHero />
      <SeroDifferent />
      <VsSero />
      <SeroDrinker />
      <VsHealthySoda />
      <LookingTable />
      <VsDietSoda />
      <SodaQs />
    </div>
  );
}
