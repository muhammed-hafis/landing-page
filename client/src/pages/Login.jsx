import {  useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAppStore from "../store/useAppStore";
import GlowCircle from "../components/GlowCircle"
export default function Login() {
    const navigate = useNavigate();
    const { login, token} = useAppStore();

    const [email, setEmail] = useState("user@gmail.com");
    const [password, setPassword] = useState("user");
    const [error, setError] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill all fields");
            return;
        }

        // Hardcoded demo credentials
        if (email !== 'user@gmail.com' || password !== "user") {
            setError("Invalid Credentials");
            return;
        }

        login("fake-jwt-token",email,password, "User");

        navigate("/home");
    };



    useEffect(() => {
        if (token) {
            navigate("/home")
        }
    },[token,navigate])
    return (
        <div
            className="
      min-h-screen flex items-center justify-center px-4 relative overflow-hidden
      bg-white dark:bg-black
      transition-colors duration-300
    "
        >

            {/* Background grid */}
            <div className="
      absolute inset-0
      bg-[repeating-linear-gradient(to_right,_rgba(0,0,0,0.05)_0px,_rgba(0,0,0,0.05)_1px,_transparent_1px,_transparent_120px)]
      dark:bg-[repeating-linear-gradient(to_right,_rgba(255,255,255,.1)_0px,_rgba(255,255,255,0.1)_1px,_transparent_1px,_transparent_120px)]
    " />

            <GlowCircle position="left-40 top-96" size="w-32 h-32" blur="blur-md" />
            <GlowCircle position="left-200 top-10" size="w-15 h-15" blur="blur-md" />
            <GlowCircle position="right-40 bottom-20" size="w-50 h-50" blur="blur-md" />

            <div
                className="
        relative w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-md
        bg-white/80 border border-gray-300 text-black
        dark:bg-zinc-900/80 dark:border-zinc-800 dark:text-white
        transition-colors duration-300
      "
            >

                <h2 className="text-3xl font-bold text-center mb-2">
                    Welcome Back
                </h2>

                <p className="text-center mb-6 text-gray-600 dark:text-zinc-400">
                    Login to access your dashboard
                </p>

                {error && (
                    <div className="mb-4 text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">

                    {/* Email */}
                    <div>
                        <label className="block text-sm mb-1 text-gray-600 dark:text-zinc-400">
                            Email
                        </label>
                        <input
                            type="email"
                            className="
              w-full px-4 py-2 rounded-lg outline-none
              bg-gray-100 border border-gray-300 text-black
              dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
              focus:ring-2 focus:ring-purple-500
              transition-colors duration-300
            "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm mb-1 text-gray-600 dark:text-zinc-400">
                            Password
                        </label>
                        <input
                            type="password"
                            className="
              w-full px-4 py-2 rounded-lg outline-none
              bg-gray-100 border border-gray-300 text-black
              dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
              focus:ring-2 focus:ring-pink-500
              transition-colors duration-300
            "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="
            w-full py-2 rounded-lg text-white font-semibold
            bg-gradient-to-r from-pink-500 to-purple-600
            hover:opacity-90 transition
          "
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>
    );

}
