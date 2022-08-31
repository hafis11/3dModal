/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/modal.glb");
  const { actions } = useAnimations(animations, group);

  // 'Armature|mixamo.com|Layer0' is the name of the animation we need to run.
  // console.log(actions);

  useEffect(() => {
    /* highlight-line */
    actions["Armature|mixamo.com|Layer0"].play(); /* highlight-line */
  }, []); /* highlight-line */

  return (
    <mesh position={[0, -5, -7.8]} rotation={[0.13, -0.08, 0.08]} recieveShadow={true} scale={44}>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Camera"
            position={[-0.35, 0.15, 0.31]}
            rotation={[1.35, 0.03, 0.84]}
            scale={[0.32, 0.3, 0.18]}
          >
            <PerspectiveCamera
              name="Camera_Orientation"
              makeDefault={false}
              far={100}
              near={0.1}
              fov={23.07}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <primitive object={nodes.mixamorigHips} />
            <group name="Mdea_mesh">
              <skinnedMesh
                name="Mdea_mesh_1"
                geometry={nodes.Mdea_mesh_1.geometry}
                material={materials.Mdea_MAT}
                skeleton={nodes.Mdea_mesh_1.skeleton}
              />
              <skinnedMesh
                name="Mdea_mesh_2"
                geometry={nodes.Mdea_mesh_2.geometry}
                material={materials.Mdea_MAT_}
                skeleton={nodes.Mdea_mesh_2.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </mesh>
  );
}

useGLTF.preload("/modal.glb");
