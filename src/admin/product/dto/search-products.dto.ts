import { IsOptional, IsString } from 'class-validator';

export class AdminSearchProductsDto {
  @IsOptional()
  top?: number;

  @IsOptional()
  skip?: number;

  @IsString()
  q: string;
}
