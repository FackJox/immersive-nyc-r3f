import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'



const Camera = () => {

  return (
    <PerspectiveCamera
      makeDefault
      manual
      fov={65}
      far={6000}
      near={5}
      position={[1692, 355, -372]}
    />

  )
}

export default Camera