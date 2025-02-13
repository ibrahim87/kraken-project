import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.sto";

@Controller("kraken")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * import products
   * @param products
   */
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async create(@Body() products: CreateProductDto[]) {
    for (const product of products) {
      await this.productsService.createOrUpdate(product);
    }
    return { message: "products has been imported successfully" };
  }

  /**
   * find all products
   */
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }
}
