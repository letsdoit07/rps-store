import { BadRequestException, Injectable,Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { S3Service } from 'src/auth/s3.service';

import { CreateUserDTO } from './dto/create_user_dto';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel:Model<User>,private s3Service:S3Service){}

    async checkIfUserExists(email:string): Promise<Boolean> {
        return await this.userModel.exists({email})
    }

    async getUserProfile(email:string): Promise<User> {
        return await this.userModel.findOne({email})
    }

    async createUser(createUserDTO:CreateUserDTO): Promise<User>{
        let newUser = await this.userModel.create(createUserDTO);
        return newUser.save()
    }

    async uploadProfilePic(email:string,file:Express.Multer.File):Promise<any> {
        let url = await this.s3Service.uploadFile(file,file.originalname,"ProfilePictures")
        if(!url){
            throw new BadRequestException()
        }
        console.log(email)
        let query = await this.userModel.findOneAndUpdate({email},{
            profilePic:url
        })
        console.log(query)
        return url;
    }

}
