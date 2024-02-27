import create from "zustand";

interface BookStore {
  amount: number;
  title: string;
  updateAmount: (newAmount: number) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  amount: 0,
  title: "Sample Book",
  updateAmount: (newAmount) => set({ amount: newAmount }),
}));
