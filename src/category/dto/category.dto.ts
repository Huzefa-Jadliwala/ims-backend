// category.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CategorySchema } from '../schema/category.schema';

export class CategoryDto {
  @ApiProperty({
    description: 'The name of the category',
    example: 'Electronics',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The description of the category',
    example: 'Devices and gadgets related to electronics.',
  })
  @IsString()
  description: string;

  // Mongoose schema definition
  static schema = CategorySchema;
}
