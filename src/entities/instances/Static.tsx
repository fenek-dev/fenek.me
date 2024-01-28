import { Instance } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function Static(props: GroupProps) {
  return (
    <group {...props} receiveShadow castShadow>
      <Instance />
    </group>
  );
}
