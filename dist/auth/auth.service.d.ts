import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDTO } from 'src/users/dto/create_user_dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        token: string;
    }>;
    createUser(createUserDTO: CreateUserDTO): Promise<any>;
}
