import { MeshProps, useThree } from "@react-three/fiber";
import { RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier";
import React, { useRef } from "react";
import { useGesture } from "react-use-gesture";
import * as THREE from "three";

export const Draggable = (props: MeshProps) => {
  const { camera } = useThree();
  const ref = useRef<THREE.Mesh>(null);
  const body = useRef<RapierRigidBody>(null);

  const bind: any = useGesture({
    onDrag: (e) => {
      e.event.stopPropagation();
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      const distance = 3;
      const cubePosition = new THREE.Vector3();
      cubePosition
        .copy(camera.position)
        .add(cameraDirection.multiplyScalar(distance));

      const vector = new THREE.Vector3();
      vector.subVectors(cubePosition, ref.current!.position);

      body.current!.setGravityScale(0, true);
      body.current!.setBodyType(2, true);
      body.current!.setTranslation(vec3(vector), true);
    },
    onDragEnd: (e) => {
      e.event.stopPropagation();
      body.current!.setGravityScale(1, false);
      body.current!.setBodyType(0, true);
    },
  });

  return (
    <RigidBody type="dynamic" colliders="hull" ref={body}>
      <mesh {...props} ref={ref} {...bind()}></mesh>
    </RigidBody>
  );
};
