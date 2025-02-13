import {
  Body,
  Controller,
  Get,
  Post, UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.sto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller("kraken")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * import products
   * @param products
   */
  @Post()
  @UseGuards(JwtAuthGuard)
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
