import { BooksService } from "./books.service";
import { CreateBookDto, FindBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(dto: CreateBookDto): Promise<{
        code: import("@nestjs/common").HttpStatus;
        success: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            publishedYear: number;
            genre: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(dto: FindBookDto): Promise<{
        code: import("@nestjs/common").HttpStatus;
        success: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            publishedYear: number;
            genre: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        pagination: {
            total: number;
            page: number;
            rowsPerPage: number;
        };
    }>;
    findOne(id: string): Promise<{
        code: import("@nestjs/common").HttpStatus;
        success: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            publishedYear: number;
            genre: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    }>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<{
        code: import("@nestjs/common").HttpStatus;
        success: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            publishedYear: number;
            genre: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    remove(id: string): Promise<{
        code: import("@nestjs/common").HttpStatus;
        success: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            publishedYear: number;
            genre: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
