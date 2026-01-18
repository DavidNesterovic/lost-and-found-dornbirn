import {useEffect} from "react";
import type {FoundItem} from "../types";
import {XMarkIcon} from "@heroicons/react/24/outline";


type Props = {
    open: boolean;
    item: FoundItem | null;
    onClose: () => void;
};

export default function ItemModal({open, item, onClose}: Props) {
    useEffect(() => {
        if (!open) return;

        // scroll lock
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // global esc event listener
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prev;
        };
    }, [open, onClose]);

    if (!open || !item) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <button
                type="button"
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
                aria-label="Modal schließen"
            />

            {/* Dialog */}
            <div className="relative mx-auto mt-10 w-[min(820px,92vw)] rounded-2xl bg-white shadow-lg">
                <div className="flex items-start justify-between gap-3 border-b p-4">
                    <div className="min-w-0">
                        <h2 className="text-lg font-semibold truncate">{item.title}</h2>
                        <div className="mt-1 text-sm text-gray-600">
                            {item.category} • {item.location}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Modal schließen"
                        className="shrink-0 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        <XMarkIcon className="h-5 w-5"/>
                    </button>
                </div>

                <div className="max-h-[70vh] overflow-auto p-4 space-y-4">
                    <div className="h-64 w-full overflow-hidden rounded-xl bg-gray-100">
                        {item.image ? (
                            <img src={item.image} alt={item.title} className="h-full w-full object-cover"/>
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                                Kein Bild
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-gray-700">{item.description}</p>

                    <div className="grid gap-2 text-sm">
                        <Row label="Farbe" value={item.color}/>
                        <Row label="Ort" value={item.location}/>
                        <Row label="Kontakt" value={item.contactName}/>
                        <Row label="E-Mail" value={item.contactEmail}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Row({label, value}: { label: string; value?: string }) {
    if (!value) return null;
    return (
        <div className="flex items-center justify-between gap-3 border-b py-2 last:border-b-0">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-gray-800">{value}</span>
        </div>
    );
}
