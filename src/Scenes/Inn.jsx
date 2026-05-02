import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PointLightsInn from "../Components/3d/PointLightsInn";
import CamLog from "../Components/debug_3d/CamLog";
import ModelLoader from "../Components/3d/ModelLoader";
import SwayCamera from "../Components/3d/SwayCamera";
import { modelData } from "../data/modelData";
import { innScene } from "../data/sceneData";
import { innCameraData } from "../data/cameraData";
import { useRef, useState } from "react";
import gsap from "gsap";

function InnScene() {
    // Core position & asset data
    const { inn, shield, wooden_dragon, deer, map } = modelData;
    const {
        defaultPosition,
        shieldPosition,
        mapPosition,
        dragonPosition,
        deerPosition,
    } = innCameraData;

    // stores current camera position state
    const [currentPosition, setCurrentPosition] = useState(defaultPosition);

    // stores swayCamera active/inactive state
    const [active, setActive] = useState(true);
    const camRef = useRef();

    const moveCam = (activePosition) => {
        // sets sway false on first movement frame
        setActive(false);
        // animation to target position
        gsap.to(camRef.current.position, {
            x: activePosition.position[0],
            y: activePosition.position[1],
            z: activePosition.position[2],
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
                // sets current camera position state
                setCurrentPosition(activePosition);
                // sets sway true on last movement frame
                setActive(true);
            },
        });
        // animation to target rotation
        gsap.to(camRef.current.rotation, {
            x: activePosition.rotation[0],
            y: activePosition.rotation[1],
            z: activePosition.rotation[2],
            duration: 1.5,
            ease: "power2.inOut",
        });
    };

    return (
        <div className="canvas-container">
            <Canvas shadows>
                <color attach="background" args={[innScene.backgroundCol]} />
                {/* <CamLog /> */}
                <SwayCamera
                    ref={camRef}
                    position={currentPosition.position}
                    rotation={currentPosition.rotation}
                    active={active}
                />
                <PointLightsInn />
                {/* <PerspectiveCamera
          makeDefault
          position={[2.29, 1.28, -5.78]}
          rotation={[-2.91, 0.47, 3]}
          fov={50}
        />
        <OrbitControls /> */}
                <ModelLoader
                    handleClick={(e) => {
                        e.stopPropagation();
                        moveCam(shieldPosition);
                    }}
                    scene={`/${shield.folderName}/scene.gltf`}
                    scale={shield.scale}
                    position={shield.position}
                    rotation={shield.rotation}
                />
                <ModelLoader
                    handleClick={(e) => {
                        e.stopPropagation();
                        moveCam(dragonPosition);
                    }}
                    scene={`/${wooden_dragon.folderName}/scene.gltf`}
                    scale={wooden_dragon.scale}
                    position={wooden_dragon.position}
                    rotation={wooden_dragon.rotation}
                />
                <ModelLoader
                    handleClick={(e) => {
                        e.stopPropagation();
                        moveCam(deerPosition);
                    }}
                    scene={`/${deer.folderName}/scene.gltf`}
                    scale={deer.scale}
                    position={deer.position}
                    rotation={deer.rotation}
                />
                <ModelLoader
                    handleClick={(e) => {
                        e.stopPropagation();
                        moveCam(mapPosition);
                    }}
                    scene={`/${map.folderName}/scene.gltf`}
                    scale={map.scale}
                    position={map.position}
                    rotation={map.rotation}
                />
                <ModelLoader
                    scene={`/${inn.folderName}/scene.gltf`}
                    scale={inn.scale}
                />
            </Canvas>
        </div>
    );
}

export default InnScene;
