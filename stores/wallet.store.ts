import { create } from "zustand";

type State = {
  view: boolean;
  klip: boolean;
  count: number;
  filter: boolean;
  setView: (view: boolean) => void;
  setklip: (klip: boolean) => void;
  setCnt: (count: number) => void;
  setfilter: (filter: boolean) => void;
};

export const walletStore = create<State>((set) => ({
  view: false,
  klip: true,
  count: 0,
  filter: true,
  setView: (view: boolean) => set((state) => ({ ...state, view })),
  setklip: (klip: boolean) => set((state) => ({ ...state, klip })),
  setCnt: (count: number) => set((state) => ({ ...state, count })),
  setfilter: (filter: boolean) => set((state) => ({ ...state, filter })),
}));