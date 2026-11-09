import { create } from "zustand";

export type AccountUser = {
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  role: string;
};

type AccountState = {
  user: AccountUser | null;
  signIn: (user: AccountUser) => void;
  signOut: () => void;
};

export const useAccount = create<AccountState>((set) => ({
  user: null,
  signIn: (user) => set({ user }),
  signOut: () => set({ user: null }),
}));
