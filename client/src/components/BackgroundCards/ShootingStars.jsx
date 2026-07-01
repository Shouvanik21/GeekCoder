import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ShootingStar({ delay }) {
  const head = useRef();
  const trail = useRef();

  const data = useMemo(() => {
    return {
      delay,
      speed: 8 + Math.random() * 6,
      startX: -45 + Math.random() * 15,
      startY: 18 + Math.random() * 12,

      // Add this line
      angle: -0.55 + Math.random() * 0.2,
    };
  }, [delay]);

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() + data.delay) % 10;

    if (t < 1.3) {
      const p = t / 2;

      const x = data.startX + p * 55;
      const y = data.startY - p * 35;

      head.current.visible = true;
      trail.current.visible = true;

      head.current.position.set(x, y, -5);

      trail.current.position.set(x - 1.8, y + 1.15, -5);

      const opacity = 1 - p;

      head.current.material.opacity = opacity;

      trail.current.material.opacity = opacity * 0.5;
    } else {
      head.current.visible = false;
      trail.current.visible = false;
    }
  });

  return (
    <>
      {/* Trail */}

      <mesh ref={trail} rotation={[0, 0, data.angle]}>
        <planeGeometry args={[8, 0.05]} />

        <meshBasicMaterial
          color="#7dd3fc"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Head */}

      <mesh ref={head} rotation={[0, 0, data.angle]} scale={2}>
        <sphereGeometry args={[0.04, 16, 16]} />

        <meshBasicMaterial
          color="white"
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default function ShootingStars() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <ShootingStar key={i} delay={i * 0.6} />
      ))}
    </>
  );
}
