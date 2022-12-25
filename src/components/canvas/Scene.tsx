import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerformanceMonitor, Preload, Stats } from '@react-three/drei'
import { useState } from 'react'

export default function Scene({ children, ...props }) {
  const [dpr, setDpr] = useState(1.5)
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} dpr={dpr} frameloop='demand'>
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
      <Stats />
    </Canvas>
  )
}
