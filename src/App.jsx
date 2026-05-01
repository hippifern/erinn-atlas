import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import PointLightsInn from "./Components/3d/PointLightsInn";
import CamLog from "./Components/debug_3d/CamLog";
import ModelLoader from "./Components/3d/ModelLoader";
import SwayCamera from "./Components/3d/SwayCamera";

function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows>
        <color attach="background" args={["#1a120d"]} />
        <CamLog />
        <SwayCamera />
        <PointLightsInn />
        {/* <OrbitControls /> */}
        <ModelLoader
          name="inn"
          scene="/medieval_tavern/scene.gltf"
          scale={0.75}
        />
        <ModelLoader
          name="shield"
          scene="/ethereal_aegis/scene.gltf"
          scale={0.4}
          position={[-5.2, 1.0, -1.4]}
          rotation={[0, 1.7, -0.4]}
        />
        <ModelLoader
          name="wooden_dragon"
          scene="/wooden_dragon/scene.gltf"
          scale={0.2}
          position={[1, 0.7, -3.2]}
          rotation={[0, -1, 0]}
        />
        <ModelLoader
          name="deer"
          scene="/deer/scene.gltf"
          scale={1.8}
          position={[2.1, 0.52, -3.5]}
          rotation={[0, 1.1, 0]}
        />
        <ModelLoader
          name="map"
          scene="/map/scene.gltf"
          scale={0.0075}
          position={[-1.7, 1.3, 1.85]}
          rotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

export default App;
