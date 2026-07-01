import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.2}
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        mipmapBlur
      />

      <Noise opacity={0.02} />

      <Vignette
        eskil={false}
        offset={0.15}
        darkness={0.9}
      />
    </EffectComposer>
  );
}