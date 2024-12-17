import { create } from "zustand";

interface StoreState {
  isSearchClick: boolean;
  setIsSearchClick: () => void;
}

const useNavbarStore = create<StoreState>((set) => ({
  isSearchClick: false,
  setIsSearchClick: () =>
    set((state) => ({ isSearchClick: !state.isSearchClick })),
}));

export default useNavbarStore;
