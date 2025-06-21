import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { PaginationDto } from "src/helpers/api-response.dto";

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  publishedYear: number;

  @IsNotEmpty()
  @IsString()
  genre: string;
}

export class UuidDto {
  @IsNotEmpty()
  @IsUUID(4)
  uuid: string;
}

export class FindBookDto extends PaginationDto {
  @IsString()
  @IsOptional()
  title: string;
  @IsNumber()
  @IsOptional()
  publishedYear: number;
}
