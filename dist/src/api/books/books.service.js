"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const map_1 = require("../../helpers/map");
let BooksService = class BooksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const result = await this.prisma.books.create({ data: dto });
        return {
            code: common_1.HttpStatus.CREATED,
            success: true,
            message: "Book created successfully",
            data: result,
        };
    }
    async findAll(dto) {
        const pagination = (0, map_1.convertPaginationPrisma)({
            page: dto.page,
            rowsPerPage: dto.rowsPerPage,
        });
        const result = await this.prisma.books.findMany({
            ...pagination,
            where: {
                title: {
                    contains: dto.title,
                },
                publishedYear: {
                    equals: dto.publishedYear,
                },
            },
        });
        const total = await this.prisma.books.count();
        return {
            code: common_1.HttpStatus.OK,
            success: true,
            message: "Books fetched successfully",
            data: result,
            pagination: {
                total: total,
                page: dto.page,
                rowsPerPage: dto.rowsPerPage,
            },
        };
    }
    async findOne(id) {
        const result = await this.prisma.books.findUnique({ where: { id } });
        return {
            code: common_1.HttpStatus.OK,
            success: true,
            message: "Book fetched successfully",
            data: result,
        };
    }
    async update(id, updateBookDto) {
        const result = await this.prisma.books.update({
            where: { id },
            data: updateBookDto,
        });
        return {
            code: common_1.HttpStatus.OK,
            success: true,
            message: "Book updated successfully",
            data: result,
        };
    }
    async remove(id) {
        const result = await this.prisma.books.delete({ where: { id } });
        return {
            code: common_1.HttpStatus.OK,
            success: true,
            message: "Book deleted successfully",
            data: result,
        };
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BooksService);
//# sourceMappingURL=books.service.js.map