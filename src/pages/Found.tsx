import ItemCard from "../components/ItemCard";
import {useEffect, useMemo, useState} from "react";
import FoundFilters, {type Filters} from "../components/FoundFilters";
import type {FoundItem} from "../types";
import {breakpoints} from "../config/breakpoints.ts";
import ItemModal from "../components/ItemModal.tsx";
import {getFoundItems} from "../api/foundItemsApi.ts";

const defaultFilters: Filters = {
    query: "",
    category: "all",
    color: "all",
    location: "all",
};

function matches(item: FoundItem, f: Filters) {
    const q = f.query.trim().toLowerCase();

    const textMatch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

    const categoryMatch = f.category === "all" || item.category === f.category;
    const colorMatch = f.color === "all" || item.color === f.color;
    const locationMatch = f.location === "all" || item.location === f.location;

    return textMatch && categoryMatch && colorMatch && locationMatch;
}

const Found = () => {
    const [filters, setFilters] = useState<Filters>(defaultFilters);
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getFoundItems();
                setItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);


    const categories = useMemo(
        () => Array.from(new Set(items.map((i) => i.category))).sort(),
        [items]
    );
    const colors = useMemo(
        () => Array.from(new Set(items.map((i) => i.color))).sort(),
        [items]
    );
    const locations = useMemo(
        () => Array.from(new Set(items.map((i) => i.location))).sort(),
        [items]
    );

    const filtered = useMemo(
        () => items.filter((i) => matches(i, filters)),
        [items, filters]
    );

    const isMobile = window.matchMedia(`(max-width: ${breakpoints.sm - 1}px)`);

    const [selected, setSelected] = useState<FoundItem | null>(null);

    function openModal(item: FoundItem) {
        setSelected(item);
    }

    function closeModal() {
        setSelected(null);
    }

    if (loading) return;

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="mb-5">
                <h1 className="text-2xl font-semibold">Gefundene Gegenstände</h1>
                <p className="text-sm text-gray-500">{items.length} Einträge</p>
            </div>

            <FoundFilters
                filters={filters}
                onChange={setFilters}
                categories={categories}
                colors={colors}
                locations={locations}
                onReset={() => setFilters(defaultFilters)}
            />

            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        isMobile={isMobile.matches}
                        onOpen={openModal}
                    />
                ))}
            </div>

            <ItemModal open={!!selected} item={selected} onClose={closeModal}/>
        </div>


    )
}

export default Found


