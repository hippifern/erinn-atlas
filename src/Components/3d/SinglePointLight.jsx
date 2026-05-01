import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PointLightHelper } from "three";

function SinglePointLight({
  position = [1.69, 1.68, -3.78],
  defaultIntensity = 6,
  color = "#ffb347",
  decay = 2,
  distance = 20,
}) {
  const lightRefOne = useRef();
  const speed1 = useRef(Math.random() * 10 + 10);
  const speed2 = useRef(Math.random() * 5 + 3);

  const offset1 = useRef(Math.random() * Math.PI * 2);
  const offset2 = useRef(Math.random() * Math.PI * 2);

  const baseIntensity = useRef(Math.random() * 2 + defaultIntensity);

  // useHelper(lightRefOne, PointLightHelper, 0.5, "red");

  useFrame((state) => {
    if (!lightRefOne.current) return;

    function randomiseSpeed() {
      const t = state.clock.elapsedTime;

      return (
        baseIntensity.current +
        Math.sin(t * speed1.current + offset1.current) * 0.25 +
        Math.sin(t * speed2.current + offset2.current) * 0.15
      );
    }

    lightRefOne.current.intensity = randomiseSpeed();
  });
  return (
    <pointLight
      castShadow={true}
      ref={lightRefOne}
      position={position}
      intensity={defaultIntensity}
      color={color}
      decay={decay}
      distance={distance}
    />
  );
}

export default SinglePointLight;
