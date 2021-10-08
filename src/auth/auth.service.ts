import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt";
import { CreateUserDTO } from 'src/users/dto/create_user_dto';

@Injectable()
export class AuthService {

    constructor(private readonly jwtService:JwtService,private readonly usersService:UsersService){}

    async validateUser(email:string,password:string):Promise<any>{
        let user = await this.usersService.getUserProfile(email);
        if(user && bcrypt.compareSync(password,user.passwordHash)){

            return user;    
        }
        return null;   
    }

    async login(user: any){
        let payload = {email:user.email,id:user.id}
        console.log(payload)
        return {
            token:this.jwtService.sign(payload)
        }
    }

    async createUser(createUserDTO:CreateUserDTO): Promise<any>{
        let salt = bcrypt.genSaltSync();
        let hash = bcrypt.hashSync(createUserDTO.password,salt);
        createUserDTO.passwordHash = hash;
        return await this.usersService.createUser(createUserDTO)
    }
    
    
}

