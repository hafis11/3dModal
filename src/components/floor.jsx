import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[5, 1, 5]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;
