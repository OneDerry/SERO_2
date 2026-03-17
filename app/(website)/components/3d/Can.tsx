"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function Can() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    // Resting tilt (~30°) with gentle oscillation + subtle mouse follow
    groupRef.current.rotation.z = 0.5 + Math.sin(t * 0.4) * 0.08;
    groupRef.current.rotation.y = pointer.x * 0.12;
    groupRef.current.rotation.x = pointer.y * -0.06;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.4}>
      <group ref={groupRef} position={[-0.3, 1.5, 0]}>
        {/* Main body */}
        <mesh castShadow>
          <cylinderGeometry args={[0.42, 0.42, 1.5, 64]} />
          <meshStandardMaterial
            color="#75d3ff"
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>

        {/* Label band */}
        <mesh>
          <cylinderGeometry args={[0.425, 0.425, 0.7, 64]} />
          <meshStandardMaterial
            color="#4db8f0"
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>

        {/* Top lid — tapered inward */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.35, 0.42, 0.12, 64]} />
          <meshStandardMaterial
            color="#c8c8c8"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>

        {/* Top face */}
        <mesh position={[0, 0.87, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.02, 64]} />
          <meshStandardMaterial
            color="#b0b0b0"
            metalness={0.95}
            roughness={0.08}
          />
        </mesh>

        {/* Bottom — tapered */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.42, 0.4, 0.1, 64]} />
          <meshStandardMaterial
            color="#a0a0a0"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Pull tab ring */}
        <mesh position={[0.05, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.06, 0.012, 8, 20]} />
          <meshStandardMaterial
            color="#d0d0d0"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>

        {/* Tab lever */}
        <mesh position={[-0.03, 0.89, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.04, 0.005, 0.025]} />
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={0.95}
            roughness={0.08}
          />
        </mesh>
      </group>
    </Float>
  );
}
