import { Card } from "@/shared/common";
import Image from "next/image";

export default function SeroDrinker() {
  return (
    <main className="grid grid-cols-3 gap-24 items-center px-16 py-4">
      <section className="flex flex-col gap-12">
        <Card className="shadow-[6px_6px_0_0_rgba(117,211,255,0.9)] text-center px-8">
          <h1 className="font-black text-xl">🧠 The Health Hacker 💪</h1>
          <p>
            You&apos;re counting macros, tracking steps, maybe even intermittent
            fasting — but you&apos;re not giving up flavour. Sero fits your
            routine without messing with your goals. Zero sugar, zero calories,
            clean ingredients, and full-on satisfaction. This isn&apos;t a cheat
            day — it&apos;s the soda that earned its spot.
          </p>
        </Card>
        <Card className="shadow-[6px_6px_0_0_rgba(117,211,255,0.9)] text-center px-8">
          <h1 className="font-black text-xl">🧊 The Everyday Sipper 📺</h1>
          <p>
            You don&apos;t need a reason to crack a can — it just tastes good.
            Whether it&apos;s mid-lecture, post-workout, or late-night TV,
            Sero&apos;s always a good idea. No sugar, no weird stuff, no reason
            to think twice. It&apos;s a soda you can reach for daily, not just
            on special occasions.
          </p>
        </Card>
      </section>
      <section>
        <Card className="relative w-full h-[900px] shadow-[9px_9px_0_0_rgba(117,211,255,0.9)]">
          <Image
            src="/sero_golf_girls.webp"
            alt="Sero golf girls"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </section>
      <section className="flex flex-col gap-12">
        <Card className="shadow-[6px_6px_0_0_rgba(117,211,255,0.9)] text-center px-8">
          <h1 className="font-black text-xl">🍬 The Craving Killer 🔪</h1>
          <p>
            Sometimes you just want something cold, fizzy, and ridiculously
            good. But you don&apos;t want the sugar crash or guilt trip after.
            That&apos;s where Sero comes in. It kills cravings on the spot
            without wrecking your day. One sip and your sweet tooth shuts up —
            in the best way.
          </p>
        </Card>
        <Card className="shadow-[6px_6px_0_0_rgba(117,211,255,0.9)] text-center px-8">
          <h1 className="font-black text-xl">🧐 The Label Reader 📦</h1>
          <p>
            If you flip the can before you drink it, you&apos;re one of us. You
            want ingredients that make sense and a label you don&apos;t have to
            Google. Sero skips the artificial stuff and keeps it clean, clear,
            and intentional. Every ingredient has a purpose — and no,
            there&apos;s nothing hiding.
          </p>
        </Card>
      </section>
    </main>
  );
}
