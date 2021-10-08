import { CreateUserDTO } from 'src/users/dto/create_user_dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<any>;
    registerUser(createUserDTO: CreateUserDTO): Promise<any>;
}
