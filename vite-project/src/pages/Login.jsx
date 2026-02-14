import {  useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function Login() {
    const navigate = useNavigate();
    const { login, token } = useAuthStore();

    const [email, setEmail] = useState("user@gmail.com");
    const [password, setPassword] = useState("user");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill all fields");
            return;
        }
        if (email !== "user@gmail.com" || password !== "user") {
            setError("Invalid Credentials");
            return
        }
        login("fake-jwt-token"); // Zustand login
        navigate("/home");
    };
    useEffect(() => {
        if (token) {
            navigate("/home")
        }
    },[token])
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

            <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl rounded-full top-20 left-10"></div>
            <div className="absolute w-72 h-72 bg-pink-500/30 blur-3xl rounded-full bottom-10 right-10"></div>

            <div className="relative bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl shadow-xl w-full max-w-md">

                <h2 className="text-3xl font-bold text-white text-center mb-2">
                    Welcome Back
                </h2>

                <p className="text-zinc-400 text-center mb-6">
                    Login to access your dashboard
                </p>

                {error && (
                    <div className="mb-4 text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-pink-500 outline-none"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-zinc-500 text-center mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-purple-400 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
