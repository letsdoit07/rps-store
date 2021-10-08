/// <reference types="mongoose" />
export declare class User {
    name: string;
    email: string;
    passwordHash: string;
}
export declare const UserSchema: import("mongoose").Schema<import("mongoose").Document<User, any, any>, import("mongoose").Model<import("mongoose").Document<User, any, any>, any, any, any>, {}>;
