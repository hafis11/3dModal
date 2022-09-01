import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const M1 = forwardRef(({ children, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  return (
    <group {...props} dispose={null}>
      <group
        ref={ref}
        position={[0, .17, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials.aluminium}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials["matte.001"]}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={materials["screen.001"]}
        />
      </group>
      <mesh
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.79, .1, 2.45]}
      />
      <group position={[0, 0, 0]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
        />
      </group>
      <mesh
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, 0.1, 0.2]}
      />
    </group>
  );
});

export default M1;
