import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDTO } from 'src/users/dto/create_user_dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}
    
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req): Promise<any> {
        
        return this.authService.login(req.user);
    }

    @Post('register')
    async registerUser(@Body() createUserDTO:CreateUserDTO): Promise<any>{
        return this.authService.createUser(createUserDTO)
    }




}
