/// <reference types="multer" />
import { Model } from 'mongoose';
import { S3Service } from 'src/auth/s3.service';
import { CreateUserDTO } from './dto/create_user_dto';
import { User } from './schema/user.schema';
export declare class UsersService {
    private userModel;
    private s3Service;
    constructor(userModel: Model<User>, s3Service: S3Service);
    checkIfUserExists(email: string): Promise<Boolean>;
    getUserProfile(email: string): Promise<User>;
    createUser(createUserDTO: CreateUserDTO): Promise<User>;
    uploadProfilePic(email: string, file: Express.Multer.File): Promise<any>;
}
