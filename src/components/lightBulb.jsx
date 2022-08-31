import React from "react";

function LightBulb(props) {
  return (
    <mesh {...props} scale={2}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  );
}

export default LightBulb;