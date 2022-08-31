import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Floor = () => {
  const gltf = useLoader(GLTFLoader, "./scene.glb");
  return (
    <mesh position={[0, -3.83, 3]} recieveShadow={true}>
      <primitive object={gltf.scene} scale={3}/>
    </mesh>
  );
};

export default Floor;
