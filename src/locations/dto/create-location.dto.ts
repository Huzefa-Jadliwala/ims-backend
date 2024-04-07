// create-location.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class CreateLocationDto {
  @ApiProperty({
    description: 'this is the city of the location',
    example: 'Chemnitz',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  city: string;

  @ApiProperty({
    description: 'this is the pincode of the location',
    example: '09126',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  pincode: string;

  @ApiProperty({
    description: 'this is the province of the location',
    example: 'Saxony',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  province: string;

  @ApiProperty({
    description: 'this is the country of the location',
    example: 'Germany',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  country: string;

  @ApiProperty({
    description: 'this is the unique id of the user',
    example: '6611bfde3a1334482976c27c',
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  user_id: string;
}
