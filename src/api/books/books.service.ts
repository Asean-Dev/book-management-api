import { HttpStatus, Injectable } from "@nestjs/common";
import { CreateBookDto, FindBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { PrismaService } from "src/database/prisma.service";
import { convertPaginationPrisma } from "src/helpers/map";

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBookDto) {
    const result = await this.prisma.books.create({ data: dto });
    return {
      code: HttpStatus.CREATED,
      success: true,
      message: "Book created successfully",
      data: result,
    };
  }

  async findAll(dto: FindBookDto) {
    const pagination = convertPaginationPrisma({
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
      code: HttpStatus.OK,
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

  async findOne(id: number) {
    const result = await this.prisma.books.findUnique({ where: { id } });
    return {
      code: HttpStatus.OK,
      success: true,
      message: "Book fetched successfully",
      data: result,
    };
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const result = await this.prisma.books.update({
      where: { id },
      data: updateBookDto,
    });
    return {
      code: HttpStatus.OK,
      success: true,
      message: "Book updated successfully",
      data: result,
    };
  }

  async remove(id: number) {
    const result = await this.prisma.books.delete({ where: { id } });
    return {
      code: HttpStatus.OK,
      success: true,
      message: "Book deleted successfully",
      data: result,
    };
  }
}
