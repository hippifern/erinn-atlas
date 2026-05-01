import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

function SwayCamera() {
  const camRef = useRef();
  const basePos = new Vector3(2.29, 1.28, -5.78);

  useFrame(({ pointer }) => {
    if (!camRef) return;

    const maxY = 0.18;
    const maxX = -0.35;

    const targetPosition = new Vector3(
      basePos.x + pointer.x * maxX,
      basePos.y + pointer.y * maxY,
      basePos.z,
    );

    camRef.current.position.lerp(targetPosition, 0.04);
  });

  return (
    <PerspectiveCamera
      ref={camRef}
      makeDefault
      position={[2.29, 1.28, -5.78]}
      rotation={[-2.91, 0.47, 3]}
      fov={50}
    />
  );
}

export default SwayCamera;
