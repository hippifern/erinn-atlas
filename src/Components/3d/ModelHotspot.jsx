function ModelHotspot({ handleClick, position, rotation }) {
  return (
    <mesh position={position} rotation={rotation} onClick={handleClick}>
      <planeGeometry args={[2, 1.2]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

export default ModelHotspot;
