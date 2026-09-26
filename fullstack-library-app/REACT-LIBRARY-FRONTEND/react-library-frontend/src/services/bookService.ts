import type {BooKModel} from "../models/BookModel.ts";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
interface BookResponse{
    content: BooKModel[];
    page:{
        totalElements: number;
        totalPage: number;
    };
}

export const bookService = {
    // All the services regarding books
    async getBooks(pageNo: number, pageSize: number): Promise<BookResponse> {
        const response = await fetch(
            `${BASE_URL}/books?pageNo=${pageNo}&pagesize=${pageSize}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch books.");
        }

        return await response.json();
    }
}