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

    // 🔥 Derived Stats
    const totalUsers = users.length;

    const totalCompanies = new Set(
        users.map((u) => u.company?.name)
    ).size;

    const usersWithWebsite = users.filter(
        (u) => u.website
    ).length;

    const usersWithPhone = users.filter(
        (u) => u.phone
    ).length;

    if (loading)
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Loading dashboard...
            </div>
        );

    if (error)
        return (
            <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
                {error}
            </div>
        );

    return (
        <div className="min-h-screen bg-black text-white px-6 py-24">
            <h1 className="text-3xl font-bold mb-10">
                Dashboard Overview
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Total Users */}
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
                    <h2 className="text-zinc-400 text-sm mb-2">
                        Total Users
                    </h2>
                    <p className="text-3xl font-bold">
                        {totalUsers}
                    </p>
                </div>

                {/* Companies */}
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
                    <h2 className="text-zinc-400 text-sm mb-2">
                        Total Companies
                    </h2>
                    <p className="text-3xl font-bold">
                        {totalCompanies}
                    </p>
                </div>

                {/* Users with Website */}
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
                    <h2 className="text-zinc-400 text-sm mb-2">
                        Users With Website
                    </h2>
                    <p className="text-3xl font-bold">
                        {usersWithWebsite}
                    </p>
                </div>

                {/* Users With Phone */}
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
                    <h2 className="text-zinc-400 text-sm mb-2">
                        Users With Phone
                    </h2>
                    <p className="text-3xl font-bold">
                        {usersWithPhone}
                    </p>
                </div>

            </div>

            {/* Recent Users Table */}
            <div className="mt-12 bg-zinc-900 rounded-xl border border-zinc-800 p-6">
                <h2 className="text-xl font-semibold mb-6">
                    Recent Users
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-zinc-400 border-b border-zinc-700">
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
                                    className="border-b border-zinc-800 hover:bg-zinc-800 transition"
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
