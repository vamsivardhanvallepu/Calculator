

import { create } from "zustand";


const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const useThemeStore = create((set) => ({
    theme: getSystemTheme(),
    toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useThemeStore;
