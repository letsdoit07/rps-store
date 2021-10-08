/// <reference types="multer" />
import { User } from './schema/user.schema';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserProfile(email: string): Promise<User>;
    uploadProfilePic(email: string, file: Express.Multer.File): Promise<any>;
}
