import { PerspectiveCamera } from '@react-three/drei'


const DevCamera = () => {

  return (
    <PerspectiveCamera
      makeDefault
      fov={65}
      far={6000}
      near={0.001}
      position={[1692, 355, -372]}
    />

  )
}



export default DevCamera