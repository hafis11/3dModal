import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import M1 from "../../src/components/m1";
import { a as three } from "@react-spring/three";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
// import useRefs from "react-use-refs";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export default function Feature() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        flat
        linear
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, -3.2, 40], fov: 25 }}
      >
        <ScrollControls pages={5}>
          <Suspense fallback={null}>
            <Composition />
          </Suspense>
        </ScrollControls>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

function Composition({ ...props }) {
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const group = useRef();
  const keyLight = useRef();
  const mbp16 = useRef();
  const stripLight = useRef();
  const fillLight = useRef();

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4)
    const r2 = scroll.range(1 / 4, 1 / 4)
    const r3 = scroll.visible(4 / 5, 1 / 5)
    mbp16.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      (-Math.PI / 1.45) * r2,
      4,
      delta
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      (-width / 7) * r2,
      4,
      delta
    );
    group.current.scale.x =
      group.current.scale.y =
      group.current.scale.z =
        THREE.MathUtils.damp(
          group.current.scale.z,
          1 + 0.24 * (1 - rsqw(r1)),
          4,
          delta
        );
    keyLight.current.position.set(
      0.25 + -15 * (1 - r1),
      4 + 11 * (1 - r1),
      3 + 2 * (1 - r1)
    );
  });

  return (
    <>
      <spotLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight ref={keyLight} castShadow intensity={6}>
        <orthographicCamera
          attachObject={["shadow", "camera"]}
          args={[-10, 10, 10, -10, 0.5, 30]}
        />
      </directionalLight>
      <group ref={group} position={[0, -height / 2.65, 0]} {...props}>
        <spotLight
          ref={stripLight}
          position={[width * 2.5, 0, width]}
          angle={0.19}
          penumbra={1}
          intensity={0.25}
        />
        <spotLight
          ref={fillLight}
          position={[0, -width / 2.4, -width * 2.2]}
          angle={0.2}
          penumbra={1}
          intensity={2}
          distance={width * 3}
        />
        <M1 ref={mbp16} scale={width / 21} />
      </group>
    </>
  );
}
