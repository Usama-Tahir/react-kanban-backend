import { string } from '@hapi/joi';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LeanDocument, Model } from 'mongoose';
import { ErrorMessages } from 'src/common/errors';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ObjectId = require('mongoose').Types.ObjectId;
import { Cards, CardsDocument } from 'src/schema/cards.schema';
import { AddCardsDto, UpdateCardDto } from './types/cards.dto';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Cards.name)
    private readonly cardsModel: Model<CardsDocument>,
  ) {}
  async addCard(userId: string, cardPayload: AddCardsDto): Promise<LeanDocument<CardsDocument>> {
    const payload = {
      ...cardPayload,
      userId,
    };
    const newCard = await new this.cardsModel(payload);
    return newCard.save();
  }
  async getCards(userId: string): Promise<LeanDocument<CardsDocument>> {
    return this.cardsModel
      .find({
        userId: new ObjectId(userId),
      })
      .lean();
  }
  async updateCard(userId: string, cardId: string, payload: UpdateCardDto): Promise<LeanDocument<CardsDocument>> {
    const card = await this.cardsModel.findOne({ _id: cardId, userId: new ObjectId(userId) });
    if (!card) {
      throw new NotFoundException(ErrorMessages.CARD_DOES_NOT_EXIST);
    } else {
      const updatedCard = await this.cardsModel
        .findOneAndUpdate({ _id: cardId }, { ...payload }, { upsert: true, new: true })
        .lean();
      return updatedCard;
    }
  }
}
