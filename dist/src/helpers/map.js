"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPaginationPrisma = void 0;
const convertPaginationPrisma = (p) => {
    let skip = 0;
    if (p.page != 1) {
        skip = p.rowsPerPage * (p.page - 1);
    }
    return {
        skip,
        take: p.rowsPerPage,
    };
};
exports.convertPaginationPrisma = convertPaginationPrisma;
//# sourceMappingURL=map.js.map