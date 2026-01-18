import {useState} from "react";
import type {FoundItem} from "../types";
import {ChevronUpIcon} from "@heroicons/react/24/outline";


type Props = {
    item: FoundItem;
    isMobile: boolean;
    onOpen?: (item: FoundItem) => void;
};

export default function FoundItemCard({item, isMobile, onOpen}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md hover:bg-gray-100 hover:-translate-y-1">
            <div
                className="cursor-pointer"
                // on click wird entweder das Modal geöffnet, oder im mobile view (<sm) wird die card collapsed und die extra infos werden unten gerendered
                onClick={() => {
                    if (isMobile) setOpen((v) => !v);
                    else onOpen?.(item);
                }}
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

                        <span
                            className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
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
                        <div className="mt-3 flex items-center justify-end gap-1 text-xs font-medium text-gray-600">
                            <span>{open ? "Verbergen" : "Weitere Infos"}</span>
                            <span
                                className={`transition ${open ? "rotate-180" : "rotate-0"}`}
                                aria-hidden
                            >
                                <ChevronUpIcon className="h-4 w-4"/>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
