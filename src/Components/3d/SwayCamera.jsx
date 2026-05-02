import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

function SwayCamera({ ref, position, rotation, active = true }) {
  useFrame(({ pointer }) => {
    if (!ref) return;

    const maxY = 0.18;
    const maxX = -0.35;

    const targetPosition = new Vector3(
      position[0] + pointer.x * maxX,
      position[1] + pointer.y * maxY,
      position[2],
    );

    if (active) ref.current.position.lerp(targetPosition, 0.04);
  });

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={position}
      rotation={rotation}
      fov={50}
    />
  );
}

export default SwayCamera;
