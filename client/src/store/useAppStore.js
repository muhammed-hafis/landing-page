import { create } from "zustand";

const useAppStore = create((set) => ({
  // 🔐 Auth
  token: localStorage.getItem("token") || null,
  email: localStorage.getItem("email") || "",
  name: localStorage.getItem("name") || "",

  login: (token,email,password, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    if (name) {
      localStorage.setItem("name", name);
    }

    set({ token, name });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({ token: null});
  },

  // 🎨 Theme
  theme: localStorage.getItem("theme") || "dark",

  updateProfile: (name) => {
    localStorage.setItem("name", name);
    set({ name });
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));

export default useAppStore;
