"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Bubbles({ count = 80 }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distributed around the pour stream and glass area
      arr[i * 3]     = (Math.random() - 0.5) * 0.5 + 0.4;   // x
      arr[i * 3 + 1] = Math.random() * 5 - 3;                // y (glass → can)
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.5;          // z
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    const attr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const t = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      // Rise
      arr[i * 3 + 1] += 0.006 + Math.random() * 0.004;

      // Lateral drift
      arr[i * 3]     += Math.sin(t * 1.5 + i) * 0.0008;
      arr[i * 3 + 2] += Math.cos(t * 1.2 + i * 0.7) * 0.0008;

      // Reset when above scene
      if (arr[i * 3 + 1] > 2.5) {
        arr[i * 3 + 1] = -3;
        arr[i * 3]     = (Math.random() - 0.5) * 0.5 + 0.4;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#ffffff"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
