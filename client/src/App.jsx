import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import Users from "./pages/users/Users";
import useAppStore from "./store/useAppStore";
import { useEffect } from "react";
import Settings from "./pages/settings/Settings";

function App() {

  const theme = useAppStore((state) => state.theme)
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

  }, [theme]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>

              <Settings />

            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
