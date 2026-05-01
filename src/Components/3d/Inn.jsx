import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function Inn() {
  const gltf = useLoader(GLTFLoader, "/medieval_tavern/scene.gltf");

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <>
      <primitive object={gltf.scene} scale={0.75} />
    </>
  );
}

export default Inn;
