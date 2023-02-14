import { TypePhoto } from "../enums/type-photo.enum";
export interface ICategory{
    id:number,
    categoryName: string,
    photoType: TypePhoto,
    categoriesParentId: number
}