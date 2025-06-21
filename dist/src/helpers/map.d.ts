import { IPaginationReq } from "./api-response.dto";
export declare const convertPaginationPrisma: (p: IPaginationReq) => {
    skip: number;
    take: number;
};
