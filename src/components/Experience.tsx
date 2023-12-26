import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  const { scene } = useGLTF("/models/trinity-scene.glb");
  const mousePos = useRef({ x: 0, y: 0 });
  const model = useRef<THREE.Object3D>();

  useEffect(() => {
    scene.traverse((child: Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const handleMouseMove = (event: MouseEvent) => {
      // Update mouse position relative to the window
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scene]);

  useFrame(() => {
    // Update rotation based on normalized mouse position
    if (model.current) {
      // model.current.rotation.z = -1 * mousePos.current.y * 0.02;
      model.current.rotation.y = mousePos.current.x * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <primitive
        ref={model}
        position={[0, -2.0, 0]}
        object={scene as THREE.Object3D}
      />
    </>
  );
};

export default Experience;
