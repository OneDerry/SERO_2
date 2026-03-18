"use client";

import { useMemo } from "react";
import * as THREE from "three";

export function Glass() {
  const geometry = useMemo(() => {
    // Drinking-glass profile (rotated around Y axis)
    const pts = [
      new THREE.Vector2(0, 0),       // bottom center
      new THREE.Vector2(0.38, 0),    // bottom edge
      new THREE.Vector2(0.36, 0.04), // bottom bevel
      new THREE.Vector2(0.33, 0.1),  // lower body
      new THREE.Vector2(0.38, 0.7),  // mid body
      new THREE.Vector2(0.52, 1.35), // rim
      new THREE.Vector2(0.50, 1.4),  // rim top
      new THREE.Vector2(0.47, 1.35), // inner rim
      new THREE.Vector2(0.33, 0.7),  // inner mid
      new THREE.Vector2(0.28, 0.1),  // inner lower
      new THREE.Vector2(0, 0.05),    // inner bottom center
    ];
    return new THREE.LatheGeometry(pts, 64);
  }, []);

  return (
    <group position={[0.4, -2.9, 0]}>
      {/* Glass body */}
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          roughness={0.05}
          metalness={0}
          transmission={0.92}
          thickness={0.5}
          ior={1.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Liquid fill inside glass */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.38, 0.32, 0.7, 32]} />
        <meshStandardMaterial
          color="#75d3ff"
          transparent
          opacity={0.55}
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>

      {/* Liquid surface highlight */}
      <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.38, 32]} />
        <meshStandardMaterial
          color="#a0e4ff"
          transparent
          opacity={0.35}
          roughness={0.05}
        />
      </mesh>
    </group>
  );
}
