import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const usersPerPage = 6;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    // 🔍 Search
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    // 🔄 Sort
    const sortedUsers = [...filteredUsers].sort((a, b) =>
        sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );

    // 📄 Pagination
    const indexOfLast = currentPage * usersPerPage;
    const indexOfFirst = indexOfLast - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

    return (
        <div className="min-h-screen bg-black text-white px-6 pt-22">

            <h1 className="text-3xl font-bold mb-8">Users</h1>

            {/* Search + Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="flex-1 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                />

                <select
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">A → Z</option>
                    <option value="desc">Z → A</option>
                </select>

            </div>
            {loading && (
                <div className="flex justify-center items-center h-60">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            {/* Users Grid */}
            {
                !loading && (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {currentUsers.map((user) => (
                            <div
                                key={user.id}
                                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-purple-500 transition"
                            >

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center font-bold">
                                        {user.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h2 className="font-semibold">{user.name}</h2>
                                        <p className="text-sm text-zinc-400">{user.email}</p>
                                    </div>
                                </div>

                                <p className="text-sm text-zinc-400 mb-2">
                                    Company: {user.company.name}
                                </p>

                                <p className="text-sm text-zinc-400 mb-4">
                                    City: {user.address.city}
                                </p>

                                <button
                                    onClick={() => setSelectedUser(user)}
                                    className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
                                >
                                    View Details
                                </button>

                            </div>
                        ))}

                    </div>
                )
            }



            {/* Pagination */}
            <div className="flex justify-center mt-10 gap-3">

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 rounded-lg ${currentPage === i + 1
                            ? "bg-purple-600"
                            : "bg-zinc-800 hover:bg-zinc-700"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

            </div>

            {/* Modal */}
            <Modal
                isOpen={!!selectedUser}
                onClose={() => setSelectedUser(null)}
            >
                {selectedUser && (
                    <>
                        <h2 className="text-xl font-bold mb-4">
                            {selectedUser.name}
                        </h2>

                        <p>Email: {selectedUser.email}</p>
                        <p>Phone: {selectedUser.phone}</p>
                        <p>Website: {selectedUser.website}</p>
                        <p>Company: {selectedUser.company.name}</p>
                        <p>City: {selectedUser.address.city}</p>
                    </>
                )}
            </Modal>


        </div>
    );
}
