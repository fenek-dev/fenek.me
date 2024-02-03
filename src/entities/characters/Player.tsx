import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { usePersonControls } from "../../shared/utils/control";

const MOVE_SPEED = 6;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export const Player = () => {
  const playerRef = useRef<any>();

  const { forward, backward, left, right } = usePersonControls();

  // const rapier = useRapier();

  useFrame((state) => {
    if (!playerRef.current) return;

    // moving player
    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(state.camera.rotation);

    playerRef.current.wakeUp();
    playerRef.current.setLinvel({
      x: direction.x,
      y: velocity.y,
      z: direction.z,
    });

    const { x, y, z } = playerRef.current.translation();
    state.camera.position.set(x, y + y * 0.5, z);
  });

  return (
    <>
      <RigidBody
        position={[0, 2, 0]}
        mass={1}
        ref={playerRef}
        lockRotations
        type="dynamic"
      >
        <mesh castShadow>
          <capsuleGeometry args={[0.2, 1.5, 1]} />
        </mesh>
      </RigidBody>
    </>
  );
};
