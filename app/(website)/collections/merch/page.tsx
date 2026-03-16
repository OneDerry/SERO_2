import { BasicsHero } from "./components/basics_hero";
import { SimplePieces } from "./components/simple_pieces";

export default function MerchPage() {
  return (
    <main>
      <div className="text-center space-y-4 mt-12">
        <h1 className="text-7xl font-black">
          Basics that don&apos;t feel basic.
        </h1>
        <p>
          Four essentials. Zero nonsense. Built to feel good, look good, and
          live in your closet — not the bottom drawer.
        </p>
      </div>
      <BasicsHero />
      <SimplePieces />
    </main>
  );
}
