import { MeshProps, useFrame, useThree } from "@react-three/fiber";
import { RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier";
import { useRef } from "react";
import { useGesture } from "react-use-gesture";
import * as THREE from "three";

export const Draggable = (props: MeshProps) => {
  const { camera } = useThree();
  const ref = useRef<THREE.Mesh>(null);
  const body = useRef<RapierRigidBody>(null);
  const isHold = useRef(false);

  useFrame(() => {
    if (isHold.current) {
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      const cubePosition = new THREE.Vector3();
      cubePosition.copy(camera.position).add(cameraDirection.multiplyScalar(2));

      const vector = new THREE.Vector3();
      vector.subVectors(cubePosition, ref.current!.position);

      body.current!.setTranslation(vec3(vector), true);
      body.current!.setGravityScale(0, false);
      body.current?.setBodyType(3, false);
    } else if (body.current?.gravityScale() === 0) {
      body.current!.setGravityScale(1, false);
      body.current?.setBodyType(0, false);
    }
  });

  const bind: any = useGesture({
    onPointerDown: (e) => {
      e.event.stopPropagation();
      const distance = (e.event as any).distance;
      if (distance < 3) {
        isHold.current = true;
      }
    },
    onPointerUp: () => {
      isHold.current = false;
    },
  });

  return (
    <RigidBody type="dynamic" colliders="hull" ref={body}>
      <mesh {...props} ref={ref} {...bind()}></mesh>
    </RigidBody>
  );
};
