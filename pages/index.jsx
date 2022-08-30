import Head from "next/head";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Floor from "../src/components/floor";
import LightBulb from "../src/components/lightBulb";
// import Box from "../src/components/box";
import OrbitControls from "../src/components/OrbitControls";
import Model from "../src/components/modal";

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
          className="bg-black w-full h-full"
          camera={{
            position: [-7, 0, 0],
          }}
        >
          <ambientLight color={"white"} intensity={0.3} />
          <LightBulb position={[-1, 2, -1.3]} />
          {/* <Box rotateX={3} rotateY={0.2} /> */}
          <Model />
          <OrbitControls />
          <Floor position={[0, -4, 0]} />
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
