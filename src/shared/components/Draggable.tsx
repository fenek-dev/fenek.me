import { MeshProps, useFrame, useThree } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier";
import { useRef, useState } from "react";
import { useGesture } from "react-use-gesture";
import * as THREE from "three";

export const Draggable = (props: MeshProps) => {
  const { camera } = useThree();
  const ref = useRef<THREE.Mesh>(null);
  const body = useRef<RapierRigidBody>(null);
  const isHold = useRef(false);

  const [hovered, hover] = useState(false);

  useFrame(() => {
    if (isHold.current) {
      body.current?.setRotation(new THREE.Vector4(), true);
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      const cubePosition = new THREE.Vector3();
      cubePosition.copy(camera.position).add(cameraDirection.multiplyScalar(2));

      const vector = new THREE.Vector3();
      vector.subVectors(cubePosition, ref.current!.position);
      body.current!.setGravityScale(0, true);
      body.current?.setBodyType(3, false);
      body.current?.setAngvel(new THREE.Vector3(0, 0, 0), true);
      body.current?.setEnabledRotations(false, false, false, true);
      body.current?.setLinvel(new THREE.Vector3(0, 0, 0), true);

      body.current!.resetForces(true);

      body.current!.setTranslation(vec3(vector), true);
    } else if (body.current?.gravityScale() === 0) {
      body.current?.setEnabledRotations(true, true, true, true);
      body.current!.setGravityScale(1, false);
      body.current?.setBodyType(0, false);
    }
  });

  const bind: any = useGesture({
    onClick: (e) => {
      e.event.stopPropagation();
      const distance = (e.event as any).distance;
      if (distance < 3) {
        isHold.current = !isHold.current;
      }
    },
    onPointerMove: (e) => {
      e.event.stopPropagation();
      const distance = (e.event as any).distance;

      if (distance < 3 && !hovered) {
        hover(true);
      }
    },
    onPointerOut: (e) => {
      e.event.stopPropagation();
      hover(false);
    },
  });

  return (
    <RigidBody type="dynamic" colliders="hull" ref={body}>
      <Select enabled={hovered}>
        <mesh {...props} ref={ref} {...bind()}></mesh>
      </Select>
    </RigidBody>
  );
};
