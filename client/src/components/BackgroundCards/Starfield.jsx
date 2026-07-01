import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 15000;
const FIELD_SIZE = 250;

export default function Starfield() {
  const materialRef = useRef();

  const { positions, scales, brightness } = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const scales = new Float32Array(STAR_COUNT);
    const brightness = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD_SIZE;

      // Slight size variation
      if (Math.random() < 0.97) {
  scales[i] = Math.random() * 0.5 + 0.4;
} else {
  scales[i] = Math.random() * 1.2 + 1.2;
}

      // Different brightness
      brightness[i] = Math.pow(Math.random(), 3.0);
    }

    return { positions, scales, brightness };
  }, []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={STAR_COUNT}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-aScale"
          array={scales}
          count={STAR_COUNT}
          itemSize={1}
        />

        <bufferAttribute
          attach="attributes-aBrightness"
          array={brightness}
          count={STAR_COUNT}
          itemSize={1}
        />
      </bufferGeometry>

      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          attribute float aScale;
          attribute float aBrightness;

          varying float vBrightness;

          uniform float uTime;

          void main() {

              vBrightness = aBrightness;

              vec3 pos = position;

              // Gentle drifting
              pos.y += sin(uTime * 0.08 + position.x) * 0.2;

              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

              gl_Position = projectionMatrix * mvPosition;

              gl_PointSize = aScale * 1.6 * (300.0 / -mvPosition.z);
          }
        `}
        fragmentShader={`
          varying float vBrightness;

          void main() {

              vec2 uv = gl_PointCoord - vec2(0.5);

              float dist = length(uv);

              // Perfect circle
              if(dist > 0.5) discard;

              // Soft glow
              float glow = exp(-25.0 * dist * dist);

              vec3 color = vec3(1.0);

              gl_FragColor = vec4(color, glow * vBrightness);
          }
        `}
      />
    </points>
  );
}
