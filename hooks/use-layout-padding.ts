"use client";

import { useState, useEffect } from "react";

export function useLayoutPadding() {
  const [paddingTop, setPaddingTop] = useState("pt-16");

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      const height = header.offsetHeight;
      setPaddingTop(`pt-[${height}px]`);
    }
  }, []);

  return { paddingTop };
}
