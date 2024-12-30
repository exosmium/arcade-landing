import { create } from 'zustand';
import { NEON_COLORS } from '../constants/colors';
import { DEFAULT_MODEL_PATH } from '../constants/models';

interface ArcadeState {
  customModelUrl: string;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  setCustomModel: (url: string) => void;
}

export const useArcadeStore = create<ArcadeState>((set) => ({
  customModelUrl: DEFAULT_MODEL_PATH,
  primaryColor: NEON_COLORS.magenta,
  setPrimaryColor: (color) => set({ primaryColor: color }),
  setCustomModel: (url) => set({ customModelUrl: url }),
}));