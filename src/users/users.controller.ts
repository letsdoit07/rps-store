import { Controller, Get,Post, NotFoundException, Param, Query, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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

    @Post('uploadProfilePic/:id')
    @UseInterceptors(FileInterceptor('file'))
    uploadProfilePic(@Param('id') email:string,@UploadedFile() file:Express.Multer.File):Promise<any>{
        return this.usersService.uploadProfilePic(email,file);
    }

}
