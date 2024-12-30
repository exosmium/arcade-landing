import { useRef } from 'react';
import { Mesh } from 'three';
import { useArcadeStore } from '../../../store/arcadeStore';
import { NEON_COLORS } from '../../../constants/colors';

export default function DefaultArcade() {
  const meshRef = useRef<Mesh>(null);
  const { primaryColor = NEON_COLORS.magenta } = useArcadeStore();

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Main cabinet body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial 
          color={primaryColor}
          emissive={primaryColor}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.5, 0.51]}>
        <boxGeometry args={[1.5, 1.2, 0.1]} />
        <meshStandardMaterial 
          color={NEON_COLORS.cyan}
          emissive={NEON_COLORS.cyan}
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Screen frame */}
      <mesh position={[0, 0.5, 0.52]}>
        <boxGeometry args={[1.6, 1.3, 0.02]} />
        <meshStandardMaterial 
          color={primaryColor}
          emissive={primaryColor}
          emissiveIntensity={1}
        />
      </mesh>

      {/* Control panel */}
      <mesh position={[0, -0.7, 0.3]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial 
          color={NEON_COLORS.purple}
          emissive={NEON_COLORS.purple}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Joystick */}
      <mesh position={[-0.4, -0.7, 0.4]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 16]} />
        <meshStandardMaterial 
          color={NEON_COLORS.green}
          emissive={NEON_COLORS.green}
          emissiveIntensity={1}
        />
      </mesh>

      {/* Buttons */}
      {[0, 0.2, 0.4].map((x) => (
        <mesh key={x} position={[x + 0.1, -0.7, 0.4]} rotation={[-0.3, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.05, 16]} />
          <meshStandardMaterial 
            color={NEON_COLORS.red}
            emissive={NEON_COLORS.red}
            emissiveIntensity={1}
          />
        </mesh>
      ))}

      {/* Top light bar */}
      <mesh position={[0, 1.6, 0.2]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial 
          color={NEON_COLORS.cyan}
          emissive={NEON_COLORS.cyan}
          emissiveIntensity={1}
        />
      </mesh>

      {/* Side panels with neon strips */}
      {[-1, 1].map((x) => (
        <mesh key={x} position={[x * 0.99, 0, 0]}>
          <planeGeometry args={[0.1, 3]} />
          <meshStandardMaterial 
            color={primaryColor}
            emissive={primaryColor}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </mesh>
  );
}