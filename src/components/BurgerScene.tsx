import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Ingredient } from "@/lib/brand";

type Props = { items: Ingredient[]; exploded: boolean; selected: string | null; onSelect: (id: string) => void };

function noiseTexture(base: string, spots: string, n = 900) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < n; i++) {
    g.fillStyle = spots;
    g.globalAlpha = Math.random() * 0.4;
    g.beginPath();
    g.arc(Math.random() * 256, Math.random() * 256, Math.random() * 3.5 + 0.5, 0, Math.PI * 2);
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function Layer({
  id,
  y,
  selected,
  onSelect,
  idx,
}: {
  id: string;
  y: number;
  selected: boolean;
  onSelect: () => void;
  idx: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const tex = useMemo(
    () => ({
      bun: noiseTexture("#c57d38", "#7a3e12"),
      patty: noiseTexture("#8a4a1e", "#3a1a08", 2400),
      lettuce: noiseTexture("#4a8a2a", "#2a5a18", 400),
    }),
    [],
  );

  useFrame((_, d) => {
    const g = ref.current;
    if (!g) return;
    g.position.y += (y - g.position.y) * (1 - Math.exp(-6 * Math.min(d, 0.05)));
    const s = selected ? 1.07 : 1;
    g.scale.x += (s - g.scale.x) * 0.15;
    g.scale.z = g.scale.x;
  });

  const m = (
    color: string,
    rough = 0.6,
    extra: Partial<THREE.MeshPhysicalMaterialParameters> = {},
  ) => (
    <meshPhysicalMaterial
      color={color}
      roughness={rough}
      emissive={selected ? "#d96835" : "#000"}
      emissiveIntensity={selected ? 0.2 : 0}
      {...extra}
    />
  );

  let mesh: React.ReactNode;
  switch (id) {
    case "topbun":
      mesh = (
        <group>
          <mesh scale={[1, 0.62, 1]} castShadow>
            <sphereGeometry args={[1.5, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshPhysicalMaterial
              map={tex.bun}
              roughness={0.42}
              clearcoat={0.5}
              clearcoatRoughness={0.45}
            />
          </mesh>
          {/* Sesame seeds */}
          {Array.from({ length: 48 }).map((_, i) => {
            const a = i * 2.1;
            const r = 0.25 + (i % 8) * 0.14;
            const h = Math.sqrt(Math.max(0, 1 - (r / 1.5) ** 2)) * 0.9;
            return (
              <mesh
                key={i}
                position={[Math.cos(a) * r, h, Math.sin(a) * r]}
                rotation={[0, a, 0.3]}
                scale={[0.055, 0.028, 0.028]}
              >
                <sphereGeometry args={[1, 8, 6]} />
                <meshStandardMaterial color="#f5e4c2" roughness={0.6} />
              </mesh>
            );
          })}
        </group>
      );
      break;

    case "botbun":
      mesh = (
        <mesh castShadow position={[0, -0.25, 0]}>
          <cylinderGeometry args={[1.5, 1.42, 0.5, 64]} />
          <meshPhysicalMaterial map={tex.bun} roughness={0.5} clearcoat={0.2} />
        </mesh>
      );
      break;

    case "mayo":
      mesh = (
        <mesh scale={[1, 0.15, 1]}>
          <sphereGeometry args={[1.45, 32, 12]} />
          {m("#f2eada", 0.2, { clearcoat: 0.9, clearcoatRoughness: 0.1, transmission: 0.1 })}
        </mesh>
      );
      break;

    case "chutney":
      mesh = (
        <mesh scale={[1, 0.12, 1]}>
          <sphereGeometry args={[1.4, 32, 12]} />
          {m("#4d8a28", 0.25, { clearcoat: 0.7, clearcoatRoughness: 0.2 })}
        </mesh>
      );
      break;

    case "onion":
      mesh = (
        <group>
          {(
            [
              [-0.5, 0.2],
              [0.5, -0.1],
              [0, 0.5],
              [0.1, -0.6],
            ] as [number, number][]
          ).map(([x, z], i) => (
            <mesh key={i} position={[x, 0, z]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.55, 0.075, 16, 48]} />
              {m("#c8a4c0", 0.28, { transmission: 0.35, thickness: 0.3 })}
            </mesh>
          ))}
        </group>
      );
      break;

    case "tomato":
      mesh = (
        <group>
          {(
            [
              [-0.6, 0],
              [0.6, 0.1],
              [0, -0.6],
              [0, 0.65],
            ] as [number, number][]
          ).map(([x, z], i) => (
            <mesh key={i} position={[x, 0, z]} castShadow>
              <cylinderGeometry args={[0.62, 0.62, 0.14, 40]} />
              {m("#c0321a", 0.18, { clearcoat: 1, clearcoatRoughness: 0.12 })}
            </mesh>
          ))}
        </group>
      );
      break;

    case "lettuce":
      mesh = (
        <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.88, 80]} />
          <meshStandardMaterial
            color="#5a9630"
            roughness={0.45}
            side={THREE.DoubleSide}
            map={tex.lettuce}
            onBeforeCompile={(s) => {
              s.vertexShader = s.vertexShader.replace(
                "#include <begin_vertex>",
                "vec3 transformed = position; float r = length(position.xy); transformed.z += sin(atan(position.y, position.x)*12.0)*0.14*r*r/3.0;",
              );
            }}
          />
        </mesh>
      );
      break;

    case "cheese":
      mesh = (
        <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[2.55, 0.07, 2.55]} />
          {m("#f2b030", 0.28, { clearcoat: 0.7, clearcoatRoughness: 0.2 })}
        </mesh>
      );
      break;

    case "patty":
      mesh = (
        <mesh castShadow>
          <cylinderGeometry args={[1.55, 1.55, 0.44, 64]} />
          <meshStandardMaterial map={tex.patty} roughness={0.88} bumpMap={tex.patty} bumpScale={4} />
        </mesh>
      );
      break;
  }

  return (
    <group
      ref={ref}
      position={[0, y + 4 + idx * 0.3, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "")}
    >
      {mesh}
    </group>
  );
}

