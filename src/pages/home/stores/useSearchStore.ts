import { create } from "zustand";

interface IUseSearchStore {
  isOpen: boolean
  onOpen(): void
  onClose(): void
}
export const useSearchStore = create<IUseSearchStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))