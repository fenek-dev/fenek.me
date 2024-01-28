import { Canvas } from "@react-three/fiber";
import "./app.css";
import { PointerLockControls, Stats } from "@react-three/drei";
import { Room } from "./widgets/scenes/main/Room";
import { Player } from "./entities/characters/Player";
import { Physics } from "@react-three/rapier";
import { EnvironmentSetup } from "./app/setup/environment";

function App() {
  return (
    <div id="canvas-container">
      <Canvas shadows dpr={[1, 2]}>
        <EnvironmentSetup />
        <Physics debug>
          <Room />

          <Player />
        </Physics>
        <PointerLockControls />
      </Canvas>
      <Stats />
    </div>
  );
}
export default App;
