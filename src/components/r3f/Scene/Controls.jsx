import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"

const Controls = () => {

    return (
        <OrbitControls
            enableDamping={true}
            dampingFactor={0.04}
            enableRotate
            enableZoom
            zoomSpeed={0.02}
            maxPolarAngle={Math.PI / 2.2}
            screenSpacePanning={false}
        // minDistance={35}
        // maxDistance={10000}
        />
    )
}

export default Controls