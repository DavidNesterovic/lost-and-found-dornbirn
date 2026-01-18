import {foundItems} from "../data/foundItems";
import ItemCard from "../components/ItemCard";
import {useMemo, useState} from "react";
import FoundFilters, {type Filters} from "../components/FoundFilters";
import type {FoundItem} from "../types";
import {breakpoints} from "../config/breakpoints.ts";
import ItemModal from "../components/ItemModal.tsx";
import { loadUserFoundItems } from "../storage/foundItemsStorage";

const defaultFilters: Filters = {
    query: "",
    category: "all",
    color: "all",
    location: "all",
};

// filter helper function basierend auf den Kategorien
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
    // filter Kategorien, werden später ans FoundFilters component übergeben
    const [filters, setFilters] = useState<Filters>(defaultFilters);

    const userItems = loadUserFoundItems();

    const allItems = useMemo(() => {
        return [...userItems, ...foundItems];
    }, [userItems]);

    const categories = useMemo(
        () => Array.from(new Set(allItems.map((i) => i.category))).sort(),
        [allItems]
    );
    const colors = useMemo(
        () => Array.from(new Set(allItems.map((i) => i.color))).sort(),
        [allItems]
    );
    const locations = useMemo(
        () => Array.from(new Set(allItems.map((i) => i.location))).sort(),
        [allItems]
    );

    const filtered = useMemo(
        () => allItems.filter((i) => matches(i, filters)),
        [allItems, filters]
    );

    const isMobile = window.matchMedia(`(max-width: ${breakpoints.sm - 1}px)`);

    const [selected, setSelected] = useState<FoundItem | null>(null);

    function openModal(item: FoundItem) {
        setSelected(item);
    }

    function closeModal() {
        setSelected(null);
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="mb-5">
                <h1 className="text-2xl font-semibold">Found Items</h1>
                <p className="text-sm text-gray-500">{allItems.length} Einträge</p>
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


