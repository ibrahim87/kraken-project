import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./product.schema";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async createOrUpdate(product: Product): Promise<Product> {
    return this.productModel.findOneAndUpdate({ name: product.name }, product, {
      new: true,
      upsert: true,
    });
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
