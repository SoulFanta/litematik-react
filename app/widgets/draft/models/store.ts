// features/table-search/model/store.ts
import { create } from "zustand";

type TableSearchState = {
  query: string;
  setQuery: (q: string) => void;
  clear: () => void;
};

export const useTableSearch = create<TableSearchState>((set) => ({
  query: "",
  setQuery: (q) => set({ query: q }),
  clear: () => set({ query: "" }),
}));
