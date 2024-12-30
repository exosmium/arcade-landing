import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Scene from './Scene';
import Lighting from './Lighting';

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
        <Lighting />
        <Scene />
      </Canvas>
    </div>
  );
}