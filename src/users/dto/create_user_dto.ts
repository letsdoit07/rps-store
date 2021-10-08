import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class CreateUserDTO{

    @IsEmail({},{message:'Must be a Valid Email Address'})
    readonly email:string;

    @IsNotEmpty({
        message:"Name should not be Empty"
    })
    readonly name:string;

    @IsNotEmpty()
    password:string

    passwordHash:string
}