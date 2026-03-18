"use client";

import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Custom shader – animated liquid pour                               */
/* ------------------------------------------------------------------ */

const LiquidMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color("#75d3ff"),
    opacity: 0.7,
  },
  /* vertex */
  `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);

      vec3 pos = position;

      // Multi-frequency wobble for organic feel
      pos.x += sin(pos.y * 8.0 + time * 4.0) * 0.04
             + cos(pos.y * 12.0 + time * 3.0) * 0.025;
      pos.z += sin(pos.y * 20.0 + time * 6.0) * 0.01
             + cos(pos.y * 6.0  + time * 5.0) * 0.02;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  /* fragment */
  `
    uniform vec3  color;
    uniform float time;
    uniform float opacity;
    varying vec2  vUv;
    varying vec3  vNormal;

    void main() {
      // Edge fade
      float edgeFade = smoothstep(0.0, 0.2, vUv.x)
                     * smoothstep(1.0, 0.8, vUv.x);

      // Downward flow animation
      float flow = sin(vUv.y * 40.0 - time * 8.0) * 0.1 + 0.9;

      // Gradient: brighter at top, richer at bottom
      vec3 col = mix(color * 1.2, color * 0.8, vUv.y) * flow;

      // Fresnel edge highlight
      float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
      col += fresnel * 0.25;

      gl_FragColor = vec4(col, edgeFade * opacity);
    }
  `,
);

extend({ LiquidMaterial });

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Liquid() {
  const matRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.time = clock.getElapsedTime();
  });

  return (
    <group position={[0.4, -0.6, 0]}>
      {/* Core pour stream */}
      <mesh>
        <cylinderGeometry args={[0.06, 0.14, 2.8, 32, 32, true]} />
        {/* @ts-ignore – custom shader element */}
        <liquidMaterial
          ref={matRef}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer glow shell */}
      <mesh>
        <cylinderGeometry args={[0.16, 0.28, 2.8, 16, 1, true]} />
        <meshBasicMaterial
          color="#75d3ff"
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
