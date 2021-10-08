/// <reference types="multer" />
import { ConfigService } from "@nestjs/config";
export declare class S3Service {
    private configService;
    private s3;
    private storageName;
    constructor(configService: ConfigService);
    uploadFile(file: Express.Multer.File, name: string, folder: string): Promise<any>;
}
