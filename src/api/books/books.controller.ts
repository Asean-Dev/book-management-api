import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Query,
  Post,
  Put,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto, FindBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }

  @Get()
  findAll(@Query() dto: FindBookDto) {
    return this.booksService.findAll(dto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.booksService.findOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.booksService.remove(+id);
  }
}
