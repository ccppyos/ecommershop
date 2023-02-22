import { TypePhoto } from "../enums/type-photo.enum";
export interface ICategory{
    categoryName: string,
    photoType: TypePhoto,
    categoriesParentId: number
}