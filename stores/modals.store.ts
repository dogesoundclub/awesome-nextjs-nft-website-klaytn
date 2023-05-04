import { create } from "zustand";

type State = {
  view: boolean;
  setView: (view: boolean) => void;
};

export const modalsStore = create<State>((set) => ({
  view: false,
  setView: (view: boolean) => set((state) => ({ ...state, view })),
}));