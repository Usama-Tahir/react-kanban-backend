import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SchemaModule } from './schema/schema.module';
import * as Joi from '@hapi/joi';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test', 'staging').default('development'),
        PORT: Joi.number().default(4000),
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
      isGlobal: true,
    }),
    AuthModule,
    SchemaModule.forRoot(),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }),
    }),
    CardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
