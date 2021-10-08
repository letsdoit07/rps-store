import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [AuthModule,UsersModule,ProductsModule,
    ConfigModule.forRoot({
      envFilePath:'config.env',
      isGlobal:true
    }),
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
      }
    )],
  controllers: [],
  providers: [],
})
export class AppModule {}
