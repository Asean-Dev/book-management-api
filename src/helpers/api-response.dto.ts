// src/common/dto/api-response.dto.ts
import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, Min } from "class-validator";

export class ApiResponse<T> {
  @ApiProperty({ type: Number })
  code: number;

  @ApiProperty({ type: Boolean })
  success: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ required: false })
  data?: T;

  constructor(partial: Partial<ApiResponse<T>>) {
    Object.assign(this, partial);
  }
}

export const ResponseSuccess = <T>(data: T): ApiResponse<T> => {
  return new ApiResponse<T>({
    code: HttpStatus.CREATED,
    success: true,
    message: "success",
    data: data,
  });
};

export interface IPaginationReq {
  page: number;
  rowsPerPage: number;
}

export class PaginationDto implements IPaginationReq {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  rowsPerPage: number;
}
