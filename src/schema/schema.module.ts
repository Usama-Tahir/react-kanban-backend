import { DynamicModule, Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { Cards, CardsSchema } from './cards.schema';

const schemas = [
  MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema,
      collection: 'users',
    },
    {
      name: Cards.name,
      schema: CardsSchema,
      collection: 'cards',
    },
  ]),
];

@Global()
@Module({
  imports: schemas,
  exports: schemas,
})
export class SchemaModule {
  static forRoot(): DynamicModule {
    return {
      module: SchemaModule,
      exports: schemas,
      global: true,
    };
  }
}
