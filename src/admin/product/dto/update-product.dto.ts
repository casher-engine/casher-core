import {
  IsIn,
  IsJSON,
  IsNumber,
  IsOptional,
  Length,
  MaxLength,
} from 'class-validator';
import { Product } from '@core/entities/product.entity';

export class UpdateProductDto {
  @MaxLength(1000)
  @IsOptional()
  title?: string;

  @Length(20, 10000)
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  priceWithDiscount?: number;

  @IsIn(['ruble', 'dollar'])
  @IsOptional()
  priceCurrency?: Product['priceCurrency'];

  @IsJSON()
  @IsOptional()
  additionalFields?: string;
}
