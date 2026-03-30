export type FoundItem = {
    id: number;
    title: string;
    description: string;
    color: string;
    location: string;
    imageUrl?: string | null;
    contactEmail?: string;
    userId?: string;
    categoryId: number;
    categoryName?: string;
};