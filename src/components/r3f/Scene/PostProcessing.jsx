import React from 'react'
import { EffectComposer, SSR } from '@react-three/postprocessing'
import { useControls } from 'leva'

const PostProcessing = () => {

  const { enabled, ...props } = useControls({
    enabled: true,
    ALLOW_MISSED_RAYS: false,
    USE_MRT: true,
    USE_NORMALMAP: false,
    USE_ROUGHNESSMAP: true,
    ENABLE_JITTERING: true,
    ENABLE_BLUR: true,
    DITHERING: false,
    CLAMP_RADIUS: { value: 1, min: 0, max: 1},
    resolutionScale: { value: 0.7, min: 0, max: 1 },
    velocityResolutionScale: { value: 0.1, min: 0, max: 1 },
    temporalResolve: true,
    temporalResolveMix: { value: 1, min: 0, max: 1 },
    temporalResolveCorrection: { value: 0.1, min: 0, max: 1 },
    blurMix: { value: 0, min: 0, max: 1 },
    blurSharpness: { value: 0, min: 0, max: 1 },
    blurKernelSize: { value: 0, min: 0, max: 8 },
    rayDistance: { value: 2, min: 0, max: 2 },
    colorExponent: { value: 1, min: 0, max: 1},
    intensity: { value: 2, min: 0, max: 5 },
    maxSamples: { value: 0, min: 0, max: 1 },
    maxRoughness: { value: 1, min: 0, max: 1 },
    jitter: { value: 0, min: 0, max: 5 },
    jitterSpread: { value: 0.45, min: 0, max: 1 },
    jitterRough: { value: 0.04, min: 0, max: 1 },
    roughnessFadeOut: { value: 0.13, min: 0, max: 1 },
    rayFadeOut: { value: 3.6, min: 0, max: 5 },
    thickness: { value: 1.7, min: 0, max: 10 },
    ior: { value: 1.8, min: 0, max: 2 },
    MAX_STEPS: { value: 10, min: 0, max: 20 },
    NUM_BINARY_SEARCH_STEPS: { value: 6, min: 0, max: 10 },
    maxDepthDifference: { value: 55, min: 0, max: 60 },
    maxDepth: { value: 1, min: 0, max: 1 },
  })
  return (
    <EffectComposer disableNormalPass>{enabled && <SSR {...props} />}</EffectComposer>
  )
}

export default PostProcessing