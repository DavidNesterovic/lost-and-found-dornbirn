import { useState } from "react";
import type { FoundItem } from "../types";

type Props = {
    item: FoundItem;
    isMobile: boolean;
};

export default function FoundItemCard({ item, isMobile }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md hover:bg-gray-100 hover:-translate-y-1">
            <div
                className={isMobile ? "cursor-pointer" : undefined}
                onClick={() => isMobile && setOpen((v) => !v)}
            >
                <div className="h-44 w-full bg-gray-100 border-b">
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                            Kein Bild
                        </div>
                    )}
                </div>

                <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="line-clamp-2 text-base font-semibold">
                            {item.title}
                        </h3>

                        <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                            {item.category}
                        </span>
                    </div>

                    <p className="my-2 line-clamp-3 text-sm text-gray-600">
                        {item.description}
                    </p>

                    {isMobile && (
                        <div
                            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                open ? "max-h-40" : "max-h-0"
                            }`}
                        >
                            <div className="pt-2 space-y-2 text-sm text-gray-700 border-t">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-gray-500">Farbe</span>
                                    <span className="font-medium">{item.color}</span>
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-gray-500">Ort</span>
                                    <span className="font-medium">{item.location}</span>
                                </div>

                                <div className="pt-2 flex items-center justify-between gap-3 border-t">
                                    <span className="text-gray-500">Kontakt</span>
                                    <span className="font-medium">{item.contactName}</span>
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <span></span>
                                    <span className="font-medium">{item.contactEmail}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {isMobile && (
                        <div className="mt-3 text-xs font-medium text-gray-600 text-right">
                            {open ? "Verbergen ▲" : "Weitere Infos ▼"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
