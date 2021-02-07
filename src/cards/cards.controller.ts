import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LeanDocument } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';
import { HttpErrors } from 'src/common/errors';
import { RequestWithUser } from 'src/common/interface';
import { InternalServerErrorWithMessage, GenericUnauthorizedResponse } from 'src/common/responses';
import { CardsDocument } from 'src/schema/cards.schema';
import { UserDocument } from 'src/schema/user.schema';
import { CardsService } from './cards.service';
import { AddCardsDto, CardIdDto, UpdateCardDto } from './types/cards.dto';
import { AddCardsResponse, GetCardsResponse } from './types/cards.response';

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Ok', type: AddCardsResponse })
  @ApiUnauthorizedResponse({ description: HttpErrors.UNAUTHORIZED, type: GenericUnauthorizedResponse })
  @ApiInternalServerErrorResponse({
    description: HttpErrors.INTERNAL_SERVER_ERROR,
    type: InternalServerErrorWithMessage,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async postCards(@Req() req: RequestWithUser, @Body() body: AddCardsDto): Promise<LeanDocument<CardsDocument>> {
    return this.cardsService.addCard(req?.user?._id, body);
  }

  @Get()
  @ApiOkResponse({ description: 'OK', type: GetCardsResponse, isArray: true })
  @ApiUnauthorizedResponse({ description: HttpErrors.UNAUTHORIZED, type: GenericUnauthorizedResponse })
  @ApiInternalServerErrorResponse({
    description: HttpErrors.INTERNAL_SERVER_ERROR,
    type: InternalServerErrorWithMessage,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getCards(@Req() req: RequestWithUser): Promise<LeanDocument<CardsDocument>> {
    return this.cardsService.getCards(req?.user?._id);
  }

  @Patch(':cardId')
  @ApiOkResponse({ description: 'OK' })
  @ApiUnauthorizedResponse({ description: HttpErrors.UNAUTHORIZED, type: GenericUnauthorizedResponse })
  @ApiInternalServerErrorResponse({
    description: HttpErrors.INTERNAL_SERVER_ERROR,
    type: InternalServerErrorWithMessage,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async updateCard(
    @Req() req: RequestWithUser,
    @Param() params: CardIdDto,
    @Body() body: UpdateCardDto,
  ): Promise<LeanDocument<CardsDocument>> {
    return this.cardsService.updateCard(req?.user?._id, params.cardId, body);
  }
}
