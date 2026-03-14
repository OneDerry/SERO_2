export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "healthiest-soda",
    title: "What Is the Healthiest Soda You Can Drink?",
    date: "May 05, 2025",
    excerpt:
      "Let's redefine what 'healthy' means in a can. For years, soda's been the villain of the beverage world. Too much sugar. Artificial colours. Mystery ingredients you can't pronounce...",
    image: "/ice_sero.webp",
    slug: "what-is-the-healthiest-soda-you-can-drink",
  },
  {
    id: "low-sugar-diet",
    title: "What to Drink on a Low Sugar Diet",
    date: "May 05, 2025",
    excerpt:
      "You Don't Have to Sacrifice Taste, Fun, or Sanity. Cutting back on sugar? Smart move. But let's be real — water gets boring fast, and most \"sugar-free\" drinks taste like...",
    image: "/plentySero.webp",
    slug: "what-to-drink-on-a-low-sugar-diet",
  },
  {
    id: "stop-diet-soda",
    title: "Why You Should Stop Drinking Diet Soda (and What to Drink Instead)",
    date: "May 05, 2025",
    excerpt:
      "You ditched the sugar. Now ditch the chemicals. For years, diet soda was the go-to move for anyone trying to cut calories without giving up fizz. But here's the thing...",
    image: "/no_bg_sero.webp",
    slug: "why-you-should-stop-drinking-diet-soda-and-what-to-drink-instead",
  },
  {
    id: "aspartame-vs-stevia",
    title: "Aspartame vs Stevia: What's the Difference?",
    date: "May 05, 2025",
    excerpt:
      "Hint: only one of them actually grows in the ground. If you're trying to cut back on sugar, you've probably seen these two names pop up over and over: Aspartame and stevia. They're both low-calorie sweeteners. They both show up...",
    image: "/Tire_Front.webp",
    slug: "aspartame-vs-stevia-what-s-the-difference",
  },
  {
    id: "stevia-bad",
    title: "Is Stevia Bad for You?",
    date: "May 05, 2025",
    excerpt:
      "Short answer: no. Slightly longer answer: let's unpack it. Stevia is everywhere right now — in drinks, in snack bars, in influencer wellness routines. But with all that popularity comes one big question: Is stevia actually good for you... or...",
    image: "/Citrus_Front.webp",
    slug: "is-stevia-bad-for-you",
  },
  {
    id: "no-compromise",
    title: "The Soda That Doesn't Feel Like a Compromise",
    date: "May 05, 2025",
    excerpt:
      "Because You Shouldn't Have to Choose Between Flavor and Feel-Good Let's be honest: most \"better-for-you\" sodas are just that — better than bad. Not actually good. They give you the health stats, sure. But the taste? Flat. The aftertaste? Weird. The overall...",
    image: "/Rocket_Front.webp",
    slug: "the-soda-that-doesn-t-feel-like-a-compromise",
  },
  {
    id: "zero-sugar-not-equal",
    title: 'Not All "Zero Sugar" Drinks Are Created Equal',
    date: "May 05, 2025",
    excerpt:
      "Some Just Wear the Label. We Actually Mean It. \"Zero sugar\" used to mean something. Now it's slapped on everything from energy drinks loaded with sucralose to sparkling waters that taste like...",
    image: "/SERO.webp",
    slug: "not-all-zero-sugar-drinks-are-created-equal",
  },
  {
    id: "go-to-sero",
    title: "What Your Go-To Sero Says About You",
    date: "May 05, 2025",
    excerpt:
      "Your Tastebuds Are Telling On You. You know how your music taste says a lot about you? Turns out, your soda pick does too. Whether you reach for Citrus Twist or Root Beer, your go-to Sero flavour reveals...",
    image: "/IMG_2441.webp",
    slug: "what-your-go-to-sero-says-about-you",
  },
  {
    id: "stevia-101",
    title: "Stevia 101: What It Is and Why It Matters",
    date: "May 05, 2025",
    excerpt:
      "Because You Actually Care About What's in Your Drink. Stevia's been around for centuries — literally. But only recently has it become the go-to natural sweetener for people who want to skip sugar without...",
    image: "/Doctor_Front.webp",
    slug: "stevia-101-what-it-is-and-why-it-matters",
  },
  {
    id: "no-sugar-sweet-enough",
    title: "No Sugar. We're Sweet Enough.",
    date: "May 05, 2025",
    excerpt:
      "Why We'll Never Use Artificial Sweeteners — Ever. Soda should be bold, fizzy, and fun. It shouldn't come with a side of guilt — or a list of ingredients you need a chemistry degree to decode...",
    image: "/Root_Front.webp",
    slug: "no-sugar-sweet-enough",
  },
];

export const POSTS_PER_PAGE = 6;
