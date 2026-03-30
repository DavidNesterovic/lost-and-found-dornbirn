import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { isLoggedIn } from "../api/foundItemsApi"; 

export type Filters = {
    categoryName: string;
    query: string;
    color: string;
    location: string;
    showOnlyMine: boolean;
};

type Props = {
    filters: Filters;
    onChange: (next: Filters) => void;
    categories: string[];
    colors: string[];
    locations: string[];
    onReset: () => void;
};

export default function FoundFilters({
    filters,
    onChange,
    categories,
    colors,
    locations,
    onReset,
}: Props) {
    const [open, setOpen] = useState(false);

    const userIsLoggedIn = isLoggedIn();

    return (
        <div className="rounded-2xl border bg-white">
            {/* Header / Prompt */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
            >
                <div>
                    <div className="text-sm font-semibold">Filter</div>
                    <div className="text-xs text-gray-500">
                        Suche, Kategorie, Farbe, Ort {userIsLoggedIn && ", Meine Einträge"}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">
                        {open ? "Zuklappen" : "Öffnen"}
                    </span>
                    <span
                        className={`transition ${open ? "rotate-180" : "rotate-0"}`}
                        aria-hidden
                    >
                        <ChevronUpIcon className="h-4 w-4" />
                    </span>
                </div>
            </button>

            {/* Collapsible content */}
            {open && (
                <div className="border-t px-4 py-4">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <label className="text-xs font-medium text-gray-600">
                                Suche
                            </label>
                            <input
                                value={filters.query}
                                onChange={(e) =>
                                    onChange({ ...filters, query: e.target.value })
                                }
                                placeholder="z.B. Kappe, iPhone, Schlüssel…"
                                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="text-xs font-medium text-gray-600">
                                Kategorie
                            </label>
                            <select
                                value={filters.categoryName}
                                onChange={(e) =>
                                    onChange({ ...filters, categoryName: e.target.value })
                                }
                                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                            >
                                <option value="all">Alle</option>
                                {categories.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Color */}
                        <div>
                            <label className="text-xs font-medium text-gray-600">
                                Farbe
                            </label>
                            <select
                                value={filters.color}
                                onChange={(e) => onChange({ ...filters, color: e.target.value })}
                                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                            >
                                <option value="all">Alle</option>
                                {colors.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-2">
                            <label className="text-xs font-medium text-gray-600">
                                Ort
                            </label>
                            <select
                                value={filters.location}
                                onChange={(e) =>
                                    onChange({ ...filters, location: e.target.value })
                                }
                                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
                            >
                                <option value="all">Alle</option>
                                {locations.map((l) => (
                                    <option key={l} value={l}>
                                        {l}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="md:col-span-2 flex items-end justify-between">
                            {userIsLoggedIn ? (
                                <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 pb-2">
                                    <input
                                        type="checkbox"
                                        checked={filters.showOnlyMine}
                                        onChange={(e) => onChange({ ...filters, showOnlyMine: e.target.checked })}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                                    />
                                    Nur meine Einträge anzeigen
                                </label>
                            ) : (
                                <div></div>
                            )}

                            <button
                                type="button"
                                onClick={onReset}
                                className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}