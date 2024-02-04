import { MainGLTFProps } from "../../../pages/Main";
import { CuboidCollider, MeshCollider, RigidBody } from "@react-three/rapier";
import { Instance, Instances } from "@react-three/drei";

export const Room = ({ nodes, materials }: MainGLTFProps) => {
  return (
    <>
      <CuboidCollider position={[10, -1, 10]} args={[100, 1, 100]} />
      <CuboidCollider position={[10, 4, 10]} args={[100, 0.1, 100]} />
      <RigidBody type="fixed" colliders="hull">
        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_window_closed_scaffold.geometry}
            material={materials["texture.055"]}
            position={[-10, 0, 7]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>
        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_endcap.geometry}
            material={materials["texture.058"]}
            position={[-3, 0, 2]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_cracked.geometry}
            material={materials["texture.060"]}
            position={[-7, 0, 10]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_cracked.geometry}
            material={materials["texture.060"]}
            position={[4, 0, 7]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_cracked.geometry}
            material={materials["texture.060"]}
            position={[-10, 0, 3]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_Tsplit.geometry}
            material={materials["texture.061"]}
            position={[-3, 0, 0]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_Tsplit.geometry}
            material={materials["texture.061"]}
            position={[4, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_window_closed_scaffold.geometry}
            material={materials["texture.055"]}
            position={[0, 0, -7]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_doorway.geometry}
            material={materials["texture.063"]}
            position={[4, 0, -7]}
          >
            <mesh
              geometry={nodes.wall_doorway_door.geometry}
              material={materials["texture.063"]}
              position={[-0.82, 0, 0]}
            />
          </mesh>
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_cracked.geometry}
            material={materials["texture.060"]}
            position={[8, 0, -7]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_archedwindow_gated.geometry}
            material={materials["texture.066"]}
            position={[4, 0, 3]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_doorway.geometry}
            material={materials["texture.063"]}
            position={[8, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            geometry={nodes.wall_window_closed_scaffold.geometry}
            material={materials["texture.063"]}
            position={[11, 0, 2]}
            rotation={[0, 1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            geometry={nodes.wall_corner_scaffold.geometry}
            material={materials["texture.071"]}
            position={[11, 0, 10]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_endcap.geometry}
            material={materials["texture.058"]}
            position={[-2, 0, -1]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_open_scaffold.geometry}
            material={materials["texture.072"]}
            position={[0, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[-3, 0, 10]}
          />
        </MeshCollider>
        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[-10, 0, 10]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall.geometry}
            material={materials["texture.053"]}
            position={[1, 0, 10]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[-3, 0, -4]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[-7, 0, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_arched.geometry}
            material={materials["texture.056"]}
            position={[11, 0, -4]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall.geometry}
            material={materials["texture.053"]}
            position={[7, 0, 10]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[4, 0, 10]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[-10, 0, 0]}
            rotation={[0, 1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[-3, 0, -7]}
            rotation={[0, 1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[11, 0, -7]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[11, 0, -1]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[4, 0, 10]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.wall_corner_small.geometry}
            material={materials["texture.054"]}
            position={[11, 0, -1]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </MeshCollider>

        <MeshCollider type="hull">
          <mesh
            receiveShadow
            geometry={nodes.wall_doorway.geometry}
            material={materials["texture.063"]}
            position={[11, 0, 6]}
            rotation={[0, -1.571, 0]}
          >
            <mesh
              receiveShadow
              geometry={nodes.wall_doorway_door.geometry}
              material={materials["texture.063"]}
              position={[-0.82, 0, 0]}
            />
          </mesh>
        </MeshCollider>

        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.shelves.geometry}
            material={materials["texture.079"]}
            position={[0, 0, 10]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </MeshCollider>
        <MeshCollider type="trimesh">
          <mesh
            receiveShadow
            geometry={nodes.shelves.geometry}
            material={materials["texture.079"]}
            position={[4.015, 0, 0.758]}
            rotation={[0, -1.571, 0]}
          />
        </MeshCollider>
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.shelves.geometry}
          material={materials["texture.079"]}
          position={[7, 0, 10]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          receiveShadow
          geometry={nodes.torch.geometry}
          material={materials["texture.090"]}
          position={[2.424, 1.87, -0.643]}
          rotation={[0.46, 0, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed">
        <mesh
          receiveShadow
          geometry={nodes.bed_floor.geometry}
          material={materials["texture.082"]}
          position={[6.213, 0.236, 8.46]}
          rotation={[0, 1.571, 0]}
        />
      </RigidBody>

      <Instances
        receiveShadow
        geometry={nodes.floor_wood_large_dark.geometry}
        material={materials["texture.092"]}
      >
        <Instance position={[9, 0, 8]} />
        <Instance position={[9, 0, 4]} />
        <Instance position={[9, 0, 0]} />
        <Instance position={[9, 0, -4]} />
        <Instance position={[5, 0, 8]} />
        <Instance position={[5, 0, 4]} />
        <Instance position={[5, 0, 0]} />
        <Instance position={[5, 0, -4]} />
        <Instance position={[1, 0, -3]} />
        <Instance position={[1, 0, 1]} />
        <Instance position={[1, 0, 5]} />
        <Instance position={[1, 0, 9]} />
        <Instance position={[-3, 0, 8]} />
        <Instance position={[-3, 0, 4]} />
        <Instance position={[-3, 0, 0]} />
        <Instance position={[-3, 0, -4]} />
        <Instance position={[-7, 0, 1]} />
        <Instance position={[-7, 0, 5]} />
        <Instance position={[-7, 0, 9]} />
        <Instance position={[1, 0, -7]} />
        <Instance position={[-3, 0, -8]} />
        <Instance position={[-11, 0, 1]} />
        <Instance position={[-11, 0, 5]} />
        <Instance position={[-11, 0, 9]} />
        <Instance position={[5, 0, -8]} />
        <Instance position={[9, 0, -8]} />
      </Instances>

      <Instances
        castShadow
        geometry={nodes.floor_tile_big_grate_open.geometry}
        material={materials["texture.093"]}
      >
        <Instance position={[-1, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, 4]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, -4]} rotation={[0, 0, -Math.PI]} />
      </Instances>

      <Instances
        geometry={nodes.floor_tile_large.geometry}
        material={materials["texture.094"]}
      >
        <Instance position={[-5, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-5, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-5, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-9, 4, 6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-9, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-9, 4, 10]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, 2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, 0]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, 0]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, 4]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, 8]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, 8]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, -2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[-1, 4, -6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, -2]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[3, 4, -6]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[7, 4, -8]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, -4]} rotation={[0, 0, -Math.PI]} />
        <Instance position={[11, 4, -8]} rotation={[0, 0, -Math.PI]} />
      </Instances>
    </>
  );
};
