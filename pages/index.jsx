import Head from "next/head";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Floor from "../src/components/floor";
import Model from "../src/components/modal";
import { Suspense } from "react";
import {
  OrbitControls,
  SpotLight,
  Environment,
  ContactShadows,
  Sky,
} from "@react-three/drei";
import { Controllers, Hands, VRButton, XR } from "@react-three/xr";

function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <main className="flex w-full flex-1 flex-col relative items-center">
        <Canvas
          shadows={true}
          legacy={true}
          className="bg-black w-full h-full"
          camera={{
            position: [0, 0, 0],
          }}
        >
          <XR>
            <Controllers />
            <Hands />
            <Sky sunPosition={[0, 1, 0]} />
            <ambientLight intensity={0.5} />
            <SpotLight intensity={1} position={[-4, 3, 8]} />
            <mesh position={[0, 0.8, 0]}>
              <Model />
            </mesh>
            <Environment preset="city" />
            <ContactShadows
              position={[10, 8, 10]}
              opacity={1}
              scale={10}
              blur={1}
              far={1}
            />
            <OrbitControls />
            <Floor position={[0, -5, -10]} rotation={[0.13, -0.08, 0.08]} />
          </XR>
        </Canvas>
        <div className="absolute bottom-0 left-0 right-0">
          <VRButton />
        </div>
      </main>

      <div className="flex h-24 w-full items-center justify-center border-t flex-col">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
        <span className="text-gray-500 text-xs">Version 1.0.1</span>
      </div>
    </div>
  );
}

export default Home;
