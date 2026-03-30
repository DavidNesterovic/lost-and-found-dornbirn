export type FoundItem = {
    id: number;
    title: string;
    description: string;
    color: string;
    location: string;
    imageUrl?: string | null;
    contactName: string;
    contactEmail: string;
    categoryId: number;
    categoryName: string;
};