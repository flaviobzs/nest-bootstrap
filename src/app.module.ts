import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/typeorm.config';
import { configMongoose } from './config/mongoose.config';
import { getConnectionOptions } from 'typeorm';

// @nestjs/mongoose mongoose
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // TypeOrmModule.forRoot(config),

    // passar vazio por existe um ormconfig.ts
    TypeOrmModule.forRoot(),

    // carregar o arquivo de configuracar ormconfig.ts
    // TypeOrmModule.forRootAsync({
    //   useFactory: async () =>
    //     Object.assign(await getConnectionOptions(), {
    //       autoLoadEntities: true,
    //        retryDelay: 3000,
    // retryAttempts: 10,
    //     }),
    // }),

    // MongooseModule.forRoot('mongodb://localhost/nest'),
    // MongooseModule.forRoot(configMongoose),

    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
