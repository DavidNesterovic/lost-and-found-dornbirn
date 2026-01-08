import type {FoundItem} from "../types";

type Props = {
    item: FoundItem;
};

export default function FoundItemCard({item}: Props) {
    return (
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md hover:bg-gray-100 hover:-translate-y-1">
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
                    <h3 className="line-clamp-2 text-base font-semibold">{item.title}</h3>

                    <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                        {item.category}
                    </span>
                </div>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {item.description}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-gray-500">Farbe</span>
                        <span className="font-medium">{item.color}</span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <span className="text-gray-500">Ort</span>
                        <span className="font-medium">{item.location}</span>
                    </div>
                </div>


            </div>
        </div>
    );
}