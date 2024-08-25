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

  /** MM-DD-YYYY */
  dates: string[];
}

interface StreaksState {
  streaks: Streak[];
  addStreak: (streak: Streak) => void;
  updateStreak: (id: string, newStreak: Partial<Streak>) => void;
  removeStreak: (id: string) => void;
}

export const useStreaksStore = create<StreaksState>()(
  persist(
    (set, get) => ({
      streaks: [],
      addStreak: (streak: Streak) =>
        set({ streaks: [...get().streaks, streak] }),
      updateStreak: (id: string, newStreak: Partial<Streak>) =>
        set({
          streaks: get().streaks.map((streak) =>
            streak.id === id ? { ...streak, ...newStreak } : streak
          ),
        }),
      removeStreak: (id: string) =>
        set({ streaks: get().streaks.filter((streak) => streak.id !== id) }),
    }),
    {
      name: "streaks-storage",
      getStorage: () => AsyncStorage,
    }
  )
);
