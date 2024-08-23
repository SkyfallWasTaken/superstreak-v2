import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Streak {
  name: string;
  id: string;
  iconEmoji: string;
  description: string | null;
  streak: number;
  completed: boolean;
}

interface StreaksState {
  streaks: Streak[];
  addStreak: (streak: Streak) => void;
}

export const useStreaksStore = create<StreaksState>()(
  persist(
    (set, get) => ({
      streaks: [],
      addStreak: (streak: Streak) =>
        set({ streaks: [...get().streaks, streak] }),
    }),
    {
      name: "streaks-storage",
      getStorage: () => AsyncStorage,
    }
  )
);
