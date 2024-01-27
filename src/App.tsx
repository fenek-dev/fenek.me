import { Canvas } from "@react-three/fiber";
import "./app.css";
import { MainPage } from "./pages/main/MainPage";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.7} />
        <MainPage />
        <CameraControls />
      </Canvas>
    </div>
  );
}
export default App;