const THICK: Record<string, number> = {
  topbun: 0.9,
  mayo: 0.12,
  onion: 0.14,
  tomato: 0.16,
  lettuce: 0.1,
  cheese: 0.08,
  patty: 0.44,
  chutney: 0.1,
  botbun: 0.5,
};

function Stack({ items, exploded, selected, onSelect }: Props) {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (group.current)
      group.current.position.y = Math.sin(s.clock.elapsedTime * 0.7) * 0.07;
  });

  const layers: { key: string; id: string; y: number }[] = [];
  const active = [...items].reverse().filter((i) => i.qty > 0);
  let y = 0;
  active.forEach((ing) => {
    for (let q = 0; q < ing.qty; q++) {
      layers.push({ key: `${ing.id}-${q}`, id: ing.id, y });
      y += (ing.id === "topbun" ? 0 : (THICK[ing.id] ?? 0.1)) + (exploded ? 0.44 : 0.01);
    }
  });
  const offset = -y / 2;

  return (
    <group ref={group}>
      {layers.map((l, i) => (
        <Layer
          key={l.key}
          idx={i}
          id={l.id}
          y={l.y + offset}
          selected={selected === l.id}
          onSelect={() => onSelect(l.id)}
        />
      ))}
    </group>
  );
}

export default function BurgerScene(p: Props) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [6.5, 3.2, 8.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      {/* Premium lighting for dark luxury theme */}
      <ambientLight intensity={0.2} />

      {/* Key light — warm golden */}
      <directionalLight
        position={[5, 9, 4]}
        intensity={3.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        color="#ffe5b0"
      />

      {/* Rim light — amber/orange */}
      <spotLight
        position={[-5, 4, -5]}
        intensity={60}
        color="#d96835"
        angle={0.5}
        penumbra={0.8}
      />

      {/* Fill — cool blue */}
      <spotLight
        position={[0, -3, 6]}
        intensity={15}
        color="#8ab0d0"
        angle={0.8}
        penumbra={1}
      />

      {/* Top bounce */}
      <pointLight position={[0, 6, 0]} intensity={1.5} color="#ffeedd" />

      <Environment resolution={256}>
        <Lightformer intensity={2.5} position={[0, 6, 0]} scale={[12, 12, 1]} rotation-x={Math.PI / 2} color="#ffeedd" />
        <Lightformer intensity={1.8} color="#ffc87a" position={[-6, 2, -1]} rotation-y={Math.PI / 2} scale={[20, 3, 1]} />
        <Lightformer intensity={0.9} color="#a0b8c8" position={[6, 1, 2]} rotation-y={-Math.PI / 2} scale={[20, 3, 1]} />
        <Lightformer intensity={0.5} color="#ffd080" position={[0, -3, 0]} scale={[10, 1, 10]} />
      </Environment>

      <Stack {...p} />

      <ContactShadows
        position={[0, -2.6, 0]}
        opacity={0.7}
        scale={12}
        blur={3}
        far={5}
        color="#0a0806"
      />

      <OrbitControls
        enablePan={false}
        minDistance={4.5}
        maxDistance={14}
        minPolarAngle={0.25}
        maxPolarAngle={Math.PI / 1.85}
        autoRotate={!p.selected}
        autoRotateSpeed={0.7}
        dampingFactor={0.08}
        enableDamping
      />
    </Canvas>
  );
}
