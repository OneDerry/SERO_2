"use client";

import { useEffect, useRef } from "react";

// 20-point starburst SVG path centered at 200,200
const starburstPath = (() => {
  const cx = 200;
  const cy = 200;
  const outerR = 150;
  const innerR = 120;
  const points = 20;
  const pts: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
})();

export default function WayBigger() {
  const starRef = useRef<SVGSVGElement>(null);
  const rotationRef = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      // Scroll down → clockwise (positive), scroll up → counterclockwise (negative)
      rotationRef.current += delta * 0.15;
      lastScrollY.current = currentScrollY;

      if (starRef.current) {
        starRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        {/* Rotating starburst with heart */}
        <div className="relative mb-10 w-40 h-40 md:w-48 md:h-48">
          <svg
            ref={starRef}
            viewBox="0 0 400 400"
            className="w-full h-full transition-transform duration-75 ease-out"
            aria-hidden="true"
          >
            <path d={starburstPath} fill="rgb(117, 211, 255)" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl pointer-events-none">
            ❤️
          </span>
        </div>

        {/* Quote */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          &quot;They Actually Care&quot;
        </h2>

        {/* Testimonial */}
        <p className="mt-6 text-sm md:text-base leading-relaxed max-w-2xl text-muted-foreground">
          You can just tell the guys behind this actually care. Not just about
          what&apos;s in the can — but about doing it right. I messaged them
          once about an ingredient and got a thoughtful reply within the hour.
          That doesn&apos;t happen with other brands.
        </p>

        {/* Attribution */}
        <p className="mt-4 text-sm font-bold text-foreground">— Rachel D.</p>
      </div>
    </section>
  );
}
