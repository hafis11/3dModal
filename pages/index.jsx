import { Canvas } from "@react-three/fiber";
import Model from "../src/components/modal";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
// import { Controllers, Hands, VRButton, XR } from "@react-three/xr";
import { Suspense, useState } from "react";
import { a as web } from "@react-spring/web";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const [open, setOpen] = useState(false);

  const props = useSpring({ open: Number(open) });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <web.section
      style={{ background: props.open.to([0, 1], ["#f0f0f0", "#d25578"]) }}
      className="flex w-full h-screen flex-col items-center relative overflow-hidden"
    >
      <web.h1
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to(
            (o) => `translate3d(-50%,${o * 50 - 100}px,0)`
          ),
        }}
        className={`text-[8em] absolute top-1/2 left-1/2`}
      >
        hello
      </web.h1>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, -30], fov: isTabletOrMobile ? 50 : 25 }}
      >
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.section>
  );
}

export default Hero;
