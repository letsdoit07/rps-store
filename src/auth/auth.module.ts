import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";
import { S3Service } from "./s3.service";

@Module({
    imports: [UsersModule,PassportModule,JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory: async (configService:ConfigService)=> ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: '90d',
        }, 
      }),
      inject:[ConfigService]
    })],
    providers: [AuthService,LocalStrategy,JwtStrategy,{
      inject:[ConfigService],
      provide: S3Service,
      useFactory: async (configService:ConfigService)=> new S3Service(configService),
    }],
    controllers: [AuthController],
    exports:[AuthService,S3Service]
  })
export class AuthModule {}