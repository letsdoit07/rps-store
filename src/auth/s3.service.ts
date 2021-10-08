import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { S3 } from "aws-sdk";

@Injectable()
export class S3Service {
    private s3:S3;
    private storageName:string;

    constructor(private configService:ConfigService) {
        this.s3 = new S3({
            accessKeyId: configService.get<string>('AWS_KEY'),
            secretAccessKey:configService.get<string>('AWS_SECRET'),
        })
        
        this.storageName = configService.get<string>('AWS_S3_BUCKET')
    }


    async uploadFile(file:Express.Multer.File,name:string,folder:string):Promise<any>{
        const params = 
        {
            Bucket: this.storageName+"/"+folder,
            Key: name,
            Body: file.buffer,
            ACL: "public-read",
        };
        try{
            let s3Response = await this.s3.upload(params).promise()
            return s3Response.Location
        }
        catch (e){
            console.log(e);
            return null
        }
    }

    
}