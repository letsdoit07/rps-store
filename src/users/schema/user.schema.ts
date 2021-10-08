import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop({
        type:String
    })
    name:string

    @Prop({
        type:String,
        unique:true})
    email:string

    @Prop({
        type:String,
        required:true})
    passwordHash:string
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('toJSON',{
  transform:function (_,ret){
      ret.id = ret._id;
      delete ret._id
      delete ret.__v
      delete ret.passwordHash
  }  
})