"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Can } from "./Can";
import { Liquid } from "./Liquid";
import { Glass } from "./Glass";
import { Bubbles } from "./Bubbles";

function Scene() {
  return (
    <>
      {/* Lighting rig */}
      <ambientLight intensity={0.35} />

      {/* Key light — upper right, brand-tinted */}
      <spotLight
        position={[3, 4, 4]}
        angle={0.35}
        penumbra={0.6}
        intensity={1.8}
        color="#75d3ff"
      />

      {/* Fill light — left side, neutral */}
      <pointLight position={[-3, 1, 2]} intensity={0.6} color="#ffffff" />

      {/* Rim / back light for edge highlights */}
      <pointLight position={[0, 2, -4]} intensity={0.8} color="#ace0ff" />

      {/* 3D elements */}
      <Can />
      <Liquid />
      <Glass />
      <Bubbles />

      {/* HDR environment for metallic reflections */}
      <Environment preset="city" background={false} />
    </>
  );
}

export default function SodaScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
