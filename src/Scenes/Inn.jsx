import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PointLightsInn from "../Components/3d/PointLightsInn";
import CamLog from "../Components/debug_3d/CamLog";
import ModelLoader from "../Components/3d/ModelLoader";
import SwayCamera from "../Components/3d/SwayCamera";
import { modelData, textData } from "../data/modelData";
import { innScene } from "../data/sceneData";
import { innPopupData } from "../data/innPopupData";
import { innCameraData } from "../data/cameraData";
import { useRef, useState } from "react";
import gsap from "gsap";
import Popup from "../Components/UI/Popup";
import CloseButton from "../Components/UI/CloseButton";

function InnScene() {
    // Core position & asset data
    const { inn, shield, wooden_dragon, deer, map } = modelData;
    const { shieldText, wooden_dragonText, deerText, mapText } = textData;

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
    const [UIactive, setUIActive] = useState(false);

    const camRef = useRef();
    const popupRef = useRef();

    const [activePopup, setActivePopup] = useState({});

    const handleModelClick = (e, pos, data) => {
        e.stopPropagation();
        moveCam(pos);
        setActivePopup(data);
        animatePopupIn();
    };

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

    const animatePopupIn = () => {
        setUIActive(true);
        gsap.to(popupRef.current, {
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
        });
    };

    const animatePopupOut = () => {
        gsap.to(popupRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                setUIActive(false);
            },
        });
    };

    return (
        <div className="canvas-container">
            <div className={UIactive ? "ui" : "ui ui-off"}>
                <Popup data={activePopup} ref={popupRef}>
                    <CloseButton
                        onclick={() => {
                            animatePopupOut();
                            moveCam(defaultPosition);
                        }}
                    />
                </Popup>
            </div>
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
                        handleModelClick(e, shieldPosition, innPopupData[0]);
                    }}
                    scene={`/${shield.folderName}/scene.gltf`}
                    scale={shield.scale}
                    position={shield.position}
                    rotation={shield.rotation}
                    textData={shieldText}
                />
                <ModelLoader
                    handleClick={(e) => {
                        handleModelClick(e, dragonPosition, innPopupData[1]);
                    }}
                    scene={`/${wooden_dragon.folderName}/scene.gltf`}
                    scale={wooden_dragon.scale}
                    position={wooden_dragon.position}
                    rotation={wooden_dragon.rotation}
                    textData={wooden_dragonText}
                />
                <ModelLoader
                    handleClick={(e) => {
                        handleModelClick(e, deerPosition, innPopupData[2]);
                    }}
                    scene={`/${deer.folderName}/scene.gltf`}
                    scale={deer.scale}
                    position={deer.position}
                    rotation={deer.rotation}
                    textData={deerText}
                />
                <ModelLoader
                    handleClick={(e) => {
                        handleModelClick(e, mapPosition, innPopupData[3]);
                    }}
                    scene={`/${map.folderName}/scene.gltf`}
                    scale={map.scale}
                    position={map.position}
                    rotation={map.rotation}
                    textData={mapText}
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
