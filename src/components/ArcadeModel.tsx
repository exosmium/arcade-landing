import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Mesh } from 'three';

function ArcadeCabinet() {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Main cabinet body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial 
          color="#FF00FF"
          emissive="#FF00FF"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.5, 0.51]}>
        <boxGeometry args={[1.5, 1.2, 0.1]} />
        <meshStandardMaterial 
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Screen frame */}
      <mesh position={[0, 0.5, 0.52]}>
        <boxGeometry args={[1.6, 1.3, 0.02]} />
        <meshStandardMaterial 
          color="#FF00FF"
          emissive="#FF00FF"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Control panel */}
      <mesh position={[0, -0.7, 0.3]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial 
          color="#8B00FF"
          emissive="#8B00FF"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Joystick */}
      <mesh position={[-0.4, -0.7, 0.4]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 16]} />
        <meshStandardMaterial 
          color="#00FF00"
          emissive="#00FF00"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Buttons */}
      {[0, 0.2, 0.4].map((x) => (
        <mesh key={x} position={[x + 0.1, -0.7, 0.4]} rotation={[-0.3, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.05, 16]} />
          <meshStandardMaterial 
            color="#FF0000"
            emissive="#FF0000"
            emissiveIntensity={1}
          />
        </mesh>
      ))}

      {/* Top light bar */}
      <mesh position={[0, 1.6, 0.2]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial 
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Side panels with neon strips */}
      {[-1, 1].map((x) => (
        <mesh key={x} position={[x * 0.99, 0, 0]}>
          <planeGeometry args={[0.1, 3]} />
          <meshStandardMaterial 
            color="#FF00FF"
            emissive="#FF00FF"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </mesh>
  );
}

export default function ArcadeModel() {
  return (
    <div className="h-[500px] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF00FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00FFFF" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#FFFFFF" />
        <ArcadeCabinet />
      </Canvas>
    </div>
  );
}