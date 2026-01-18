import type { FoundItem } from "../types";

const KEY = "found_items_v1";

export const loadUserFoundItems = (): FoundItem[] => {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? (JSON.parse(raw) as FoundItem[]) : [];
    } catch {
        return [];
    }
};

export const saveUserFoundItems = (items: FoundItem[]) => {
    console.log(items);
    localStorage.setItem(KEY, JSON.stringify(items));
};

export const addUserFoundItem = (item: FoundItem) => {
    const items = loadUserFoundItems();
    saveUserFoundItems([item, ...items]);
};
