import { PerspectiveCamera } from '@react-three/drei'



const DevCamera = () => {

  return (
    <PerspectiveCamera
      makeDefault
      manual
      fov={65}
      far={6000}
      near={0.001}
      position={[0, 3, 10]}
    />

  )
}

export default DevCamera