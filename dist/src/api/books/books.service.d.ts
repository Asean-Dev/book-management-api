import { HttpStatus } from "@nestjs/common";
import { CreateBookDto, FindBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { PrismaService } from "src/database/prisma.service";
export declare class BooksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBookDto): Promise<{
        code: HttpStatus;
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
        code: HttpStatus;
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
    findOne(id: number): Promise<{
        code: HttpStatus;
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
    update(id: number, updateBookDto: UpdateBookDto): Promise<{
        code: HttpStatus;
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
    remove(id: number): Promise<{
        code: HttpStatus;
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
