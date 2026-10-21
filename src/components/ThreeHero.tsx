import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float } from "@react-three/drei";
import type { Mesh } from "three";
import { useReducedMotion } from "../hooks/useReducedMotion";

function WireObject({ active }: { active: boolean }) {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current || !active) return;
    mesh.current.rotation.x += delta * 0.075;
    mesh.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={0.5} rotationIntensity={0.06} floatIntensity={0.12}>
      <Icosahedron ref={mesh} args={[1.55, 1]}>
        <meshStandardMaterial color="#6EE7B7" emissive="#12372B" emissiveIntensity={0.45} wireframe roughness={0.4} metalness={0.25} />
      </Icosahedron>
    </Float>
  );
}

export default function ThreeHero() {
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [tabVisible, setTabVisible] = useState(() => typeof document === "undefined" || document.visibilityState === "visible");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = host.current;
    if (!node) return;
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => setVisible(entry?.isIntersecting ?? false), { threshold: 0.05 });
      observer.observe(node);
    } else {
      setVisible(true);
    }
    const onVisibility = (): void => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
      setWebglAvailable(Boolean(context));
    } catch {
      setWebglAvailable(false);
    }
  }, []);

  if (reducedMotion || !webglAvailable) {
    return <div className="hero-art hero-art--fallback" aria-hidden="true"><div className="fallback-orbit" /><div className="fallback-orbit fallback-orbit--inner" /><span>VS</span></div>;
  }

  return (
    <div className="hero-art" ref={host} aria-hidden="true">
      {visible && tabVisible && (
        <Suspense fallback={<div className="fallback-orbit" />}>
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.4], fov: 42 }} gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[3, 2, 4]} intensity={1.2} color="#6EE7B7" />
            <WireObject active={visible && tabVisible} />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}