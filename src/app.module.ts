import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import { AppController } from './app.controller';
import { ApiConfigService } from './shared/api-config.service';
import { SharedModule } from './shared/shared.module';
import { HumanResourceModule } from './modules/human-resource/human-resource.module';
import { PersonalizedEmailModule } from './modules/personalized-email/personalized-email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        configService.postgresConfig,
      inject: [ApiConfigService],
    }),
    WinstonModule.forRoot({
      transports: [new winston.transports.Console()],
      // options
    }),
    HumanResourceModule,
    PersonalizedEmailModule,
  ],
  providers: [],
  exports: [TypeOrmModule],
  controllers: [AppController],
})
export class AppModule {}
