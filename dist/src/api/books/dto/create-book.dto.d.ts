import { PaginationDto } from "src/helpers/api-response.dto";
export declare class CreateBookDto {
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
}
export declare class UuidDto {
    uuid: string;
}
export declare class FindBookDto extends PaginationDto {
    title: string;
    publishedYear: number;
}
