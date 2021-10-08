"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const s3_service_1 = require("../auth/s3.service");
let UsersService = class UsersService {
    constructor(userModel, s3Service) {
        this.userModel = userModel;
        this.s3Service = s3Service;
    }
    async checkIfUserExists(email) {
        return await this.userModel.exists({ email });
    }
    async getUserProfile(email) {
        return await this.userModel.findOne({ email });
    }
    async createUser(createUserDTO) {
        let newUser = await this.userModel.create(createUserDTO);
        return newUser.save();
    }
    async uploadProfilePic(email, file) {
        let url = await this.s3Service.uploadFile(file, file.originalname, "ProfilePictures");
        if (!url) {
            throw new common_1.BadRequestException();
        }
        console.log(email);
        let query = await this.userModel.findOneAndUpdate({ email }, {
            profilePic: url
        });
        console.log(query);
        return url;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model, s3_service_1.S3Service])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map