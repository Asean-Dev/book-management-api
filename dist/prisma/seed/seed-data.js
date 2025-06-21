"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const data_1 = require("./data");
const prisma = new client_1.PrismaClient();
async function main() {
    const book = await prisma.books.count();
    console.log("book", book);
    if (book === 0) {
        for (const data of data_1.SEED_DATA_BOOK) {
            const result = await prisma.books.create({
                data: {
                    title: data.title,
                    author: data.author,
                    publishedYear: data.publishedYear,
                    genre: data.genre,
                },
            });
            if (result) {
                console.log("Book Success");
            }
        }
    }
}
main();
//# sourceMappingURL=seed-data.js.map