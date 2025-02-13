import { create } from "zustand";

const useCalculatorStore = create((set, get) => ({
  components: [],
  addComponent: (component) => {
    const { components } = get();
    if (!components.some((c) => c.label === component.label)) {
      set({ components: [...components, component] });
    }
  },
  removeComponent: (label) =>
    set((state) => ({
      components: state.components.filter((comp) => comp.label !== label),
    })),
  clearComponents: () => set({ components: [] }),
}));

export default useCalculatorStore;
