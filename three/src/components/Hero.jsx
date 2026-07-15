import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  Environment,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";

function Model() {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/cola_can.glb");
  const { actions, mixer } = useAnimations(animations, group);

  // Play animation if available
  useEffect(() => {
    if (animations.length > 0) {
      const action = actions[animations[0].name];
      if (action) {
        action.reset().play();
      }
    }
    return () => {
      mixer?.stopAllAction();
    };
  }, [animations, actions, mixer]);

  // Continuous rotation
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2; // rotation speed
    }
  });
  return (
    <primitive
      ref={group}
      object={scene}
      scale={4}
      position={[-4, -7, -8]}
    />
  );
}

function Hero() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Canvas
        camera={{ position: [1, 1, 1], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.2}
            penumbra={1}
            intensity={2}
          />
          <pointLight position={[-10, -10, -10]} intensity={5} />

          <Model />

          <OrbitControls
            enableRotate={true}
            enableZoom={true}
            enablePan={true}
            autoRotate={false} // model rotates manually via useFrame
            minDistance={5}
            maxDistance={10}
            target={[0, 0, 0]}
          />

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={5}
            blur={2.5}
          />

          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Hero;