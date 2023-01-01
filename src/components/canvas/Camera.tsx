import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Vector3 } from 'three'

export const Camera = () => {
  const vec = useRef(new Vector3(0, 0, 0))
  useFrame(({ camera, mouse }) => camera.position.lerp(vec.current.set(mouse.x * -10, mouse.y * -5, 10), 0.05))
  return (
    <>
      <fog attach='fog' args={['#17171b', 0, 8]} />
      <color attach='background' args={['#17171b']} />
      <directionalLight
        castShadow
        intensity={0.4}
        position={[10, 6, 6]}
        shadow-mapSize={[1024, 1024]}></directionalLight>
      <OrbitControls minDistance={0} maxDistance={1} />
      <PerspectiveCamera makeDefault />
    </>
  )
}
