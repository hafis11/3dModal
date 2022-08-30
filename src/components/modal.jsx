import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Modal = () => {
  const gltf = useLoader(GLTFLoader, "./modal.glb");
  return (
    <mesh position={[2, -3, 1]} recieveShadow={true}>
      <primitive object={gltf.scene} scale={3} />
    </mesh>
  );
};

export default Modal;
