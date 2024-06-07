import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookedRoom {
  checkIn: Date;
  checkOut: Date;
  isConfirmed: boolean;
  totalPrice: number;
  roomId: number;
}

interface UserData {
  email: string | null;
  id: string | null;
}

export interface AuthState {
  token: string | null;
  userData: UserData | null;
  bookedRoom: BookedRoom | null;
}

export interface AuthActions {
  setToken: (token: string) => void;
  setUserData: (userData: UserData) => void;
  setBookedRoom: (bookedRoom: BookedRoom) => void;
  clearAuth: () => void;
}

// Define initial state
const INITIAL_STATE: AuthState = {
  token: null,
  userData: null,
  bookedRoom: null,
};

// Create the store
export const useAuthStore = create(
  persist<AuthState & AuthActions>(
    (set) => ({
      ...INITIAL_STATE,
      setToken: (token) => set((state) => ({ ...state, token })),
      setUserData: (userData) => set((state) => ({ ...state, userData })),
      setBookedRoom: (bookedRoom) => set((state) => ({ ...state, bookedRoom })),
      clearAuth: () => set(() => INITIAL_STATE),
    }),
    { name: "auth", skipHydration: true } // Persist configuration
  )
);
