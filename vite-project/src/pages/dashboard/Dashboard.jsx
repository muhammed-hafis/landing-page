import { useEffect, useState } from "react";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await res.json();
                setUsers(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const totalUsers = users.length;

    const totalCompanies = new Set(
        users.map((u) => u.company?.name)
    ).size;

    const usersWithWebsite = users.filter((u) => u.website).length;
    const usersWithPhone = users.filter((u) => u.phone).length;

    // 🔄 Loading Spinner (Themed)
    if (loading)
        return (
            <div className="
        flex justify-center items-center h-screen
        bg-transparent
        transition-colors duration-300
      ">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );

    // ❌ Error State
    if (error)
        return (
            <div className="
        min-h-screen flex items-center justify-center
        bg-white text-red-600
        dark:bg-black dark:text-red-400
        transition-colors duration-300
      ">
                {error}
            </div>
        );

    return (
        <div className="
      min-h-screen px-6 pt-24
      bg-white text-black
      dark:bg-black dark:text-white
      transition-colors duration-300
    ">

            <h1 className="text-3xl font-bold mb-10">
                Dashboard Overview
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {[
                    { title: "Total Users", value: totalUsers },
                    { title: "Total Companies", value: totalCompanies },
                    { title: "Users With Website", value: usersWithWebsite },
                    { title: "Users With Phone", value: usersWithPhone },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="
              p-6 rounded-xl shadow-lg
              bg-gray-100 border border-gray-300
              dark:bg-zinc-900 dark:border-zinc-800
              transition-colors duration-300
            "
                    >
                        <h2 className="text-gray-600 dark:text-zinc-400 text-sm mb-2">
                            {card.title}
                        </h2>
                        <p className="text-3xl font-bold">
                            {card.value}
                        </p>
                    </div>
                ))}

            </div>

            {/* Recent Users Table */}
            <div className="
        mt-12 rounded-xl p-6
        bg-gray-100 border border-gray-300
        dark:bg-zinc-900 dark:border-zinc-800
        transition-colors duration-300
      ">

                <h2 className="text-xl font-semibold mb-6">
                    Recent Users
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">

                        <thead>
                            <tr className="
                border-b
                border-gray-300 text-gray-600
                dark:border-zinc-700 dark:text-zinc-400
              ">
                                <th className="py-3">Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>City</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="
                    border-b
                    border-gray-200 hover:bg-gray-200
                    dark:border-zinc-800 dark:hover:bg-zinc-800
                    transition-colors duration-200
                  "
                                >
                                    <td className="py-3">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.company.name}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
}
