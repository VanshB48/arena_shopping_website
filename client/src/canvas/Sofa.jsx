import React from 'react'
import {easing} from 'maath';
import {useSnapshot} from 'valtio';
import{useFrame} from '@react-three/fiber';
import {Decal,useGLTF,useTexture} from '@react-three/drei';
import state from '../store';

const Sofa = () => {
  const snap=useSnapshot(state);
  const {nodes,materials}=useGLTF('/couch.glb');{/*loading the sofa model*/}

  const fullTexture=useTexture(snap.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Couch.geometry}
        material={materials.Fabric}
        material-roughess={1}
        dispose={null}
      >

      </mesh>
    </group>
  )
}

export default Sofa