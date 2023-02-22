import { CustomValidator } from "express-validator";
import { TypePhoto } from "../enums/type-photo.enum";

export const validPhotoType: CustomValidator = (photoType:string)=> {
    if(!(Object.values<string>(TypePhoto).includes(photoType))){
        console.log("error")
        throw new Error(`${photoType} is not valid`);
    }

    return true;
}