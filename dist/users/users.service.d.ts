import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create_user_dto';
import { User } from './schema/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    checkIfUserExists(email: string): Promise<Boolean>;
    getUserProfile(email: string): Promise<User>;
    createUser(createUserDTO: CreateUserDTO): Promise<User>;
}
