import { Controller, Get, NotFoundException, Param, Query, UnauthorizedException, UseGuards } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './schema/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}    

    @UseGuards(JwtAuthGuard)
    @Get('profile/:id')
    getUserProfile(@Param('id') email:string): Promise<User>{
        let user = this.usersService.getUserProfile(email);
        if(!user){
            throw new NotFoundException()
        }
        return user;
    }

}
