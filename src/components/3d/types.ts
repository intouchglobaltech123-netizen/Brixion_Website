export interface Scene3DConfig {
  cameraPosition: [number, number, number];
  fov: number;
  autoRotate: boolean;
  autoRotateSpeed: number;
  enableZoom: boolean;
}

export interface Brick3DState {
  isLoaded: boolean;
  hasError: boolean;
  errorMessage?: string;
  hovered: boolean;
  activeVariant?: 'single' | 'stack' | 'wall';
}

export interface RenderFallbackProps {
  message?: string;
  onRetry?: () => void;
}
