import { create } from "zustand";

const useAppStore = create((set) => ({
  // 🔐 Auth
  token: localStorage.getItem("token") || null,
  email: localStorage.getItem("email") || "",
  name: localStorage.getItem("name") || "",

  login: (token, email, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);

    if (name) {
      localStorage.setItem("name", name);
    }

    set({ token, email, name });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({ token: null});
  },

  // 🎨 Theme
  theme: localStorage.getItem("theme") || "dark",

  updateProfile: (name, email) => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    set({ name, email });
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));

export default useAppStore;
