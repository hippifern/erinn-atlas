import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function CamLog() {
  const { camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "p") {
        console.log("POSITION:", camera.position);
        console.log("ROTATION:", camera.rotation);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [camera]);
  return null;
}

export default CamLog;
