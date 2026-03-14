import CouldNot from "./components/could_not";
import GreatPeople from "./components/great_people";
import Hero from "./components/hero";
import Manifesto from "./components/manifesto";
import SeriousSero from "./components/serious_sero";
import Buzz from "./components/buzz";
import Care from "./components/care";
import Average from "./components/average";
import WayBigger from "./components/way_bigger";

export default function TheSeroStoryPage() {
  return (
    <main className="max-w-[90%] mx-auto">
      <Hero />
      <Manifesto />
      <CouldNot />
      <Care />
      <SeriousSero />
      <Average />
      <Buzz />
      <WayBigger />
      <GreatPeople />
    </main>
  );
}
