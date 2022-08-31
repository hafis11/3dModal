import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[10, 0.4, 10]} />
      <meshPhysicalMaterial color="#000" />
    </mesh>
  );
}

export default Floor;
