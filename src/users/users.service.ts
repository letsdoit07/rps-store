import { Injectable,Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create_user_dto';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel:Model<User>){}

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

}
