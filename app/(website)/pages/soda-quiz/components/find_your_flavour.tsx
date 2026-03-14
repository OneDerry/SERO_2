import { TypographyH2, TypographySmall } from "@/shared/common/typography";

export function FindYourFlavour() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col pb-32">
      <div>
        <TypographyH2>Find Your Flavour</TypographyH2>
        <TypographySmall className="text-center w-full">
          Answer a few quick questions and we&apos;ll tell you your perfect Sero
          match.
        </TypographySmall>
      </div>
      <section></section>
    </main>
  );
}
