import { Canvas } from "@react-three/fiber";
import { Preload, Stats } from "@react-three/drei";

import City from "./Objects/City"
import Camera from "./Scene/Camera";
import Controls from "./Scene/Controls";
import AnimationIntroductionCamera from "./Animations/IntroductionCamera";
import PostProcessing from "./Scene/PostProcessing";

function CanvasWrapper() {
    return (
        <Canvas
            mode="concurrent"
            style={{
                position: "absolute",
                top: 0
            }}
            gl={{
                // antialias: false,
            }}
        >
            <color
                attach="background"
                args={['#000000']}
            />
            <fog
                attach="fog"
                color="#000000"
                near={10}
                far={37000}
            />
            <ambientLight
                color={0xa0a0fc}
                intensity={100}
            />
            <directionalLight
                color={0x3a6dc0}
                intensity={30}
                position={[0, 10, 10]}
            />
            <>
                <AnimationIntroductionCamera from={200} to={0}>
                    <City />
                </AnimationIntroductionCamera>
            </>
            <PostProcessing />
            <Camera />
            <Controls />
            <Stats />
            <Preload all />
        </Canvas >
    );
}

export default CanvasWrapper;
