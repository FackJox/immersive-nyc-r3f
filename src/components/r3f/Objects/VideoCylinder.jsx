import React, { Suspense } from "react";
import { useVideoTexture } from '@react-three/drei'

const NUMBER_OF_SEGMENTS = 5;

function CylinderSplit({ VideoSrc, ...props }) {
  const texture = useVideoTexture(VideoSrc);
  const thetaLength = (2 * Math.PI) / NUMBER_OF_SEGMENTS;
  const height = (1024 / 720) / thetaLength;
  

  return (
    <mesh position={[0, 0, 0]}>
      <cylinderBufferGeometry
        attach="geometry"
        args={[2, 2, height, 16, 1, 1, 1, thetaLength]}
      />
        <meshStandardMaterial map={texture} toneMapped={false} />
        {/* <meshBasicMaterial color={"hotpink"} /> */}
    </mesh>
  );
}

export default function VideoCylinder() {
  return (
    <>
      <group position={[0, -1, 0]}>
        <CylinderSplit
          position={[0, 0, 0]}
          rotation={[0, (2 * Math.PI * 1) / NUMBER_OF_SEGMENTS, 0]}
          VideoSrc={"/matrixShort.mp4"}
        />
        <CylinderSplit
          position={[0, 0, 0]}
          rotation={[0, (2 * Math.PI * 2) / NUMBER_OF_SEGMENTS, 0]}
          VideoSrc={"/drei.mp4"}
        />
        <CylinderSplit
          position={[0, 0, 0]}
          rotation={[0, (2 * Math.PI * 3 ) / NUMBER_OF_SEGMENTS, 0]}
          VideoSrc={"/galaxyShort.mp4"}
        />
        <CylinderSplit
          position={[0, 0, 0]}
          rotation={[0, (2 * Math.PI * 4 ) / NUMBER_OF_SEGMENTS, 0]}
          VideoSrc={"/matrixShort.mp4"}
        />
        <CylinderSplit
          position={[0, 0, 0]}
          rotation={[0, (2 * Math.PI * 5 ) / NUMBER_OF_SEGMENTS, 0]}
          VideoSrc={"/galaxyShort.mp4"}
        />
      </group>
    </>
  );
}
