import { Canvas } from "@react-three/fiber";
import "./app.css";
import { PointerLockControls, Stats } from "@react-three/drei";
import { Room } from "./widgets/scenes/main/Room";
import { Player } from "./entities/characters/Player";
import { Physics } from "@react-three/rapier";
import { EnvironmentSetup } from "./app/setup/environment";
import { Perf } from "r3f-perf";

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        shadows
        dpr={[0.5, 1]}
        frameloop="demand"
        camera={{
          near: 0.1,
          far: 20,
        }}
      >
        <EnvironmentSetup />
        <Physics debug updateLoop="independent">
          <Room />

          <Player />
        </Physics>
        <PointerLockControls />
        <Perf />
      </Canvas>
      <Stats />
    </div>
  );
}
export default App;
