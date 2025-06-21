import { IPaginationReq } from "./api-response.dto";

export const convertPaginationPrisma = (
  p: IPaginationReq
): {
  skip: number;
  take: number;
} => {
  let skip = 0;
  if (p.page != 1) {
    skip = p.rowsPerPage * (p.page - 1);
  }
  return {
    skip,
    take: p.rowsPerPage,
  };
};
