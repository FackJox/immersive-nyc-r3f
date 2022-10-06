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
            zoomSpeed={1}
            maxPolarAngle={Math.PI}
            screenSpacePanning={false}
            target={[1465, 385, -610]}

        // minDistance={35}
        // maxDistance={10000}
        />
    )
}

export default Controls