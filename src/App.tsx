import { Canvas } from "@react-three/fiber";
import "./app.css";
// import { MainPage } from "./pages/main/MainPage";
import { CameraControls, Stats } from "@react-three/drei";
import { Room } from "./widgets/scenes/main/Room";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.7} />
        <Room />
        <CameraControls />
      </Canvas>
      <Stats />
    </div>
  );
}
export default App;
