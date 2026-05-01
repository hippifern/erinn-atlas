import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PointLightHelper } from "three";
import SinglePointLight from "./SinglePointLight";

function PointLightsInn() {
  return (
    <>
      <SinglePointLight position={[1.69, 1.68, -3.78]} />
      <SinglePointLight position={[-1.5, 1.68, -1.78]} />
      <SinglePointLight position={[-5, 1.68, -0.78]} />
      <SinglePointLight position={[-1, 1.68, 0]} defaultIntensity={5} />
      <SinglePointLight position={[1.69, 1.68, -0.78]} />
    </>
  );
}

export default PointLightsInn;
