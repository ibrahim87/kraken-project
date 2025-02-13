import { Body, Controller, Get, Post } from "@nestjs/common";
import { Product } from "./product.schema";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * import products
   * @param products
   */
  @Post()
  async create(@Body() products: Product[]) {
    for (const product of products) {
      await this.productsService.createOrUpdate(product);
    }
    return { message: "products has been imported successfully" };
  }

  /**
   * get all products
   */
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }
}
