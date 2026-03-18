import { HeroCanSection } from "@/app/(website)/components/hero-can";
import { FinallySection } from "@/app/(website)/components/finally";
import { LineupSection } from "@/app/(website)/components/line_up";
import { NewsletterSection } from "@/app/(website)/components/news_letter";

export default function Home() {
  return (
    <main>
      <HeroCanSection />
      <FinallySection />
      <LineupSection />
      <NewsletterSection />
    </main>
  );
}
