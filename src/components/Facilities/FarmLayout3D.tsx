"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function FarmLayout3D() {
  return (
    <div className="w-full h-[30rem] bg-[#f8f5f2] rounded-[1rem] overflow-hidden mt-[4rem] shadow-2xl">
      <Canvas
        camera={{ position: [25, 20, 25], fov: 55 }}
        dpr={[1, 1.5]}
        frameloop="demand"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[20, 20, 10]} intensity={0.6} />
        <Ground />
        <Path />
        {Array.from({ length: 8 }).map((_, i) => (
          <Tree key={i} position={[-9, 0, -8 + i * 2.5]} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <Tree key={i + 100} position={[9, 0, -8 + i * 2.5]} />
        ))}
        {buildings.map((b, i) => (
          <OpenBuilding
            key={i}
            position={b.position as [number, number, number]}
            size={b.size as [number, number, number]}
            color={b.color}
            label={b.label}
          />
        ))}
        <Text
          position={[0, 0.1, 16]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={1.5}
          color="#777"
          anchorX="center"
          anchorY="middle"
        >
          Rodolívio
        </Text>
        <Orientation />
        <Sun />
        <OrbitControls enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
      <planeGeometry args={[30, 40]} />
      <meshStandardMaterial color="#e9e5df" />
    </mesh>
  );
}

function Path() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[3, 30]} />
      <meshStandardMaterial color="#ccc4ba" />
    </mesh>
  );
}

function OpenBuilding({
  position,
  size,
  color,
  label,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  label: string;
}) {
  const t = 0.2,
    h = 0.8;
  return (
    <group position={position} rotation={[0, Math.PI / 2, 0]}>
      <mesh position={[0, h / 2, -(size[2] / 2) + t / 2]}>
        <boxGeometry args={[size[0], h, t]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, h / 2, size[2] / 2 - t / 2]}>
        <boxGeometry args={[size[0], h, t]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-(size[0] / 2) + t / 2, h / 2, 0]}>
        <boxGeometry args={[t, h, size[2]]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[size[0] / 2 - t / 2, h / 2, 0]}>
        <boxGeometry args={[t, h, size[2]]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, h + 0.6, 0]}
        fontSize={0.5}
        color="#333"
        anchorX="center"
      >
        {label}
      </Text>
    </group>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 1.4]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
      <mesh position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.6, 8, 8]} />
        <meshStandardMaterial color="#3b7d3a" />
      </mesh>
    </group>
  );
}

function Orientation() {
  return (
    <group position={[0, 0.2, 20]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 2]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <Text
        position={[-4, 0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.7}
        color="#fff"
        anchorX="center"
        anchorY="middle"
      >
        Leste
      </Text>
      <Text
        position={[4, 0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.7}
        color="#fff"
        anchorX="center"
        anchorY="middle"
      >
        Oeste
      </Text>
      <Text
        position={[0, 0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={1}
        color="#ffd700"
        anchorX="center"
        anchorY="middle"
      >
        ➡️
      </Text>
    </group>
  );
}

function Sun() {
  return (
    <mesh position={[-25, 15, 0]}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial
        emissive="#ffdd00"
        emissiveIntensity={1}
        color="#ffdd00"
      />
    </mesh>
  );
}

const buildings = [
  {
    position: [-6, 0, 7],
    size: [4, 2, 3],
    color: "#ac7771",
    label: "Área Adm",
  },
  {
    position: [-2, 0, 7],
    size: [2.5, 2, 2.5],
    color: "#d3a79c",
    label: "Escifário",
  },
  { position: [-6, 0, 0], size: [4, 2, 4], color: "#b8b0a1", label: "Dejetos" },
  {
    position: [-6, 0, -6],
    size: [4, 2, 4],
    color: "#c7c2b8",
    label: "Composto",
  },
  { position: [3, 0, 8], size: [3, 2, 3], color: "#ffe5d4", label: "Reprod." },
  { position: [3, 0, 4], size: [3, 2, 3], color: "#ffd1b3", label: "Gestação" },
  {
    position: [3, 0, 0],
    size: [3, 2, 3],
    color: "#ffc2a1",
    label: "Maternidade",
  },
  { position: [3, 0, -4], size: [3, 2, 3], color: "#ffb08f", label: "Crèche" },
  { position: [3, 0, -8], size: [3, 2, 3], color: "#ff9e7d", label: "Engorda" },
];

export { FarmLayout3D };
