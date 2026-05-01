import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function ModelLoader({ name = "", scene = "", scale = 1, position, rotation }) {
  const gltf = useLoader(GLTFLoader, scene);
  console.log(name);
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  if (position || rotation) {
    return (
      <>
        <primitive
          object={gltf.scene}
          scale={scale}
          position={position ? position : null}
          rotation={rotation}
        />
      </>
    );
  }
  return (
    <>
      <primitive object={gltf.scene} scale={scale} />
    </>
  );
}

export default ModelLoader;
