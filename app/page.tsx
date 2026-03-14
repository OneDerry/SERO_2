import { HeroSection } from "@/app/(website)/components/hero";
import { FinallySection } from "@/app/(website)/components/finally";
import { LineupSection } from "@/app/(website)/components/line_up";
import { NewsletterSection } from "@/app/(website)/components/news_letter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FinallySection />
      <LineupSection />
      <NewsletterSection />
    </main>
  );
}
