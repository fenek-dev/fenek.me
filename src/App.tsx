import { Canvas } from "@react-three/fiber";
import "./app.css";
import { PointerLockControls, Stats } from "@react-three/drei";
import { Player } from "./entities/characters/Player";
import { Physics } from "@react-three/rapier";
import { EnvironmentSetup } from "./app/setup/environment";
import { Perf } from "r3f-perf";
import {
  EffectComposer,
  Selection,
  Outline,
} from "@react-three/postprocessing";
import { Main } from "./pages/Main/Main";
import { UIProvider } from "./app/context/ui";
import { Aim } from "./widgets/ui/aim";

function App() {
  return (
    <div id="canvas-container">
      <UIProvider>
        <Aim />
        <Canvas shadows="basic" dpr={[0.5, 1]} frameloop="demand">
          <EnvironmentSetup />
          <Physics updateLoop="independent">
            <Selection>
              <EffectComposer autoClear={false}>
                <Outline edgeStrength={40} />
              </EffectComposer>
              <Main />
            </Selection>

            <Player />
          </Physics>
          <PointerLockControls />
          <Perf />
        </Canvas>
        <Stats />
      </UIProvider>
    </div>
  );
}
export default App;
