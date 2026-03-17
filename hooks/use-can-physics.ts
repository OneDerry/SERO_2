"use client";

import { type RefObject, useEffect } from "react";
import gsap from "gsap";

interface CanPhysicsRefs {
  canWrap: RefObject<HTMLDivElement | null>;
  canFloat: RefObject<HTMLDivElement | null>;
  canImg: RefObject<HTMLDivElement | null>;
}

const DRAG_THRESHOLD = 5;

export function useCanPhysics(refs: CanPhysicsRefs) {
  useEffect(() => {
    const el = refs.canWrap.current;
    if (!el) return;

    let isPointerDown = false;
    let isDragging = false;
    let hasFallen = false;
    let didMove = false;

    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let lastTime = 0;
    let velocityX = 0;
    let velocityY = 0;

    let originalLeft = 0;
    let originalTop = 0;
    let originalWidth = 0;
    let originalHeight = 0;
    let capturedOriginal = false;

    // ── Pointer down ────────────────────────────────────────
    function onPointerDown(e: PointerEvent) {
      if (e.button !== 0) return; // left click / primary touch only
      e.preventDefault();
      el!.setPointerCapture(e.pointerId);

      isPointerDown = true;
      isDragging = false;
      didMove = false;

      startX = e.clientX;
      startY = e.clientY;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      lastTime = Date.now();
      velocityX = 0;
      velocityY = 0;
    }

    // ── Pointer move ────────────────────────────────────────
    function onPointerMove(e: PointerEvent) {
      if (!isPointerDown) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Check if we've crossed the drag threshold
      if (!isDragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) {
          return;
        }
        // Start dragging
        isDragging = true;
        didMove = true;
        enterDragMode(e);
      }

      // Track velocity
      const now = Date.now();
      const dt = Math.max(now - lastTime, 1);
      velocityX = ((e.clientX - lastPointerX) / dt) * 16;
      velocityY = ((e.clientY - lastPointerY) / dt) * 16;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      lastTime = now;

      // Move the can
      el!.style.left = `${e.clientX - offsetX}px`;
      el!.style.top = `${e.clientY - offsetY}px`;
    }

    // ── Enter drag mode (switch to fixed positioning) ───────
    function enterDragMode(e: PointerEvent) {
      // Kill GSAP animations
      gsap.killTweensOf(el);
      gsap.killTweensOf(refs.canFloat.current);
      gsap.killTweensOf(refs.canImg.current);

      const rect = el!.getBoundingClientRect();

      // Store original position once
      if (!capturedOriginal) {
        originalLeft = rect.left;
        originalTop = rect.top;
        originalWidth = rect.width;
        originalHeight = rect.height;
        capturedOriginal = true;
      }

      // Clear GSAP inline transforms
      gsap.set(el, { clearProps: "x,y,rotation,scale,opacity" });
      gsap.set(refs.canFloat.current, { clearProps: "y" });
      gsap.set(refs.canImg.current, { clearProps: "rotateX,rotateY" });

      // Switch to fixed
      el!.style.position = "fixed";
      el!.style.left = `${rect.left}px`;
      el!.style.top = `${rect.top}px`;
      el!.style.width = `${rect.width}px`;
      el!.style.zIndex = "9999";
      el!.style.margin = "0";

      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      gsap.to(el, { scale: 1.05, duration: 0.15, overwrite: "auto" });
      el!.style.cursor = "grabbing";
    }

    // ── Pointer up ──────────────────────────────────────────
    function onPointerUp() {
      if (!isPointerDown) return;
      isPointerDown = false;

      if (isDragging) {
        isDragging = false;
        dropCan();
      } else {
        // It was a tap, not a drag
        if (hasFallen) {
          resetCan();
        }
      }
    }

    // ── Drop: fall with gravity + bounce ────────────────────
    function dropCan() {
      hasFallen = true;
      el!.style.cursor = "grab";

      gsap.to(el, { scale: 1, duration: 0.15, overwrite: "auto" });

      const currentTop = parseFloat(el!.style.top);
      const currentLeft = parseFloat(el!.style.left);
      const elHeight = el!.offsetHeight;
      const floorY = window.innerHeight - elHeight;
      const fallDistance = floorY - currentTop;

      // Carry horizontal momentum, clamp to viewport
      const targetLeft = currentLeft + velocityX * 12;
      const clampedLeft = Math.max(
        -originalWidth * 0.3,
        Math.min(targetLeft, window.innerWidth - originalWidth * 0.7),
      );

      // Rotation based on horizontal velocity
      const tiltAngle = Math.max(-30, Math.min(velocityX * 3, 30));

      const duration = Math.max(0.5, Math.min(Math.sqrt(Math.abs(fallDistance) / 350), 1.5));

      gsap.to(el, {
        top: floorY,
        left: clampedLeft,
        rotation: tiltAngle,
        duration,
        ease: "bounce.out",
        overwrite: "auto",
      });
    }

    // ── Reset: tap fallen can to snap it home ───────────────
    function resetCan() {
      hasFallen = false;

      gsap.killTweensOf(el);

      gsap.to(el, {
        left: originalLeft,
        top: originalTop,
        rotation: 0,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.5)",
        overwrite: "auto",
        onComplete: () => {
          // Restore flow positioning
          el!.style.position = "";
          el!.style.left = "";
          el!.style.top = "";
          el!.style.width = "";
          el!.style.zIndex = "";
          el!.style.margin = "";
          el!.style.cursor = "grab";
          gsap.set(el, { clearProps: "all" });
          gsap.set(refs.canFloat.current, { clearProps: "all" });
          gsap.set(refs.canImg.current, { clearProps: "all" });

          capturedOriginal = false;

          // Restart floating bob
          gsap.to(refs.canFloat.current, {
            y: -12,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      });
    }

    // ── Setup ───────────────────────────────────────────────
    el.style.cursor = "grab";
    el.style.touchAction = "none";

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [refs.canWrap, refs.canFloat, refs.canImg]);
}
