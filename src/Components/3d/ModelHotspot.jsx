import { Text } from "@react-three/drei";

function ModelHotspot({ handleClick, position, rotation, textData }) {
    return (
        <>
            <mesh position={position} rotation={rotation} onClick={handleClick}>
                <planeGeometry args={[2, 1.2]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
            <Text
                font="/nightshade.ttf"
                position={textData.position}
                rotation={textData.rotation}
                fontSize={textData.fontSize}
                color="#e5dd95"
                anchorX="center"
                anchorY="middle"
            >
                {textData.text}
            </Text>
        </>
    );
}

export default ModelHotspot;
