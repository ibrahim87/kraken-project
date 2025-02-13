import {
  IsString,
  IsISO8601,
  IsArray,
  IsNumber,
  Min,
  Max,
  IsEnum,
  IsNotEmpty,
} from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsISO8601()
  updated_at: string;

  @IsArray()
  @IsNumber({}, { each: true })
  prices: number[];

  @IsNumber()
  @Min(0)
  @Max(100)
  rate: number;

  @IsEnum(["product", "equipment"])
  category: "product" | "equipment";
}
