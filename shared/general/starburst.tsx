"use client";

import { ReactNode, useEffect, useRef } from "react";

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

interface StarburstProps {
  children: ReactNode;
}

export function Starburst({ children }: StarburstProps) {
  const starRef = useRef<SVGSVGElement>(null);
  const shadowRef = useRef<SVGSVGElement>(null);
  const rotationRef = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      rotationRef.current += delta * 0.15;
      lastScrollY.current = currentScrollY;

      const transform = `rotate(${rotationRef.current}deg)`;
      if (starRef.current) starRef.current.style.transform = transform;
      if (shadowRef.current) shadowRef.current.style.transform = transform;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48">
      {/* Shadow star */}
      <svg
        ref={shadowRef}
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full translate-x-1 translate-y-1 transition-transform duration-75 ease-out"
        aria-hidden="true"
      >
        <path d={starburstPath} fill="black" />
      </svg>

      {/* Main star */}
      <svg
        ref={starRef}
        viewBox="0 0 400 400"
        className="relative w-full h-full transition-transform duration-75 ease-out"
        aria-hidden="true"
      >
        <path d={starburstPath} fill="rgb(117, 211, 255)" />
      </svg>

      {/* Emoji content */}
      <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl pointer-events-none">
        {children}
      </span>
    </div>
  );
}
