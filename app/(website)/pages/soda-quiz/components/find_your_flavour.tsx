"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/common/button";

type FlavorKey = "citrus-twist" | "doctor-sero" | "rocket-soda" | "root-beer";

interface QuizOption {
  label: string;
  flavor: FlavorKey;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    question: "Your Friday night plans look like...",
    options: [
      { label: "Netflix and snacks", flavor: "doctor-sero" },
      { label: "House party DJ set", flavor: "rocket-soda" },
      { label: "Fancy dinner reservation", flavor: "citrus-twist" },
      { label: "Midnight gym session", flavor: "root-beer" },
    ],
  },
  {
    question: "Pick a vibe for your dream vacation:",
    options: [
      { label: "Retro diner road trip", flavor: "root-beer" },
      { label: "Beachside skatepark in SoCal", flavor: "rocket-soda" },
      { label: "Tokyo nightlife", flavor: "doctor-sero" },
      { label: "Mountain cabin & hot tub", flavor: "citrus-twist" },
    ],
  },
  {
    question: "Someone hands you the aux. You play...",
    options: [
      { label: "Y2K pop-punk bangers", flavor: "rocket-soda" },
      { label: "Throwback hip-hop", flavor: "doctor-sero" },
      { label: "Timeless classics", flavor: "root-beer" },
      { label: "Hype gym playlist", flavor: "citrus-twist" },
    ],
  },
  {
    question: "What\u2019s your social energy like?",
    options: [
      { label: "Life of the party", flavor: "rocket-soda" },
      { label: "Chill but observant", flavor: "doctor-sero" },
      { label: "Sweet and supportive", flavor: "citrus-twist" },
      { label: "Unapologetically loud", flavor: "root-beer" },
    ],
  },
  {
    question: "Choose a guilty pleasure:",
    options: [
      { label: "Over-the-top sneakers", flavor: "rocket-soda" },
      { label: "Late-night hot wings", flavor: "root-beer" },
      { label: "All-pink outfits", flavor: "citrus-twist" },
      { label: "Watching cringey reality TV", flavor: "doctor-sero" },
    ],
  },
];

const flavorResults: Record<
  FlavorKey,
  { name: string; description: string; image: string; slug: string }
> = {
  "citrus-twist": {
    name: "Citrus Twist",
    description: "bright, bold, and always bringing the energy.",
    image: "/citrus_twist_pack.webp",
    slug: "citrus-twist",
  },
  "doctor-sero": {
    name: "Doctor Sero",
    description:
      "mysterious, flavorful, and a little chaotic\u2014in the best way.",
    image: "/Doctor_Front.webp",
    slug: "doctor-sero",
  },
  "rocket-soda": {
    name: "Rocket Pop",
    description: "loud, proud, and made to stand out.",
    image: "/rocket_soda_pack.webp",
    slug: "rocket-soda",
  },
  "root-beer": {
    name: "Root Beer",
    description: "classic, grounded, and full of depth.",
    image: "/Root_Front.webp",
    slug: "root-beer",
  },
};

export function FindYourFlavour() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<FlavorKey, number>>({
    "citrus-twist": 0,
    "doctor-sero": 0,
    "rocket-soda": 0,
    "root-beer": 0,
  });
  const [finished, setFinished] = useState(false);

  const totalQuestions = questions.length;
  const progress = finished ? 100 : (currentQuestion / totalQuestions) * 100;

  function handleSelect(flavor: FlavorKey) {
    const newScores = { ...scores, [flavor]: scores[flavor] + 1 };
    setScores(newScores);

    if (currentQuestion + 1 >= totalQuestions) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleStartOver() {
    setCurrentQuestion(0);
    setScores({
      "citrus-twist": 0,
      "doctor-sero": 0,
      "rocket-soda": 0,
      "root-beer": 0,
    });
    setFinished(false);
  }

  function getResult(): FlavorKey {
    let maxScore = 0;
    let result: FlavorKey = "citrus-twist";
    for (const [key, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        result = key as FlavorKey;
      }
    }
    return result;
  }

  const result = finished ? flavorResults[getResult()] : null;

  return (
    <main className="mx-auto flex max-w-6xl flex-col pb-32">
      <div className="text-center">
        <h1 className="text-5xl font-black mb-4">Find Your Flavour</h1>
        <p className="text-center w-full">
          Answer a few quick questions and we&apos;ll tell you your perfect Sero
          match.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="mt-8">
        {!finished ? (
          <>
            <h3 className="text-center text-lg font-bold">
              {questions[currentQuestion].question}
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option) => (
                <Button
                  key={option.label}
                  onClick={() => handleSelect(option.flavor)}
                  className="cursor-pointer rounded-full bg-primary h-14 text-base font-black shadow-[6px_6px_0_0_rgba(117,211,255,0.5)]"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </>
        ) : result ? (
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            <div className="flex-1 space-y-4">
              <h3 className="text-5xl font-black">Congrats!</h3>
              <p className="text-xl">
                <span className="font-bold">You&apos;re {result.name}:</span>{" "}
                {result.description}
              </p>
              <p className="text-md text-muted-foreground">
                Add {result.name} to your order and see if we nailed it.
              </p>
              <Button
                asChild
                size="xl"
                className="cursor-pointer rounded-full bg-primary h-14 w-full text-base font-black shadow-[6px_6px_0_0_rgba(117,211,255,0.5)]"
              >
                <Link href={`/products/${result.slug}`}>Add to your order</Link>
              </Button>
              <button
                onClick={handleStartOver}
                className="cursor-pointer text-sm underline underline-offset-4"
              >
                Start Over
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={result.image}
                alt={result.name}
                width={500}
                height={500}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
