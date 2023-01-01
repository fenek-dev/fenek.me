import { Canvas } from '@react-three/fiber'
import { Environment, Preload, Stats } from '@react-three/drei'
import { Camera } from './Camera'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} dpr={[1, 2]} shadows orthographic>
      {children}
      <Preload all />
      <Camera />
      <Environment preset='city' />
      <Stats />
    </Canvas>
  )
}
