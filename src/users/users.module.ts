import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './schema/user.schema';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { S3Service } from 'src/auth/s3.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name:'User',
        schema: UserSchema
    }]), ],
    controllers: [UsersController],
    providers: [UsersService,S3Service],
    exports:[UsersService]
  })
export class UsersModule {}