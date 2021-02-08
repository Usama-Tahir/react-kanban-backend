import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { cardsState, CardsStateEnum } from 'src/common/constants';

export class AddCardsDto {
  @ApiProperty({ example: 'sample task' })
  @IsString()
  @IsNotEmpty()
  title: string;
}

export class CardIdDto {
  @ApiProperty({ example: '5e7be8472a863904a7cee171' })
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  cardId: string;
}

export class UpdateCardDto {
  @ApiProperty({ example: CardsStateEnum.TODO, enum: cardsState })
  @IsIn(cardsState)
  state: CardsStateEnum;

  @ApiProperty({ example: new Date().getTime() })
  @IsNumber()
  startTime: number;

  @ApiProperty({ example: new Date().getTime() })
  @IsNumber()
  @IsOptional()
  endTime: number;

  @ApiProperty({ example: '25$' })
  @IsString()
  @IsOptional()
  calculatedCost: string;

  @ApiProperty({ example: '0.5h' })
  @IsString()
  @IsOptional()
  timeSpent: string;
}
