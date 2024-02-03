import { Canvas } from "@react-three/fiber";
import "./app.css";
import { PointerLockControls, Stats } from "@react-three/drei";
import { Room } from "./widgets/scenes/main/Room";
import { Player } from "./entities/characters/Player";
import { Physics } from "@react-three/rapier";
import { EnvironmentSetup } from "./app/setup/environment";
import { Perf } from "r3f-perf";
import {
  BrightnessContrast,
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";

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
        <Physics updateLoop="independent">
          <Room />

          <Player />
        </Physics>
        <PointerLockControls />
        <Perf />
        <EffectComposer multisampling={0}>
          <Noise opacity={0.005} />
          <BrightnessContrast
            brightness={0.1} // brightness. min: -1, max: 1
            contrast={0.3} // contrast: min -1, max: 1
          />
        </EffectComposer>
      </Canvas>
      <Stats />
    </div>
  );
}
export default App;
