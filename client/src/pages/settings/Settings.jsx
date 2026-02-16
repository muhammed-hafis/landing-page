import { useState, useEffect } from "react";
import useAppStore from "../../store/useAppStore";

export default function Settings() {
    const { name, email, updateProfile, theme, toggleTheme } = useAppStore();

    const [formName, setFormName] = useState("");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setFormName(name || "");
    }, [name]);

    const handleSave = (e) => {
        e.preventDefault();
        updateProfile(formName);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="min-h-screen px-6 pt-24 bg-transparent text-black dark:text-white transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-10">Settings</h1>

            <div className="grid md:grid-cols-2 gap-8">

                {/* Profile Card */}
                <div className="bg-gray-100 border border-gray-300 dark:bg-zinc-900 dark:border-zinc-800 rounded-xl p-8 transition-colors duration-300">
                    <h2 className="text-xl font-semibold mb-6">
                        Profile Settings
                    </h2>

                    <form onSubmit={handleSave} className="space-y-4">

                        {/* Editable Name */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-gray-300 text-black dark:bg-zinc-800 dark:border-zinc-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-colors duration-300"
                        />

                        {/* Read-only Email */}
                        <input
                            type="email"
                            value={email}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-200 border border-gray-300 text-gray-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-gray-400 rounded-lg cursor-not-allowed"
                        />

                        {/* Save Button */}
                        <button
                            type="submit"
                            className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition text-white"
                        >
                            Save Changes
                        </button>

                        {saved && (
                            <p className="text-green-500 dark:text-green-400 text-sm">
                                Profile updated successfully!
                            </p>
                        )}
                    </form>
                </div>

                {/* Theme Card */}
                <div className="bg-gray-100 border border-gray-300 dark:bg-zinc-900 dark:border-zinc-800 rounded-xl p-8 transition-colors duration-300">
                    <h2 className="text-xl font-semibold mb-6">
                        Appearance
                    </h2>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">
                            Theme Mode
                        </span>

                        <button
                            onClick={toggleTheme}
                            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition"
                        >
                            {theme === "dark"
                                ? "Switch to Light"
                                : "Switch to Dark"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
