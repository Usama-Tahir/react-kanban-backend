import { ApiProperty } from '@nestjs/swagger';

export class AddCardsResponse {
  @ApiProperty({ example: '600c709648aa4170f1b5c0c8' })
  _id: string;

  @ApiProperty({ example: 'doto' })
  state: string;

  @ApiProperty({ example: '2.5$' })
  calculatedCost: string;

  @ApiProperty({ example: '0.5h' })
  timeSpent: string;

  @ApiProperty({ example: 'dd96dec43fb81c97' })
  userId: string;

  @ApiProperty({ example: '2021-01-23T19:03:23.021Z' })
  createdAt: string;

  @ApiProperty({ example: '2021-01-23T19:03:23.021Z' })
  updatedAt: string;
}

export class GetCardsResponse extends AddCardsResponse {}
