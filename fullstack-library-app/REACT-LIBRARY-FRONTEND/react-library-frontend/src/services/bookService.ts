import type {BooKModel} from "../models/BookModel.ts";
import type {ReviewModel} from "../models/ReviewModel.ts";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface BookResponse{
    content: BooKModel[];
    page:{
        totalElements: number;
        totalPages: number;
    };
}

// added review response
interface ReviewResponse{
    content: ReviewModel[];
    page:{
        totalElements: number;
        totalPages: number;
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
    },

    async searchBooksByTitle(title: string, pageNo: number, pageSize: number): Promise<BookResponse> {
        const response = await fetch(
            `${BASE_URL}/books/search/title?title=${title}&pageNo=${pageNo}&pagesize=${pageSize}`
        );
        if(!response.ok) {
            throw new Error("Failed to search books.");
        }
        return await response.json();
    },


    async searchBooksByCategory(category: string, pageNo: number, pageSize: number): Promise<BookResponse> {
        const response = await fetch(
            `${BASE_URL}/books/search/category?category=${category}&pageNo=${pageNo}&pagesize=${pageSize}`
        );
        if(!response.ok) {
            throw new Error("Failed to search books by category.");
        }
        return await response.json();
    },

//     service for get books by id
    async getBookById(id: string): Promise<BooKModel> {
        const response = await fetch(`${BASE_URL}/books/${id}`);
        if(!response.ok) {
            throw new Error("Failed to fetch books details.");
        }
        return await response.json();
    },
//     service for get book reviews
    async getBookReviewsById(bookId: string, pageNo: number=0, pageSize: number=3): Promise<ReviewResponse> {

        const response = await fetch(`${BASE_URL}/reviews/book/${bookId}?pageNo=${pageNo}&pagesize=${pageSize}`);
        if(!response.ok) {
            throw new Error("Failed to fetch book reviews.");
        }
        return await response.json();
    }

}