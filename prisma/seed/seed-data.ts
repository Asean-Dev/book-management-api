import { PrismaClient } from "@prisma/client";
import { SEED_DATA_BOOK } from "./data";

const prisma = new PrismaClient();
async function main() {
  const book = await prisma.books.count();
  console.log("book", book);
  if (book === 0) {
    for (const data of SEED_DATA_BOOK) {
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
