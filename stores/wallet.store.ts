import { create } from "zustand";

type State = {
  view: boolean;
  setView: (view: boolean) => void;
};

export const walletStore = create<State>((set) => ({
  view: false,
  setView: (view: boolean) => set((state) => ({ ...state, view })),
}));