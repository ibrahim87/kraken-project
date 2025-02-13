import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { ProductModelModule } from "./product-model.module";

@Module({
  imports: [ProductModelModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
