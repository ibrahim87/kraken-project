import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  updated_at: Date;

  @Prop({ type: [Number], default: [] })
  prices: number[];

  @Prop({ required: true })
  rate: number;

  @Prop({ enum: ["product", "equipment"], required: true })
  category: "product" | "equipment";
}

export const ProductSchema = SchemaFactory.createForClass(Product);
