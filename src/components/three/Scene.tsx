import { Suspense } from 'react';
import DefaultArcade from './models/DefaultArcade';
import ModelLoader from './models/ModelLoader';
import { useArcadeStore } from '../../store/arcadeStore';
import { ErrorBoundary } from './ErrorBoundary';
import LoadingSpinner from './LoadingSpinner';

export default function Scene() {
  const { customModelUrl } = useArcadeStore();
  
  return (
    <ErrorBoundary fallback={<DefaultArcade />}>
      <Suspense fallback={<LoadingSpinner />}>
        {customModelUrl === '/arcade.glb' ? (
          <DefaultArcade />
        ) : (
          <ModelLoader url={customModelUrl} />
        )}
      </Suspense>
    </ErrorBoundary>
  );
}