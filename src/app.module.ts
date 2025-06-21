import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { ApiModule } from "./api/api.module";
import { RouterModule } from "@nestjs/core";
import { BooksModule } from "./api/books/books.module";

@Module({
  imports: [
    ApiModule,
    RouterModule.register([
      {
        path: "api",
        module: ApiModule,
        children: [
          {
            path: "books",
            module: BooksModule,
          },
        ],
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
