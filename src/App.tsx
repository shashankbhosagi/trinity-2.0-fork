import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Environment, PresentationControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        shadows={true}
        camera={{ position: [18, 5, 12], fov: 30 }}
      >
        {/* <fog attach="fog" args={["#fffffff", 28, 30]} /> */}
        <Environment files="./map/map.hdr" background={false} blur={0} />
        <PresentationControls
          snap
          global
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[0, 0]}
          azimuth={[-Math.PI / 3, Math.PI / 3]}
        >
          <Experience />
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default App;
