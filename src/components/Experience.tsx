import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Object3D } from "three";
import * as THREE from "three";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  const { scene } = useGLTF("/models/trinity-scene.glb");

  useEffect(() => {
    scene.traverse((child: Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <>
      <ambientLight intensity={1} />
      <primitive position={[0, -2.0, 0]} object={scene as THREE.Object3D} />
    </>
  );
};

export default Experience;
