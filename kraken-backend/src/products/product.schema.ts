import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import {
  IsString,
  IsArray,
  IsNumber,
  Min,
  Max,
  IsEnum,
  IsNotEmpty,
  IsISO8601,
} from "class-validator";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ unique: true, required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ required: true })
  @IsISO8601() // Assure un format YYYY-MM-DD
  updated_at: string;

  @Prop({ type: [Number], default: [] })
  @IsArray()
  @IsNumber({}, { each: true })
  prices: number[];

  @Prop({ required: true })
  @IsNumber()
  @Min(0)
  @Max(100)
  rate: number;

  @Prop({ enum: ["product", "equipment"], required: true })
  @IsEnum(["product", "equipment"])
  category: "product" | "equipment";
}

export const ProductSchema = SchemaFactory.createForClass(Product);
