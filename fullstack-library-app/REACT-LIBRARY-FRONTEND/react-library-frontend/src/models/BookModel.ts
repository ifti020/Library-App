export interface BooKModel{
    id : number;
    title: string;
    author?: string;
    description?: string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;
}