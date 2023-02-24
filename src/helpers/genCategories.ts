import { CATEGORIES, TYPEPHOTO } from '../data/category'
import { ICategory } from '../interfaces/category.interface';
import { TypePhoto } from '../enums/type-photo.enum';
import { randomInt } from './tools';


export const genCategories = (): ICategory[] => {
    let categories: ICategory[] = [];
    for (let i: number = 0; i < CATEGORIES.length; i++) {
        const n = randomInt(3);
        let photoType: TypePhoto;
        if (n === 0) {
            photoType = TypePhoto.document;
        }
        else if (n === 1) {
            photoType = TypePhoto.photo;
        }
        else {
            photoType = TypePhoto.kml;
        }
        const category: ICategory = {
            categoryName: CATEGORIES[i],
            photoType,
        }
        categories.push(category);
    }
    return categories;
}