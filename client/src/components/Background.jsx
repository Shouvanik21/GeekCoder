import { Canvas } from "@react-three/fiber";
import StarField from "./BackgroundCards/Starfield";
import ShootingStars from "./BackgroundCards/ShootingStars";
import Effects from "./BackgroundCards/Effects";
import { useThree, useFrame } from "@react-three/fiber";

function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.04;

    camera.position.y += (mouse.y * 1.2 - camera.position.y) * 0.04;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 25] }}>
        <fog attach="fog" args={["#020617", 20, 70]} />
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={2} />
        <StarField />
        <ShootingStars />
        <Effects />
        <CameraRig />
      </Canvas>
    </div>
  );
}
