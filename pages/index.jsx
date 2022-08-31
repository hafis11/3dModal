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
} from "@react-three/drei";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col">
        <Canvas
          shadows={true}
          legacy={true}
          className="bg-black w-full h-full"
          camera={{
            position: [0, 0, 9],
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <SpotLight intensity={1} position={[-4, 3, 8]} />
            <Model />
            <Environment preset="city" />
            <ContactShadows
              position={[10, 8, 10]}
              opacity={1}
              scale={10}
              blur={1}
              far={1}
            />
            <OrbitControls />
            <Floor />
          </Suspense>
        </Canvas>
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
