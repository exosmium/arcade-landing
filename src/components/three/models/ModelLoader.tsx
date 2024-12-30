import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect } from 'react';
import { useArcadeStore } from '../../../store/arcadeStore';

interface ModelLoaderProps {
  url: string;
}

export default function ModelLoader({ url }: ModelLoaderProps) {
  const setCustomModel = useArcadeStore((state) => state.setCustomModel);
  const gltf = useLoader(GLTFLoader, url);
  
  useEffect(() => {
    return () => {
      // Reset to default model when unmounting
      setCustomModel('/arcade.glb');
    };
  }, [setCustomModel]);

  return (
    <primitive 
      object={gltf.scene} 
      scale={[0.5, 0.5, 0.5]} 
      position={[0, -1, 0]} 
    />
  );
}