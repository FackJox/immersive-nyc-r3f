import React, { Suspense } from "react";
import { useVideoTexture } from '@react-three/drei'

const NUMBER_OF_SEGMENTS = 5;

export function CylinderSplit({ VideoSrc, rotation, ...props }) {
  const texture = useVideoTexture(VideoSrc);
  const thetaLength = (2 * Math.PI) / NUMBER_OF_SEGMENTS;
  const height = (1024 / 720) / thetaLength * 1.07;
  // console.log(rotation)

  return (
    <mesh position={[0, 0, 0]} rotation={rotation} >
      <cylinderBufferGeometry
        attach="geometry"
        args={[2, 2, height, 16, 1, 1, 1, thetaLength]}
      />
        <meshBasicMaterial map={texture} toneMapped={true} />
        {/* <meshBasicMaterial color={"hotpink"} /> */}
        
    </mesh>
  );
}

export default function VideoCylinder() {
  return (
    <>
      <group position={[1464.9, 381, -613.6]} scale={28.1}>
        <CylinderSplit
          rotation={[0, (2 * Math.PI / NUMBER_OF_SEGMENTS) * 1, 0]}
          VideoSrc={"/matrixShort.mp4"}
        />
        <CylinderSplit
          rotation={[0, (2 * Math.PI / NUMBER_OF_SEGMENTS)* 2 , 0]}
          VideoSrc={"/drei.mp4"}
        />
        <CylinderSplit
          rotation={[0, (2 * Math.PI  / NUMBER_OF_SEGMENTS) * 3 , 0]}
          VideoSrc={"/galaxyShort.mp4"}
        />
        <CylinderSplit
          rotation={[0, (2 * Math.PI  / NUMBER_OF_SEGMENTS) * 4 , 0]}
          VideoSrc={"/matrixShort.mp4"}
        />
        <CylinderSplit
          position={[0, 0, 0]}
          rotation={[0, (2 * Math.PI  / NUMBER_OF_SEGMENTS) * 5 , 0]}
          VideoSrc={"/galaxyShort.mp4"}
        />
      </group>
    </>
  );
}
