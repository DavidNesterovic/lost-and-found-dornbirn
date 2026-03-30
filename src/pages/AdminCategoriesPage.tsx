import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { getAccessToken } from "../api/foundItemsApi";

type AdminCategory = {
    id: string;
    name: string;
    itemCount: number;
};

const api = axios.create({
    baseURL: "http://localhost:5016/api",
});

const AdminCategoriesPage = () => {
    const [categories, setCategories] = useState<AdminCategory[]>([]);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const token = getAccessToken();

    const authConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const loadCategories = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await api.get("/categories/admin/all", authConfig);
            setCategories(response.data);
        } catch (err: any) {
            setError(err.response?.data ?? "Failed to load categories.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedName = newCategoryName.trim();

        if (!trimmedName) {
            setError("Category name is required.");
            return;
        }

        try {
            setSubmitting(true);
            setError(null);

            const response = await api.post(
                "/categories/admin/",
                { name: trimmedName },
                authConfig
            );

            const createdCategory = response.data;

            setCategories((prev) => [
                ...prev,
                {
                    id: createdCategory.id,
                    name: createdCategory.name,
                    itemCount: 0,
                },
            ]);

            setNewCategoryName("");
        } catch (err: any) {
            setError(err.response?.data ?? "Failed to create category.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            setError(null);

            await api.delete(`/categories/${id}`, authConfig);

            setCategories((prev) => prev.filter((category) => category.id !== id));
        } catch (err: any) {
            setError(err.response?.data ?? "Failed to delete category.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Category Admin</h1>
                <p className="mt-2 text-gray-600">
                    Create categories and manage existing ones.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">Create category</h2>

                    <form onSubmit={handleCreate} className="mt-4 space-y-4">
                        <div>
                            <label
                                htmlFor="categoryName"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Category name
                            </label>

                            <input
                                id="categoryName"
                                type="text"
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                                placeholder="e.g. Electronics"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
                        >
                            {submitting ? "Creating..." : "Create category"}
                        </button>
                    </form>

                    {error && (
                        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    )}
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">All categories</h2>
                        <span className="text-sm text-gray-500">{categories.length} total</span>
                    </div>

                    {loading ? (
                        <p className="text-gray-500">Loading categories...</p>
                    ) : categories.length === 0 ? (
                        <p className="text-gray-500">No categories found.</p>
                    ) : (
                        <div className="space-y-3">
                            {categories.map((category) => {
                                const isDeleteDisabled = category.itemCount > 0;

                                return (
                                    <div
                                        key={category.id}
                                        className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3"
                                    >
                                        <div>
                                            <p className="font-medium text-gray-900">{category.name}</p>
                                            <p className="text-sm text-gray-500">
                                                Attached items: {category.itemCount}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => handleDelete(category.id)}
                                            disabled={isDeleteDisabled}
                                            title={
                                                isDeleteDisabled
                                                    ? "Cannot delete category with assigned items"
                                                    : "Delete category"
                                            }
                                            className={`rounded-lg p-2 transition ${
                                                isDeleteDisabled
                                                    ? "cursor-not-allowed text-gray-300"
                                                    : "text-red-500 hover:bg-red-50 hover:text-red-600"
                                            }`}
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminCategoriesPage;