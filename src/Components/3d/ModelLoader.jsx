import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import ModelHotspot from "./ModelHotspot";

function ModelLoader({
  scene = "",
  scale = 1,
  position,
  rotation,
  handleClick,
}) {
  const gltf = useLoader(GLTFLoader, scene);
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  if (position || rotation) {
    return (
      <group onClick={handleClick}>
        <primitive
          object={gltf.scene}
          scale={scale}
          position={position ? position : null}
          rotation={rotation}
        />
        <ModelHotspot
          handleClick={handleClick}
          position={position}
          rotation={rotation}
        />
      </group>
    );
  }
  return (
    <>
      <primitive object={gltf.scene} scale={scale} />
    </>
  );
}

export default ModelLoader;
