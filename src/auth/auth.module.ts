import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import config from "../config/keys";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [UsersModule,PassportModule,JwtModule.register({
        secret:config.jwtSecret,


    })],
    providers: [AuthService,LocalStrategy,JwtStrategy],
    controllers: [AuthController],
    exports:[AuthService]
  })
export class AuthModule {}