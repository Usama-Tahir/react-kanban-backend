import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { cardsState, CardsStateEnum, currency, hourlyRate } from '../common/constants';

export type CardsDocument = Cards & Document;

@Schema({
  autoCreate: true,
  timestamps: true,
})
export class Cards {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, enum: cardsState, required: true, default: CardsStateEnum.TODO })
  state: string;

  @Prop({ type: String, default: '' })
  calculatedCost?: string;

  @Prop({ type: Number })
  startTime?: number;

  @Prop({ type: Number })
  endTime?: number;

  @Prop({ type: String, default: '' })
  timeSpent?: string;

  @Prop({ type: Number, default: hourlyRate })
  hourlyRate: number;

  @Prop({ type: String, default: currency })
  currency: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true, ref: 'User' })
  userId: MongooseSchema.Types.ObjectId;
}

export const CardsSchema = SchemaFactory.createForClass(Cards);
