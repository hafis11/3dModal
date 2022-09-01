import { Canvas } from "@react-three/fiber";
import React from "react";

export default function Feature() {
  return (
    <section className="flex w-full h-screen relative">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -3.2, 40], fov: 12 }}>
        
      </Canvas>
    </section>
  );
}
